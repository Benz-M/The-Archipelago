import homepage_bg from '../assets/img/homepage-bg-7.jpg'

import NavigationBar from '../components/navbar'
import LogoCard from '../components/logo-card'

export default function Homepage() {
    return (
        <div id="home" className="relative isolate flex h-svh w-full flex-col overflow-hidden font-['Poppins',sans-serif] antialiased">
            <img src={homepage_bg} alt="Limestone cliffs and traditional outrigger boats on calm blue water in the Philippines" className="absolute inset-0 -z-20 h-full w-full object-cover object-bottom"/>
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-[#0A3A7A]/25 via-transparent to-transparent"/>
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-linear-to-t from-[#04213D]/70 via-[#04213D]/25 to-transparent"/>

            <header className="relative z-20 flex w-full flex-1">
                <LogoCard/>
                <NavigationBar/>
            </header>
            <main className="relative z-10 flex flex-11 flex-col items-center justify-between">
                <h1 className="font-[Bebas] animate-rise mx-auto max-w-5xl text-balance px-4 mt-20 text-center text-[3.5rem] font-semibold leading-[1.05] tracking- text-white drop-shadow-[0_4px_24px_rgba(5,40,90,0.35)] [animation-delay:300ms] sm:text-6xl md:text-7xl lg:text-[6.25rem]">
                    Discover the magic of the Philippines
                </h1>
                <div className="flex flex-col items-center pb-6 sm:pb-8">
                    <p className="font-[Bebas] animate-rise max-w-fit rounded-full bg-white/20 px-5 py-2 text-center text-sm  leading-relaxed text-white shadow-sm ring-1 ring-white/30 backdrop-blur-md [animation-delay:700ms] sm:text-base">
                        Explore pristine islands, hidden lagoons, and rich cultures across 7,641 islands.
                    </p>
                </div>
            </main>
        </div>
    )
}
