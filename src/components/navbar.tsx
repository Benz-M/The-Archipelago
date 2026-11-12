
import { ArrowUpRight } from "lucide-react"
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink, Link } from "react-router"
import MobileNavBar from "./mobile-navbar";

type Indicator = {
    left: number;
    top: number;
    width: number;
    height: number;
}

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Activities', href: '/activities' },
    { label: 'Food & Culture', href: '/food-culture' },
]

export default function DesktopNav() {
    
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('#home')
    const [hovered, setHovered] = useState<string | null>(null)
    const [indicator, setIndicator] = useState<Indicator | null>(null)

    const listRef = useRef<HTMLUListElement>(null)
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
    const menuButtonRef = useRef<HTMLButtonElement>(null)

    const target = hovered ?? active

    const measure = useCallback(() => {
        const el = linkRefs.current[target]
        if (!el || el.offsetWidth === 0) {
        setIndicator(null)
        return
        }
        setIndicator({
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
        })
    }, [target])

    useLayoutEffect(() => {
        measure()
    }, [measure])

    useEffect(() => {
        const list = listRef.current
        if (!list) return
        const ro = new ResizeObserver(measure)
        ro.observe(list)
        document.fonts?.ready.then(measure)
        return () => ro.disconnect()
    }, [measure])


    useEffect(() => {
        if (!menuOpen) return
        const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setMenuOpen(false)
            menuButtonRef.current?.focus()
        }
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [menuOpen])

    const handleNav = (href: string) => {
        setActive(href)
        setMenuOpen(false)
    }
    
    return (
        <>
            <nav aria-label="Primary" className="animate-drop-in hidden flex-1 items-center justify-end p-3 pr-6 [animation-delay:350ms] lg:flex">
                <div className="flex w-full max-w-lg items-center justify-between gap-2 rounded-full bg-[#3989D6]/75 p-1 pl-2.5 shadow-[0_6px_24px_rgba(30,90,150,0.16),inset_0_1px_0_rgba(255,255,255,0.4)] ring-1 ring-white/40 backdrop-blur-2xl backdrop-saturate-150">
                    <ul ref={listRef} onMouseLeave={() => setHovered(null)} className="relative flex flex-1 items-center justify-between text-[13px] font-medium">
                    {indicator && (
                        <span aria-hidden="true" className="pointer-events-none absolute rounded-full bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-[left,top,width,height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" style={indicator}/>
                    )}
                        {NAV_LINKS.map(({ label, href }) => {
                            const isActive = active === href
                            return (
                                <li key={href}>
                                    <NavLink
                                        ref={(el) => {
                                            linkRefs.current[href] = el
                                        }}
                                        to={href}
                                        onClick={() => handleNav(href)}
                                        onMouseEnter={() => setHovered(href)}
                                        onFocus={() => setHovered(href)}
                                        onBlur={() => setHovered(null)}
                                        aria-current={isActive ? 'page' : undefined}
                                        className={`relative z-10 block rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                                            target === href || isActive ? 'text-white' : 'text-white/85 hover:text-white'
                                        }`}
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <Link
                        to="/booking"
                        className="group inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#173B65] shadow-sm transition-all duration-200 hover:bg-[#EAF4FF] hover:shadow-md active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                        Plan my Trip
                        <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                    </Link>
                </div>
            </nav>
            <MobileNavBar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                active={active}
                handleNav={handleNav}
                menuButtonRef={menuButtonRef}
            />
        </>
    )
}
