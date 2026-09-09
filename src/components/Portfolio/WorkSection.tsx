import { ProjectsBox } from "./tools/ProjectsBox";
import { ArrowUpRight } from "lucide-react";
import kinesis from '../../assets/Kinesis.png'

const WorkSection = () => {
  return (
    <section id="work" className="min-h-screen px-6 py-20">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-12 flex flex-col justify-end">

          <p className="text-white mb-4 text-sm tracking-wider opacity-80">
            SELECTED PROJECTS
          </p>
          <div className="flex items-end justify-between pb-6">
            <h1 className="text-7xl text-white font_Baskervville leading-[0.8]">
              Recent Work
            </h1>
            <p className="text-white text-lg">
              2023—2026
            </p>
          </div>
          <div className="h-px bg-white w-full"></div>
          <ProjectsBox
            year={2026}
            title="Гуляем — City Events & Routes Platform"
            role="Frontend Developer"
            description="A city guide where people find events and walking routes on an interactive map. I built the event editing flow, the full event card with reviews and favourites, and server-side route filtering."
            technologies={['ANGULAR 20', 'TYPESCRIPT', 'RXJS', 'TAIGA UI', 'LEAFLET']}
            image=""
          />
          <ProjectsBox
            year={2023}
            title="KinoTherapy — Online Medical Consultations"
            role="Backend Developer"
            description="A platform that lets people living in rural areas get a medical check-up online, without travelling to a clinic."
            technologies={['SYMFONY', 'REACT', 'POSTGRESQL', 'DOCKER']}
            image={kinesis}
          />
          <ProjectsBox
            year={2023}
            title="Transportation Cargo Platform"
            role="Fullstack Developer"
            description="A logistics website that tracks how much cargo each transporter is carrying, with authentication and a REST API behind it."
            technologies={['NODE.JS', 'REACT', 'EXPRESS', 'MONGODB']}
            image=""
          />
        </div>
        <div className="lg:col-span-12 flex justify-center mt-12">
          <a
            href="https://github.com/Mohamed-Amini2?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-white border-b-2 border-white pb-1 hover:gap-5 transition-all"
          >
            <span>View All Projects</span>
            <ArrowUpRight
              className="group-hover:rotate-45 transition-transform"
              size={20}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
