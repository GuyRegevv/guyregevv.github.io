import Pill from "../atoms/Pill";

export default function Detect() {
    return (
        <>
            <div>
                <p className="text-4xl text-gray-300 mb-4 font-bold">Detect The Cat</p>
                <div className="flex flex-row gap-2 mb-4">
                    <Pill>JS</Pill>
                    <Pill>TensorFlow</Pill>
                    <Pill>WebRTC</Pill>
                </div>
                <div className="flex flex-col gap-2 mb-12">
                <p>
                    <strong>Detect The Cat</strong> is a browser-based app that uses real-time computer vision to detect cats and turn your camera into a cat-only photobooth. Built with TensorFlow.js and the COCO-SSD model.
                </p>
                <p>
                    It began as a fun side project to explore AI models and experiment with what real-time, in-browser AI is capable of.
                </p>

                <div className="flex flex-col items-center my-8">
                    <img 
                        src="/Detect.gif" 
                        alt="Detect The Cat demo" 
                        className="rounded-xl shadow-2xl w-full max-w-2xl h-auto"
                    />
                </div>
                </div>
            </div>
        </>
    );
}