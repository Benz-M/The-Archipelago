
import { ArrowUpRight, X, Menu } from "lucide-react"
import { NavLink, Link } from "react-router"

import type { RefObject, Dispatch, SetStateAction, } from "react"

interface MobileNavBarProps {
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
    active: string;
    handleNav: (href: string) => void;
    menuButtonRef: RefObject<HTMLButtonElement | null>;
}

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Activities', href: '/activities' },
    { label: 'Food & Culture', href: '/food-culture' },
]

export default function MobileNavBar({ menuOpen, setMenuOpen, active, handleNav, menuButtonRef }: MobileNavBarProps) {
    return (
        <>
            <div className="animate-fade-in flex items-center pr-4 [animation-delay:350ms] sm:pr-6 lg:hidden">
                <button
                    ref={menuButtonRef}
                    type="button"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    className="grid h-10 w-10 place-items-center rounded-full bg-[#3989D6]/75 text-white shadow-[0_6px_24px_rgba(30,90,150,0.16),inset_0_1px_0_rgba(255,255,255,0.4)] ring-1 ring-white/40 backdrop-blur-2xl backdrop-saturate-150 transition-colors hover:bg-[#3989D6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    {menuOpen ? (
                        <X size={19} strokeWidth={2.25} aria-hidden="true" />
                    ) : (
                        <Menu size={19} strokeWidth={2.25} aria-hidden="true" />
                    )}
                </button>
            </div>

            <nav
                id="mobile-menu"
                aria-label="Mobile"
                aria-hidden={!menuOpen}
                className={`absolute inset-x-4 top-full z-99 -mt-2 rounded-3xl bg-[#3989D6]/90 p-2.5 text-white shadow-[0_8px_30px_rgba(30,90,150,0.18),inset_0_1px_0_rgba(255,255,255,0.4)] ring-1 ring-white/40 backdrop-blur-2xl backdrop-saturate-150 transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:inset-x-6 lg:hidden ${
                    menuOpen
                        ? 'visible translate-y-0 scale-100 opacity-100'
                        : 'invisible -translate-y-2 scale-95 opacity-0'
                }`}
            >
                <ul className="flex flex-col">
                    {NAV_LINKS.map(({ label, href }, i) => (
                        <li
                            key={href}
                            className={`transition-[opacity,transform] duration-300 ${
                                menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
                            }`}
                            style={{ transitionDelay: menuOpen ? `${80 + i * 45}ms` : '0ms' }}
                        >
                            <NavLink
                                to={href}
                                onClick={() => handleNav(href)}
                                aria-current={active === href ? 'page' : undefined}
                                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[14px] font-medium transition-colors duration-200 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                                    active === href ? 'bg-white/25 text-white' : 'text-white/90'
                                }`}
                            >
                                {label}
                                {active === href && (
                                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white" />
                                )}
                            </NavLink>
                        </li>
                    ))}

                    <li
                        className={`mt-2 transition-[opacity,transform] duration-300 ${
                            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
                        }`}
                        style={{ transitionDelay: menuOpen ? `${80 + NAV_LINKS.length * 45}ms` : '0ms' }}
                    >
                        <Link
                            to="/booking"
                            onClick={() => setMenuOpen(false)}
                            className="group flex items-center justify-center gap-1 rounded-full bg-white px-4 py-2.5 text-[13px] font-semibold text-[#173B65] shadow-sm transition-all duration-200 hover:bg-[#EAF4FF] hover:shadow-md active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Plan my Trip
                            <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
