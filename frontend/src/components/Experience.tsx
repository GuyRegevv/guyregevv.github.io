export default function Experience() {
    
    // const hoverclass = "bg-white/10 border-2 border-white/10 rounded-2xl";
    // const originalclass =  "relative z-10 flex justify-center items-center h-76 w-full gap-4 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-200 border-2 border-white/10 rounded-2xl group">

    
    return (
    //  <div className="relative z-10 flex h-76 w-full gap-12 bg-black/30 backdrop-blur-sm p-6">
    <div className="relative z-10 flex justify-center items-center h-76 w-full gap-4 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-200 border-2 border-white/10 rounded-2xl group">
        <div className="w-1/4 h-full">
            <h3 className="text-sm text-mossy-gray font-bold mt-1">August 2023 - PRESENT</h3>
        </div>
        <div className="w-3/4 h-full">
            <h3 className="text-lg text-gray-200 font-bold mb-2 transition-colors group-hover:text-lemon-green ">
                NOC Engineer · Check Point Software Technologies
            </h3>
            <p className="text-sm text-gray-300 mb-2">
                At Check Point, I am responsible for keeping network and software systems stable and reliable, which gave me hands-on experience with how large-scale products are supported in production. 
                I learned a lot about how different roles collaborate and gave me a deeper understanding of how a tech company operates day to day.
            </p>

            <p className="text-sm text-gray-300 mb-2">
                As the focal point for the WAF product, I gained exposure to real-world cloud architecture. CDNs, load balancing, Kubernetes, DNS, and the overall flow of traffic through modern infrastructures.
            </p>

            <p className="text-sm text-gray-300 mb-2">
                I also took initiative to create internal tools like automation scripts, support playbooks, and knowledge-sharing materials.
            </p>
        </div>
     </div>
    );
}