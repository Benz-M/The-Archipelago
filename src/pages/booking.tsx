import { useState, type FormEvent, type ReactNode } from "react";
import { Calendar, ClipboardList, Compass, Headphones, Lock, MapPin, Plane, ShieldCheck, Star, Users, Waves, Wallet, CheckCircle } from "lucide-react";

import LogoCard from "../components/logo-card";
import DesktopNav from "../components/navbar";

import PlanTripBG from "../assets/img/airlines.png";

const destinations = ["Palawan", "Cebu", "Siargao", "Boracay", "Bohol", "Baguio", "Batanes"];
const travelers = ["1 Traveler", "2 Travelers", "3–5 Travelers", "6+ Travelers"];
const styles = ["Adventure", "Nature", "Culture", "Food", "Beach", "Relaxation"];
const budgets = ["Under ₱10,000", "₱10,000 – ₱25,000", "₱25,000 – ₱50,000", "₱50,000+"];

interface TripForm {
    destination: string;
    date: string;
    travelers: string;
    style: string;
    budget: string;
}

interface Feature {
    icon: ReactNode;
    title: string;
    text: string;
}

interface FieldProps {
    label: string,
    optional?: boolean, 
    hint: string,
    icon: ReactNode,
    children: ReactNode
}

const features: Feature[] = [
    { icon: <Waves size={18} />, title: "7,641+ Islands to Explore", text: "From popular spots to hidden gems" },
    { icon: <Star size={18} />, title: "Handpicked Experiences", text: "Curated activities and local favorites" },
    { icon: <Headphones size={18} />, title: "Local Support", text: "We're here to help 24/7" },
    { icon: <ShieldCheck size={18} />, title: "Trusted by Travelers", text: "Join thousands of happy explorers" },
];

const selectClass =
    "w-full appearance-none rounded-md border border-gray-200 bg-white py-2 pl-8 pr-6 text-xs text-gray-700 outline-none transition focus:border-[#3989D6] focus:ring-1 focus:ring-[#3989D6]";

