import skillData from './data/skills.json'
import educationData from './data/education.json';
import experienceData from './data/experience.json';

export const AboutMeSection = () => {
  
  interface Skill_DTO_Object{
    category: string,
    items: string[],
  }

  interface Education_DTO_Object{
    degree:string,
    school:string,
    year: string,
  }

  interface Experience_DTO_Object{
    role:string,
    company:string,
    period:string,
    description:string,
  }

  const skills:Skill_DTO_Object[] = skillData;
  const education:Education_DTO_Object[] = educationData;
  const experience:Experience_DTO_Object[] = experienceData;

  return (
    <section id='aboutme' className="min-h-screen px-6 py-20  text-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-[#808080] mb-2 text-sm tracking-wider uppercase">
            BACKGROUND
          </p>
          <h1 className="text-[clamp(2rem,6vw,4rem)] leading-none font-serif mb-6">
            About Me
          </h1>
          <div className="h-px bg-white w-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-12">
            <div className="text-[#B0B0B0] text-lg leading-relaxed space-y-6">
              <p>
              I'm a Fullstack developer from Morocco with passion to actually create so elegant and functioning digital experience passioned about web with experience of 4 years in this field.

              </p>
              <p>
              My approach combines technical expertise with a keen eye for design, resulting in products that are both powerful and beautiful
              </p>
            </div>
            <div className="pt-8">
              <h3 className="text-white mb-8 border-b border-white/20 pb-4 text-xl">
                Experience
              </h3>
              <div className="space-y-8">
                {experience.map((experienceData, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-medium">{experienceData.role}</h4>
                        <p className="text-[#808080] italic">{experienceData.company}</p>
                      </div>
                      <p className="text-[#808080] text-sm">{experienceData.period}</p>
                    </div>
                    <p className="text-[#B0B0B0]">{experienceData.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-white mb-6 border-b border-white/20 pb-4 text-xl">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((educationData, index) => (
                  <div key={index}>
                    <p className="text-[#808080] text-sm mb-1">{educationData.year}</p>
                    <h4 className="text-white font-medium">{educationData.degree}</h4>
                    <p className="text-[#808080] italic">{educationData.school}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white mb-6 border-b border-white/20 pb-4 text-xl">
                Skills & Technologies
              </h3>
              <div className="space-y-6">
                {skills.map((skillData, index) => (
                  <div key={index}>
                    <h4 className="text-white mb-3 font-medium">
                      {skillData.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillData.items.map((item) => (
                        <span
                          key={item}
                          className="text-sm border border-white/20 px-3 py-1 text-[#B0B0B0] bg-white/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
            <h3 className="text-white mb-6 border-b border-white/20 pb-4 text-xl">
                Recognition
              </h3>
              <div className="space-y-4 text-[#B0B0B0]">
                <div>
                  <p className="text-white font-medium">
                  </p>
                  <p className="text-[#808080] text-sm"></p>
                </div>
                <div>
                  <p className="text-white font-medium">
                  </p>
                  <p className="text-[#808080] text-sm">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
