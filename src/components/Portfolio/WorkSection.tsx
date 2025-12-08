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
              2021-2025
            </p>
          </div>
          <div className="h-px bg-white w-full"></div>
          <ProjectsBox 
            year={2023}
            title="Transportation Cargo Website"
            role="Fullstack "
            description="A transportation Website That manages how much cargo on each transporter"
            technologies={['NODEJS', 'REACT', 'EXPRESS', 'MONGODB']}
            image=""
            />
            <ProjectsBox 
            year={2023}
            title="A KinoTherapy Website"
            role="Backend Developer"
            description="The idea was to help People who lives in the country side to get a medical check Online"
            technologies={['Symfony', 'REACT', 'POSTGRESQL', 'DOCKER']}
            image={kinesis}
            />
        </div>
        <div className="lg:col-span-12 flex justify-center mt-12">
          <button className="group inline-flex items-center gap-3 text-white border-b-2 border-white pb-1 hover:gap-5 transition-all">
            <span>View All Projects</span>
            <ArrowUpRight
              className="group-hover:rotate-45 transition-transform"
              size={20}
            />
          </button>
        </div>
      </div>  
    </section>
  );
};

export default WorkSection;