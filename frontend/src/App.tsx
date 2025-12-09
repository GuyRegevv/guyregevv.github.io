import { useState } from "react";

import Sidebar from "./components/Sidebar";
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
      <div className="relative flex h-screen text-white p-8 bg-mossy-dark overflow-x-hidden">
        <div className="flex flex-col w-1/2 h-full">
          <div className="flex-none pl-12 h-64 w-full flex items-center">
            <Title />
          </div>

          <div className="flex-1 overflow-y-auto p-12">
            <Sidebar
              currentPage={page}
              onChangePage={(p: string) => setPage(p as Page)}
              onSelectProject={(p: string) => setSelectedProject(p)}
              selectedProject={selectedProject}
            />
          </div>

          <div className="flex-none p-12 h-12 w-full flex items-center">
            <ContactInfo />
          </div>
        </div>

        <div className="flex flex-col flex-1 min-h-0">
          {page === "about" && <About />}
          {page === "experience" && <Employment />}
          {page === "projects" && <Projects selectedProject={selectedProject} />}
        </div>
      </div>
    </div>
  );
}
