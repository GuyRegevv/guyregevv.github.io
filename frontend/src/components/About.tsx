export default function About() {
  return (
    <div className="flex flex-col overflow-y-auto justify-between backdrop-blur-sm bg-white/10 border-2 border-white/10 rounded-2xl">
      <div className="text-xl flex flex-col p-4 md:p-8">
        <p className="text-sm md:text-lg text-gray-300 mb-4">
          I'm a fresh Computer Science graduate and currently a NOC Engineer at
          Check Point. Working as NOC has opened the door for me to explore many
          corners of the tech world, from networking and Linux to automation,
          cloud services, and experimenting with AI tools. It gave me a broad
          perspective, and while I enjoyed diving into all of it, it also made
          me realize that I'm excited to find my direction and grow deeply in a
          specific field.
        </p>
        <p className="text-sm md:text-lg text-gray-300 mb-4">
          Throughout my studies and personal projects, I've built full-stack
          applications, worked with React, Node.js, and various APIs, explored
          Python and C/C++, played with AWS, and explored AI real-time image
          detection models. I love learning new things, breaking down problems,
          and understanding how systems behave - and I'm passionate about
          continuing to evolve as a developer.
        </p>
        <p className="text-sm md:text-lg text-gray-300">
          I'm a motivated, curious, and hardworking person who enjoys building,
          exploring, and always improving. Right now,
          <span className="glow text-mossy-light">
            {" "}
            I'm looking for an opportunity as a software developer
          </span>
          , where I can bring everything I've learned so far, keep growing, and
          contribute to something meaningful.
        </p>
      </div>
    </div>
  );
}
