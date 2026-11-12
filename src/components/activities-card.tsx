import { MapPin } from "lucide-react";

interface Activities {
    name: string;
    description: string;
    location: string;
    image: string;
}

interface ActivitiesCardProps {
    activities: Activities;
}

export default function ActivitiesCard({ activities }: ActivitiesCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="h-[118px] overflow-hidden">
                <img
                    src={activities.image}
                    alt={activities.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="px-2.5 py-1.5">
                <h3 className="flex items-center gap-1 text-sm font-bold text-[#082d52]">
                    {activities.name}
                </h3>
                <span className="mt-0.5 flex items-center gap-1 text-[10px] font-medium text-[#3989D6]">
                    <MapPin size={11} strokeWidth={2.5}/>
                    {activities.location}
                </span>
                <p className="mt-1 text-[10px] leading-[1.15] text-gray-600">
                    {activities.description}
                </p>
            </div>
        </article>
    );
}