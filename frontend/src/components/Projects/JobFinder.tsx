import Pill from "../atoms/Pill";

export default function JobFinder() {
    return (
        <>
            <div>
                <p className="text-4xl text-gray-300 mb-4 font-bold">Job Finder</p>
                <div className="flex flex-row gap-2 mb-4">
                    <Pill>APIs</Pill>
                    <Pill>Node.js</Pill>
                </div>
                <div className="flex flex-col gap-4 mb-8">
                <p>
                    <strong>JobFinder</strong> is a personal automation tool I built to improve my own job search workflow during the competitive hunt for junior roles. Since new positions get posted and filled quickly, I wanted a way to instantly spot the latest junior job listings without manually refreshing LinkedIn throughout the day.
                </p>
                <p>
                    Because LinkedIn doesn’t offer a public API for job searches, I reverse engineered the way job data is requested in the browser and created a system that replicates those calls in a controlled, browser like environment. This allowed me to automatically fetch fresh results for myself as soon as they appeared. giving me a faster, more efficient way to stay on top of openings.
                </p>
                <p>
                    This project was created solely for my own use while searching for a job, and I don’t intend to share the code publicly. However, I’m happy to discuss the technical reasoning, challenges, and what I learned during an interview.
                </p>
                </div>
            </div>
        </>
    );
}