import { ArrowRight, Palmtree, Mountain, Camera, HandHeart, type LucideIcon, } from "lucide-react";

import LogoCard from "../components/logo-card";
import DesktopNav from "../components/navbar";
import DestinationCard from "../components/destination-card";
import DestinationBG from "../assets/img/homepage-bg-6.jpg";

import Destination1 from "../assets/img/destinations/dest-img-1.jpg";
import Destination2 from "../assets/img/destinations/dest-img-2.jpg";
import Destination3 from "../assets/img/destinations/dest-img-3.jpg";
import Destination4 from "../assets/img/destinations/dest-img-4.jpg";
import Destination5 from "../assets/img/destinations/dest-img-5.jpg";

interface Destination {
  name: string;
  description: string;
  image: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const destinations: Destination[] = [
  {
    name: "Palawan",
    description: "Home to breathtaking lagoons, limestone cliffs, and pristine beaches.",
    image: Destination1,
  },
  {
    name: "Boracay",
    description: "Famous for its white sand beaches and vibrant nightlife.",
    image: Destination2,
  },
  {
    name: "Bohol",
    description: "Discover unique landscapes and adorable tarsiers.",
    image: Destination3,
  },
  {
    name: "Cebu",
    description: "Rich in history, culture, and beautiful heritage sites.",
    image: Destination4,
  },
  {
    name: "Banaue",
    description: "Marvel at ancient rice terraces carved into the mountains.",
    image: Destination5,
  },
];

const features: Feature[] = [
  {
    icon: Palmtree,
    title: "7,641+ Islands",
    description:
      "Explore thousands of islands and islets across the Philippines.",
  },
  {
    icon: Mountain,
    title: "Diverse Landscapes",
    description: "From beaches to mountains, we have it all.",
  },
  {
    icon: Camera,
    title: "Unforgettable Experiences",
    description: "Create memories that will last a lifetime.",
  },
  {
    icon: HandHeart,
    title: "Warm Hospitality",
    description: "Experience the famous Filipino warmth and culture.",
  },
];

interface FeatureItemProps {
  feature: Feature;
}

function FeatureItem({ feature }: FeatureItemProps) {
  const Icon = feature.icon;

  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#082d52] text-white">
        <Icon size={21} strokeWidth={2.5} />
      </div>
      <div>
        <h3 className="text-sm font-bold leading-tight text-[#082d52]"> 
          {feature.title}
        </h3>
        <p className="max-w-[175px] text-[10px] leading-tight text-gray-600">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative min-h-[280px] bg-cover bg-center" style={{ backgroundImage: `url(${DestinationBG})` }}>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />
        
        <div className="absolute inset-x-0 top-0 z-[100] h-24">
          <header className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 py-5 sm:px-10">
            <LogoCard />
            <DesktopNav />
          </header>
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-7 pt-24 sm:px-10 sm:pt-28">
          <h1 className="text-5xl font-extrabold tracking-wide text-[#ffb938] sm:text-6xl">
            Destinations
          </h1>
          <p className="mt-1 max-w-[410px] text-sm leading-[1.1] text-white sm:text-lg">
            From stunning islands and hidden lagoons,
            <br className="hidden sm:block" />
            to vibrant cities and rich cultural heritage,
            <br className="hidden sm:block" />
            find your next adventure.
          </p>

          <a href="#destinations" className="mt-4 inline-flex items-center gap-1 rounded-full border border-white/30 bg-black/20 px-4 py-1.5 text-xs text-white backdrop-blur-sm transition hover:bg-white hover:text-[#082d52]">
            Explore All Destinations
            <ArrowRight size={14} />
          </a>
        </div>
      </section>
      
      <section id="destinations" className="flex-1 mx-auto w-full max-w-[1600px] px-5 py-6 sm:px-10 sm:py-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-[Bebas] text-[#082d52] sm:text-2xl">
            Top Destinations
          </h2>
          <a className="flex items-center gap-1 text-xs font-medium text-blue-700 transition hover:text-amber-500 sm:text-sm">
            Explore All Destinations
            <ArrowRight size={15} />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5 lg:gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
      </section>
      
      <section className="border-t border-gray-200 mt-auto">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-5 px-6 py-5 sm:px-10 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} />
          ))}
        </div>
      </section>
    </main>
  );
}
