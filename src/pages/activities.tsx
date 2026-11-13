import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router";

import LogoCard from "../components/logo-card";
import DesktopNav from "../components/navbar";
import ActivitiesCard from "../components/activities-card";
import ActivitesBG from "../assets/img/activities/activities-bg.jpg";

import Activity1 from "../assets/img/activities/surfing.jpg";
import Activity2 from "../assets/img/activities/skydiving.jpg";
import Activity3 from "../assets/img/activities/hiking.jpg";
import Activity4 from "../assets/img/activities/island-hopping.jpg";
import Activity5 from "../assets/img/activities/mayon-volcano.jpg";

interface Activities {
    name: string;
    description: string;
    location: string;
    image: string;
}

const activities: Activities[] = [
    {
        name: "Surfing",
        description: "Catch the perfect wave in one of the surfing capitals of the world.",
        location: "Siargao, Surgao Del Norter",
        image: Activity1,
    },
    {
        name: "Skydiving",
        description: "Feel the ultimate rush as you jump from the sky and take in breathtaking aerial veiws.",
        location: "Pampanga",
        image: Activity2,
    },
    {
        name: "Hiking & Trekking",
        description: "Conquer scenic trails and enjoy breathtaking views from the philippine’s peaks.",
        location: "Mt. Pulag, Benguet",
        image: Activity3,
    },
    {
        name: "Island Hopping",
        description: "Visit stunning islands, hidden lagoons and secret beaches on a boat adventure.",
        location: "El Nido, Palawan",
        image: Activity4,
    },
    {
        name: "Mayon Volcano Tour",
        description: "Marvel at the perfect cone-like of Mayon volcano and enjoy scenic landscapes.",
        location: "Albay, Bicol",
        image: Activity5,
    },
];

export default function Activities() {
    return (
        <main className="min-h-screen flex flex-col">
        <section className="relative min-h-[280px] bg-cover bg-center" style={{ backgroundImage: `url(${ActivitesBG})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />
            
            <div className="absolute inset-x-0 top-0 z-[100] h-24">
                <header className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 py-5 sm:px-10">
                    <LogoCard />
                    <DesktopNav />
                </header>
            </div>
            
            <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-7 pt-24 sm:px-10 sm:pt-28">
                <h1 className="text-5xl font-extrabold tracking-wide text-[#ffb938] sm:text-6xl">
                    Activities
                </h1>
                <p className="mt-1 max-w-[410px] text-sm leading-[1.1] text-white sm:text-lg">
                    Experience the Philippines through adventure , nature and culture.
                </p>
                <a href="#activities" className="mt-4 inline-flex items-center gap-1 rounded-full border border-white/30 bg-black/20 px-4 py-1.5 text-xs text-white backdrop-blur-sm transition hover:bg-white hover:text-[#082d52]">
                    Explore All Activities
                    <ArrowRight size={14} />
                </a>
            </div>
        </section>
        
        {/* REMOVED flex-1 here so it doesn't stretch and create a huge gap */}
        <section id="activities" className="mx-auto w-full max-w-[1600px] px-5 py-6 sm:px-10 sm:py-8">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xl font-[Bebas] text-[#082d52] sm:text-2xl">
                    Popular Activities
                </h2>
                <a className="flex items-center gap-1 text-xs font-medium text-blue-700 transition hover:text-amber-500 sm:text-sm">
                    Explore All Activities
                    <ArrowRight size={15} />
                </a>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5 lg:gap-8">
            {activities.map((activities) => (
                <ActivitiesCard key={activities.name} activities={activities} />
            ))}
            </div>
        </section>
        
        {/* Kept mt-auto here to push this footer to the bottom of the page */}
        <section className="border-t border-gray-200 mt-auto">
            <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 py-5 sm:px-10">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#082d52] text-white">
                        <Calendar size={21} strokeWidth={2.5}/>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold leading-tight text-[#082d52] sm:text-base">
                            Make Every Moment Count
                        </h3>
                        <p className="max-w-[280px] text-[10px] leading-tight text-gray-600 sm:text-xs">
                            Plan your activities and create unforgettable memories across the 7,641+ islands of the Philippines.
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