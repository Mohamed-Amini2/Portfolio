import { ArrowUpRight } from "lucide-react";

interface ProjectsBoxProps {
  year: string | number;
  title: string;
  role: string;
  description: string;
  technologies: string[];
  image: string;
}

export const ProjectsBox = ({ 
  year, 
  title, 
  role, 
  description, 
  technologies, 
  image 
}: ProjectsBoxProps) => {
    
  return (
    <div className="group w-full border-b border-white/10 transition-colors duration-300 hover:bg-white/5">
      <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-1">
          <p className="text-[#808080] text-sm font-mono">
            {year}
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="group-hover:translate-x-2 transition-transform duration-300">
            
            <h2 className="text-white text-3xl font-semibold mb-2 inline-flex items-center gap-3">
              {title}
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
            </h2>

            <p className="text-[#808080] text-sm tracking-wider uppercase mb-4">
              {role}
            </p>

            <p className="text-[#B0B0B0] mb-6 text-lg leading-relaxed max-w-lg">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs border border-white/20 px-3 py-1 rounded-full text-[#B0B0B0]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 hidden md:block">
          <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] border border-white/10 rounded-sm">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full bg-white object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center px-4">
                <span className="text-[#4a4a4a] text-xs tracking-widest uppercase text-center">
                  {title}
                </span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};