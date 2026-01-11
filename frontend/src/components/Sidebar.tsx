type Props = {
    currentPage: string;
    onChangePage: (p: string) => void;
    onSelectProject?: (p: string) => void;
    selectedProject?: string;
  };
  
  const buttonBaseClass = "text-left p-0 w-fit transition-colors duration-150";
  const buttonSelectedClass = "text-lemon-green font-semibold";
  const buttonUnselectedClass = "text-mossy-gray hover:text-lemon-green";
  
  import SubSidebar from "./Projects/SubSidebar";
  
  export default function Sidebar({ currentPage, onChangePage, onSelectProject, selectedProject }: Props) {
    return (
      <div className="h-full w-full border-4-px border-slate-700">
        <div className="relative w-fit flex flex-col gap-4 font-medium mr-8 lg:mr-32">
          
          <button
            className={`${buttonBaseClass} ${currentPage === "about" ? buttonSelectedClass : buttonUnselectedClass}`}
            onClick={() => onChangePage("about")}
          >
            About
          </button>
  
          <button
            className={`${buttonBaseClass} ${currentPage === "experience" ? buttonSelectedClass : buttonUnselectedClass}`}
            onClick={() => onChangePage("experience")}
          >
            Experience
          </button>
  
          <div className="relative w-fit">
            <button
              className={`${buttonBaseClass} ${currentPage === "projects" ? buttonSelectedClass : buttonUnselectedClass}`}
              onClick={() => onChangePage("projects")}
            >
              Projects
            </button>
            <SubSidebar
              isOpen={currentPage === "projects"}
              onSelect={onSelectProject}
              selectedOption={selectedProject}
            />
          </div>
  
        </div>
      </div>
    );
  }