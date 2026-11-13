import homepage_bg from '../assets/img/homepage-bg-7.jpg'

import NavigationBar from '../components/navbar'
import LogoCard from '../components/logo-card'

export default function Homepage() {
    return (
        // Removed font-['Poppins',sans-serif] so it uses your global fonts
        <div id="home" className="relative isolate flex h-svh w-full flex-col overflow-hidden antialiased">
            <img src={homepage_bg} alt="Limestone cliffs and traditional outrigger boats on calm blue water in the Philippines" className="absolute inset-0 -z-20 h-full w-full object-cover object-bottom"/>
            
            {/* Fixed Tailwind v4 gradient classes */}
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A3A7A]/25 via-transparent to-transparent"/>
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-[#04213D]/70 via-[#04213D]/25 to-transparent"/>

            <div className="absolute inset-x-0 top-0 z-[100] h-24">
                <header className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 py-5 sm:px-10">
                    <LogoCard/>
                    <NavigationBar/>
                </header>
            </div>

            <main className="relative z-10 flex flex-1 flex-col items-center justify-between pt-24">
                {/* Fixed the invalid 'tracking-' class and ensured Bebas is applied */}
                <h1 className="font-[Bebas] animate-rise mx-auto max-w-5xl text-balance px-4 mt-20 text-center text-[3.5rem] font-semibold leading-[1.05] text-white drop-shadow-[0_4px_24px_rgba(5,40,90,0.35)] [animation-delay:300ms] sm:text-6xl md:text-7xl lg:text-[6.25rem]">
                    Discover the magic of the Philippines
                </h1>
                <div className="flex flex-col items-center pb-6 sm:pb-8">
                    <p className="font-[Bebas] animate-rise max-w-fit rounded-full bg-white/20 px-5 py-2 text-center text-sm leading-relaxed text-white shadow-sm ring-1 ring-white/30 backdrop-blur-md [animation-delay:700ms] sm:text-base tracking-wide">
                        Explore pristine islands, hidden lagoons, and rich cultures across 7,641 islands.
                    </p>
                </div>
            </main>
        </div>
    )
}