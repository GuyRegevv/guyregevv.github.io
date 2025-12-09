import Locali from "./Projects/Locali";
import Detect from "./Projects/Detect";
import JobFinder from "./Projects/JobFinder";

type Props = {
  selectedProject: string;
};

export default function Projects({ selectedProject }: Props) {

  const projectClass = "backdrop-blur-sm bg-white/10 transition-colors duration-200 border-2 border-white/10 rounded-2xl";

  return (
    <div className={`h-full max-h-full overflow-auto pt-12 pr-8 pl-8 ${projectClass}`}>
      {selectedProject === "Locali" && <Locali />}
      {selectedProject === "Detect The Cat" && <Detect />}
      {selectedProject === "Job Finder" && <JobFinder />}
    </div>
  );
}
