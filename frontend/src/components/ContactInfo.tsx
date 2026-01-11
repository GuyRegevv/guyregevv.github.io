import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactInfo() {
    const [showEmail, setShowEmail] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    const [copied, setCopied] = useState<null | "email" | "phone">(null);

    const email = "Gregev7@gmail.com";
    const phone = "0524445853";

    const copyToClipboard = async (text: string, key: "email" | "phone") => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(key);
            setTimeout(() => setCopied(null), 1200);
        } catch {
            console.error("Failed to copy to clipboard");
        }
    };

    return (
    <div className="flex flex-row gap-2 md:gap-4 justify-center items-center">
        <a href="www.linkedin.com/in/guy-regev-a68b57257" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-lemon-green transition-colors duration-200">
            <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a href="https://github.com/GuyRegevv" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-lemon-green transition-colors duration-200">
            <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
        </a>

        <div className="relative">
            <div className={`absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/70 px-2 md:px-3 py-2 text-xs md:text-sm text-gray-100 shadow-lg backdrop-blur-sm transition-all duration-200 ${showEmail ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"}`}>
                <span>{email}</span>
                <button
                    type="button"
                    className="ml-2 md:ml-3 rounded-md bg-white/10 px-2 py-0.5 text-xs hover:bg-white/20"
                    onClick={() => copyToClipboard(email, "email")}
                >
                    {copied === "email" ? "Copied" : "Copy"}
                </button>
            </div>
            <button
                type="button"
                aria-label="Show email"
                className="p-2 text-gray-500 hover:text-lemon-green transition-colors duration-200"
                onClick={() => {
                    setShowEmail((v) => !v);
                    setShowPhone(false);
                }}
            >
                <FaEnvelope className="w-6 h-6 md:w-8 md:h-8" />
            </button>
        </div>

        <div className="relative">
            {/* Phone tooltip */}
            <div className={`absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/70 px-2 md:px-3 py-2 text-xs md:text-sm text-gray-100 shadow-lg backdrop-blur-sm transition-all duration-200 ${showPhone ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"}`}>
                <span>{phone}</span>
                <button
                    type="button"
                    className="ml-2 md:ml-3 rounded-md bg-white/10 px-2 py-0.5 text-xs hover:bg-white/20"
                    onClick={() => copyToClipboard(phone, "phone")}
                >
                    {copied === "phone" ? "Copied" : "Copy"}
                </button>
            </div>
            <button
                type="button"
                aria-label="Show phone"
                className="p-2 text-gray-500 hover:text-lemon-green transition-colors duration-200"
                onClick={() => {
                    setShowPhone((v) => !v);
                    setShowEmail(false);
                }}
            >
                <FaPhone className="w-6 h-6 md:w-8 md:h-8" />
            </button>
        </div>
    </div>
    );
}