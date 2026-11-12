interface FoodCulture {
    name: string;
    description: string;
    image: string;
}

interface FoodCultureCardProps {
    foodculture: FoodCulture;
}

export default function FoodCultureCard({ foodculture } : FoodCultureCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="h-[118px] overflow-hidden">
                <img
                    src={foodculture.image}
                    alt={foodculture.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="px-2.5 py-1.5">
                <h3 className="flex items-center gap-1 text-sm font-bold text-[#082d52]">
                    {foodculture.name}
                </h3>
                <p className="mt-1 text-[10px] leading-[1.15] text-gray-600">
                    {foodculture.description}
                </p>
            </div>
        </article>
    );
}