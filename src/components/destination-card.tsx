import { MapPin} from "lucide-react";


interface Destination {
    name: string;
    description: string;
    image: string;
}

interface DestinationCardProps {
    destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="h-[118px] overflow-hidden">
            <img
                src={destination.image}
                alt={destination.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            </div>

            <div className="px-2.5 py-1.5">
            <h3 className="flex items-center gap-1 text-sm font-bold text-[#082d52]">
                <MapPin size={13} strokeWidth={3} />
                {destination.name}
            </h3>

            <p className="mt-0.5 text-[10px] leading-[1.15] text-gray-600">
                {destination.description}
            </p>
            </div>
        </article>
    );
}