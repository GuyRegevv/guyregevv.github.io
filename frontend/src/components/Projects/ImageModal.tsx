import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Image = {
    src: string;
    alt: string;
};

type ImageModalProps = {
    images: Image[];
    initialIndex: number;
    onClose: () => void;
};

export default function ImageModal({ images, initialIndex, onClose }: ImageModalProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

    const showPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const showNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    // Prevent background scroll and ensure portal-based overlay unaffected by layout/overflow
    useEffect(() => {
        const prevOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.documentElement.style.overflow = prevOverflow;
        };
    }, []);

    return createPortal(
        <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center cursor-pointer"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="relative w-full h-full flex items-center justify-center px-4"
            >
                <button
                    aria-label="Close"
                    className="fixed top-6 right-6 text-white/80 hover:text-white"
                    onClick={onClose}
                >
                    ✕
                </button>

                <div
                    className="relative inline-block cursor-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl shadow-2xl select-none cursor-auto"
                    />

                    <button
                        aria-label="Previous image"
                        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white p-3 md:p-4"
                        onClick={showPrev}
                    >
                        ‹
                    </button>
                    <button
                        aria-label="Next image"
                        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white p-3 md:p-4"
                        onClick={showNext}
                    >
                        ›
                    </button>

                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                aria-label={`Go to image ${idx + 1}`}
                                className={`h-2 w-2 rounded-full transition-all ${idx === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"}`}
                                onClick={() => setCurrentIndex(idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}


