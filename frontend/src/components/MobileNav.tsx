import { useState } from "react";

type Props = {
  currentPage: string;
  onChangePage: (p: string) => void;
  onSelectProject?: (p: string) => void;
  selectedProject?: string;
};

const buttonBaseClass = "text-left p-0 w-fit transition-colors duration-150";
const buttonSelectedClass = "text-lemon-green font-semibold";
const buttonUnselectedClass = "text-mossy-gray hover:text-lemon-green";

export default function MobileNav({
  currentPage,
  onChangePage,
  onSelectProject,
  selectedProject,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);

  const projectOptions = ["Locali", "Detect The Cat", "Job Finder"];

  const handlePageChange = (page: string) => {
    onChangePage(page);
    if (page !== "projects") {
      setIsOpen(false);
    }
  };

  const handleProjectSelect = (project: string) => {
    if (onSelectProject) onSelectProject(project);
    setIsOpen(false);
  };

  const handleProjectsClick = () => {
    onChangePage("projects");
    setProjectsExpanded(!projectsExpanded);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-mossy-dark z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-white"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className="mt-12 flex flex-col gap-6 font-medium text-lg">
            <button
              className={`${buttonBaseClass} ${
                currentPage === "about"
                  ? buttonSelectedClass
                  : buttonUnselectedClass
              }`}
              onClick={() => handlePageChange("about")}
            >
              About
            </button>

            <button
              className={`${buttonBaseClass} ${
                currentPage === "experience"
                  ? buttonSelectedClass
                  : buttonUnselectedClass
              }`}
              onClick={() => handlePageChange("experience")}
            >
              Experience
            </button>

            <div>
              <button
                className={`${buttonBaseClass} flex items-center gap-2 ${
                  currentPage === "projects"
                    ? buttonSelectedClass
                    : buttonUnselectedClass
                }`}
                onClick={handleProjectsClick}
              >
                Projects
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    projectsExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Project Sub-menu */}
              <div
                className={`ml-4 mt-3 flex flex-col gap-3 border-l border-slate-700 pl-4 overflow-hidden transition-all duration-200 ${
                  projectsExpanded && currentPage === "projects"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {projectOptions.map((project) => (
                  <button
                    key={project}
                    className={`${buttonBaseClass} text-base ${
                      selectedProject === project
                        ? buttonSelectedClass
                        : buttonUnselectedClass
                    }`}
                    onClick={() => handleProjectSelect(project)}
                  >
                    {project}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
