import logo from '../assets/img/Logo.png'

export default function LogoCard() {
    return (
        <div className="animate-fade-in flex h-full flex-1 items-center pl-4 [animation-delay:200ms] sm:pl-6">
            <img src={logo} className="h-11 w-11 shrink-0 object-contain transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 sm:h-12 sm:w-12"/>
            <div className="leading-none">
                <p className="text-base font-extrabold tracking-wide  leading-5 text-[#ffffff] font-[Valty] sm:text-[30px]">
                    THE ARCHIPELAGO
                </p>
                <p className="mt-1 text-[9px] font-mono tracking-wide leading-1 text-[#ffffff] sm:text-[10px]">
                    DISCOVER THE PHILIPPINES
                </p>
            </div>
        </div>
    )
}