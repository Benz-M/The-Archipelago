import { ArrowRight, HeartHandshake } from "lucide-react";
import { Link } from "react-router";

import LogoCard from "../components/logo-card";
import DesktopNav from "../components/navbar";

import ActivitesBG from "../assets/img/food_culture/test.png";

import Food1 from "../assets/img/food_culture/adobo.jpg";
import Food2 from "../assets/img/food_culture/sisig.jpg";
import Culture1 from "../assets/img/food_culture/festival.jpeg";
import Culture2 from "../assets/img/food_culture/tradional.jpg";
import Culture3 from "../assets/img/food_culture/heritage.jpg";
import FoodCultureCard from "../components/food-culture-card";

interface FoodCulture {
    name: string;
    description: string;
    image: string;
}

const foodculture: FoodCulture[] = [
    {
        name: "Adobo",
        description: "The Philippine’s national dish. Tender meat braised in soy sauce, vinegar, garlic and spices.",
        image: Food1,
    },
    {
        name: "Sisig",
        description: "A sizzling delight made from chopped pork, seasoned with calamansi, onions and chili.",
        image: Food2,
    },
    {
        name: "Festivals",
        description: "Experience vibrant festivals celebrated all year round across the Philippines.",
        image: Culture1,
    },
    {
        name: "Traditional Dance",
        description: "Be captivated by graceful performances that express our culture and identity.",
        image: Culture2
    },
    {
        name: "Heritage Sites",
        description: "Explore historical landmarks and Spanish-era structures that tell our rich history.",
        image: Culture3,
    },
];

export default function FoodAndCulture() {
    return (
        <main>
            <section className="relative min-h-[280px] overflow-hidden bg-cover bg-[position:center_55%]" style={{ backgroundImage: `url(${ActivitesBG})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />
                <header className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8">
                    <LogoCard />
                    <DesktopNav />
                </header>
                <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-7 pt-5 sm:px-10 sm:pt-3">
                    <h1 className="text-5xl font-extrabold tracking-wide text-[#ffb938] sm:text-6xl">
                        Food and Culture
                    </h1>
                    <p className="mt-1 max-w-[410px] text-sm leading-[1.1] text-white sm:text-lg">
                        From mouthwatering dishes to timeless traditions, immerse yourself in rich flavors and vibrant culture that make the philippines truly unique.
                    </p>
                    <a className="mt-4 inline-flex items-center gap-1 rounded-full border border-white/30 bg-black/20 px-4 py-1.5 text-xs text-white backdrop-blur-sm transition hover:bg-white hover:text-[#082d52]">
                        Explore All Food & Culture
                        <ArrowRight size={14} />
                    </a>
                </div>
            </section>
            <section className="mx-auto max-w-[1400px] px-5 py-3 sm:px-10">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="mb-2 text-xl font-[Bebas] text-[#082d52] sm:text-2xl">
                            Must-Try Filipino Foods
                        </h2>
                        <div className="grid grid-cols-2 gap-4 sm:gap-5">
                            {foodculture.slice(0, 2).map((foodculture) => (
                                <FoodCultureCard key={foodculture.name} foodculture={foodculture}/>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <h2 className="mb-2 text-xl font-[Bebas] text-[#082d52] sm:text-2xl">
                            Philippines Culture & Traditions
                        </h2>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
                            {foodculture.slice(2).map((foodculture) => (
                                <FoodCultureCard key={foodculture.name} foodculture={foodculture}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-t border-gray-200">
                <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-3 sm:px-10">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#082d52] text-white">
                            <HeartHandshake size={21} strokeWidth={2.5}/>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold leading-tight text-[#082d52] sm:text-base">
                                Savor. Discover. Connect.
                            </h3>
                            <p className="max-w-[280px] text-[10px] leading-tight text-gray-600 sm:text-xs">
                                Food and culture bring us closer to the heart of a place and the people who call it home
                            </p>
                        </div>
                    </div>
                    <Link to="/booking" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#082d52] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#3989D6] sm:px-6 sm:py-2.5 sm:text-sm">
                        Plan my Trip
                        <ArrowRight size={15}/>
                    </Link>
                </div>
            </section>
        </main>
    );
}
