  const HeroSection = () => {
      return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
          <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
            
            <div className="lg:col-span-4 space-y-8">
              
              <div className="border-l-2 border-white pl-6">
                <h2 className="text-white text-2xl font-bold tracking-wider mb-2 hero-title">
                  Mohamed Amini
                </h2>
                
                <div className="space-y-1 text-[#B0B0B0] text-lg">
                  <p>Full Stack Developer</p>
                  <p>Technology Enthusiast</p>
                  <p>Software Engineering Student</p>
                </div>
    
                <div className="mt-8 flex gap-6 text-sm">
                  <a href="mailto:Mohamedamini740@gmail.com" className="text-[#B0B0B0] hover:text-white transition-colors border-b border-white/40 pb-1 hover:border-white cursor-pointer">
                    Email
                  </a>
                  <a href="#" className="text-[#B0B0B0] hover:text-white transition-colors border-b border-white/40 pb-1 hover:border-white cursor-pointer">
                    LinkedIn
                  </a>
                  <a href="https://www.github.com/Mohamed-Amini2" className="text-[#B0B0B0] hover:text-white transition-colors border-b border-white/40 pb-1 hover:border-white cursor-pointer">
                    GitHub
                  </a>
                </div>
              </div>
    
              <div className="hidden lg:flex items-center gap-4 pt-8 opacity-60">
                <div className="w-px h-12 bg-white"></div>
                <span className="text-white text-xs tracking-widest rotate-90 origin-left ml-2">SCROLL</span>
              </div>
    
            </div>
    
            <div className="lg:col-span-8">
              <ul className="font_Baskervville text-white font-serif flex flex-col items-start">
                
                <a href="#work">
                <li  className="text-[clamp(3rem,11vw,10rem)] leading-[90%] tracking-tight cursor-pointer transition-all duration-300 hover:translate-x-4 hover:font-[500] hover:opacity-100 opacity-80 block">
                  WORK
                </li>
                </a>
                <a href="#aboutme">
                <li className="text-[clamp(3rem,11vw,10rem)] leading-[90%] tracking-tight cursor-pointer transition-all duration-300 hover:translate-x-4 hover:font-[500] hover:opacity-100 opacity-80 block">
                  ABOUT
                </li>
                </a>
                <a href="#contact">
                <li className="text-[clamp(3rem,11vw,10rem)] leading-[90%] tracking-tight cursor-pointer transition-all duration-300 hover:translate-x-4 hover:font-[500] hover:opacity-100 opacity-80 block">
                  CONTACT
                </li>
                </a>
              </ul>
                <div className="h-px bg-white/50 mt-12 w-full origin-left"></div>
            </div>
    
          </div>
        </section>
      );
    };
    
    export default HeroSection;