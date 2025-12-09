import Pill from "../../components/atoms/Pill";
import { useState } from "react";
import ImageModal from "./ImageModal";

export default function Locali() {
    const images = [
        { src: "/Screenshots/locali1.jpeg", alt: "Locali Photo 1" },
        { src: "/Screenshots/locali2.jpg", alt: "Locali Photo 2" },
        { src: "/Screenshots/locali3.jpg", alt: "Locali Photo 3" },
        { src: "/Screenshots/locali4.jpg", alt: "Locali Photo 4" },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const openModalAt = (index: number) => {
        setSelectedIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div>
                <p className="text-4xl text-white mb-4 font-bold">Locali</p>
                <div className="flex flex-row gap-2 mb-4">
                    <Pill>React</Pill>
                    <Pill>Tailwind</Pill>
                    <Pill>Node.js</Pill>
                    <Pill>Next.js</Pill>
                    <Pill>PostgreSQL</Pill>
                </div>
                <div className="flex flex-col gap-2 mb-8">
                    <p>
                        <strong>Locali</strong> is a social platform designed to help travelers discover truly authentic places like restaurants, hidden gems, and experiences that locals genuinely love. Unlike typical recommendation apps, Locali only allows users to share locations from places where they were born or have lived. This ensures that every recommendation comes from real local experience, not tourists passing through.
                    </p>
                    <p>
                        I designed and built the entire product, from concept to implementation. The goal was to create a trustworthy, community-driven space where travelers can confidently explore great food, unique spots, and the real atmosphere of a city through the eyes of the people who know it best.
                    </p>                
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-3xl mx-auto">
                {images.map((img, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => openModalAt(i)}
                        className="aspect-video overflow-hidden rounded-2xl bg-gray-800 flex items-center justify-center shadow-lg transition-shadow hover:shadow-2xl group relative focus:outline-none focus:ring-2 focus:ring-gray-600"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 rounded-2xl border border-gray-700 opacity-40 pointer-events-none" />
                    </button>
                ))}
            </div>
            {isModalOpen && (
                <ImageModal
                    images={images}
                    initialIndex={selectedIndex}
                    onClose={closeModal}
                />
            )}
        </>
    );
}