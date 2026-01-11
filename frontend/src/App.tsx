import { useState } from "react";

import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import About from "./components/About";
import Employment from "./components/Employment";
import Title from "./components/Title";
import Projects from "./components/Projects";
import ContactInfo from "./components/ContactInfo";

type Page = "about" | "experience" | "projects";

export default function App() {
  const [page, setPage] = useState<Page>("about");
  const [selectedProject, setSelectedProject] = useState<string>("Locali");

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="relative flex flex-col lg:flex-row min-h-screen lg:h-screen text-white p-4 md:p-8 bg-mossy-dark overflow-x-hidden">
        <div className="flex flex-col w-full lg:w-1/2 lg:h-full">
          <div className="flex-none pl-4 md:pl-12 h-24 md:h-32 lg:h-64 w-full flex items-center justify-between">
            <Title />
            <div className="pr-4 md:pr-0">
              <MobileNav
                currentPage={page}
                onChangePage={(p: string) => setPage(p as Page)}
                onSelectProject={(p: string) => setSelectedProject(p)}
                selectedProject={selectedProject}
              />
            </div>
          </div>

          <div className="hidden lg:flex flex-1 lg:overflow-y-auto p-4 md:p-12">
            <Sidebar
              currentPage={page}
              onChangePage={(p: string) => setPage(p as Page)}
              onSelectProject={(p: string) => setSelectedProject(p)}
              selectedProject={selectedProject}
            />
          </div>

          <div className="flex-none p-4 md:p-12 h-12 w-full flex items-center">
            <ContactInfo />
          </div>
        </div>

        <div className="flex flex-col flex-1 min-h-0 mt-4 lg:mt-0">
          {page === "about" && <About />}
          {page === "experience" && <Employment />}
          {page === "projects" && (
            <Projects selectedProject={selectedProject} />
          )}
        </div>
      </div>
    </div>
  );
}
