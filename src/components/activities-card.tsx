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
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Added shrink-0 and w-full to lock the image height */}
            <div className="h-[118px] w-full shrink-0 overflow-hidden">
                <img
                    src={activities.image}
                    alt={activities.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Added flex-1 and flex-col so the text area fills the rest evenly */}
            <div className="flex flex-1 flex-col px-2.5 py-1.5">
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