function Field({ label, optional, hint, icon, children,}: FieldProps ) {
    return (
        <label className="block">
            <span className="text-xs font-bold text-[#082d52] sm:text-sm">
                {label}
                {optional && <span className="ml-1 text-[10px] font-normal text-gray-400">(Optional)</span>}
            </span>
            <div className="relative mt-1.5">
                <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[#082d52]">
                    {icon}
                </span>
                {children}
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-400">
                    ▾
                </span>
            </div>
            <span className="mt-1 block text-[10px] text-gray-400">{hint}</span>
        </label>
    );
}

export default function Booking() {
    const [form, setForm] = useState<TripForm>({
        destination: "",
        date: "",
        travelers: "",
        style: "",
        budget: "",
    });

    const [showToast, setShowToast] = useState(false);

    const update = (key: keyof TripForm) => (e: { target: { value: string } }) =>
        setForm((prev) => ({ ...prev, [key]: e.target.value }));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        setShowToast(true);

        setForm({
            destination: "",
            date: "",
            travelers: "",
            style: "",
            budget: "",
        });

        setTimeout(() => {
            setShowToast(false);
        }, 4000);
    };

    return (
        <main className="bg-white relative min-h-screen flex flex-col">
            <section className="relative min-h-[360px] bg-cover bg-[position:center_60%] pb-24" style={{ backgroundImage: `url(${PlanTripBG})` }}>
                
                <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
                
                <div className="absolute inset-x-0 top-0 z-[100] h-24">
                    <header className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 py-5 sm:px-10">
                        <LogoCard />
                        <DesktopNav />
                    </header>
                </div>
                
                <div className="relative z-10 mx-auto max-w-[1600px] px-6 pt-24 sm:px-10 sm:pt-28">
                    <h1 className="text-5xl font-extrabold tracking-wide text-[#ffb938] sm:text-6xl">
                        Plan my Trip
                    </h1>
                    <p className="mt-1 max-w-[410px] text-sm leading-[1.1] text-white sm:text-lg">
                        Tell us your travel plans and we'll help you create an unforgettable experience in the
                        Philippines.
                    </p>
                </div>
            </section>
            
            <section className="relative z-20 mx-auto -mt-16 w-full max-w-[1600px] px-4 sm:px-10 flex-1">
                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5 sm:p-8"
                >
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#082d52] text-white">
                            <ClipboardList size={18} />
                        </div>
                        <div>
                            <h2 className="text-xl font-[Bebas] leading-tight text-[#082d52] sm:text-2xl">
                                Let's Plan your Trip
                            </h2>
                            <p className="text-[11px] text-gray-500 sm:text-xs">
                                Fill in your travel details and we'll craft the perfect itinerary for you.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-5">
                        <Field
                            label="Where do you want to go?"
                            hint="e.g. Palawan, Cebu, Siargao"
                            icon={<MapPin size={14} />}
                        >
                            <select value={form.destination} onChange={update("destination")} className={selectClass} required>
                                <option value="">Select destination</option>
                                {destinations.map((d) => (
                                    <option key={d}>{d}</option>
                                ))}
                            </select>
                        </Field>

                        <Field label="Travel dates" hint="Add your travel dates" icon={<Calendar size={14} />}>
                            <input
                                type="date"
                                value={form.date}
                                onChange={update("date")}
                                className={selectClass}
                                required
                            />
                        </Field>

                        <Field label="Travelers" hint="How many are traveling?" icon={<Users size={14} />}>
                            <select value={form.travelers} onChange={update("travelers")} className={selectClass} required>
                                <option value="">Select travelers</option>
                                {travelers.map((t) => (
                                    <option key={t}>{t}</option>
                                ))}
                            </select>
                        </Field>

                        <Field
                            label="Travel style"
                            optional
                            hint="e.g. Adventure, Nature, Culture"
                            icon={<Compass size={14} />}
                        >
                            <select value={form.style} onChange={update("style")} className={selectClass}>
                                <option value="">Select your style</option>
                                {styles.map((s) => (
                                    <option key={s}>{s}</option>
                                ))}
                            </select>
                        </Field>

                        <Field
                            label="Budget Range"
                            optional
                            hint="Choose your budget range"
                            icon={<Wallet size={14} />}
                        >
                            <select value={form.budget} onChange={update("budget")} className={selectClass}>
                                <option value="">Select Budget</option>
                                {budgets.map((b) => (
                                    <option key={b}>{b}</option>
                                ))}
                            </select>
                        </Field>
                    </div>

                    <div className="mt-5 flex flex-col items-center gap-2">
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-full bg-[#082d52] px-10 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3989D6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3989D6]"
                        >
                            <Plane size={15} />
                            Create My Itinerary
                        </button>
                        <p className="flex items-center gap-1 text-[10px] text-gray-500">
                            <Lock size={10} />
                            Your information is secure and private.
                        </p>
                    </div>
                </form>
            </section>
            
            <section className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-10 mt-auto">
                <div className="grid grid-cols-1 gap-4 rounded-xl bg-[#dbeafb] px-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((f) => (
                        <div key={f.title} className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#082d52] text-white">
                                {f.icon}
                            </div>
                            <div>
                                <h3 className="text-sm font-bold leading-tight text-[#082d52] sm:text-base">{f.title}</h3>
                                <p className="text-[11px] leading-tight text-gray-600 sm:text-xs">{f.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div
                className={`fixed bottom-6 left-1/2 z-[200] flex -translate-x-1/2 items-center gap-3 rounded-full bg-[#082d52] px-6 py-3 text-white shadow-2xl transition-all duration-300 ease-out ${
                    showToast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
                }`}
            >
                <CheckCircle size={20} className="text-[#ffb938]" />
                <p className="text-sm font-medium">Itinerary created successfully!</p>
            </div>
        </main>
    );
}