import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import FooterBox from "./tools/FooterBox";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactLinks = [
    { label: "Email", value: "Mohamedamini740@gmail.com", href: "mailto:Mohamedamini740@gmail.com" },
    { label: "LinkedIn", value: "", href: "#" },
    { label: "GitHub", value: "https://github.com/Mohamed-Amini2", href: "https://github.com/Mohamed-Amini2" },
    { label: "Instagram", value: "https://www.instagram.com/med_.i/", href: "https://www.instagram.com/med_.i/" },
  ];

  return (
    <section id="contact" className="min-h-screen px-6 py-20  text-white">
      <div className="w-full max-w-7xl mx-auto">
        
        <div className="mb-20">
          <p className="text-[#808080] mb-2 text-sm tracking-wider uppercase">
            GET IN TOUCH
          </p>
          <h2 className="text-[clamp(2rem,6vw,4rem)] leading-none font-serif mb-6">
            Let's Talk
          </h2>
          <div className="h-px bg-white w-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <div className="lg:col-span-5 space-y-12">
            <p className="text-[#B0B0B0] text-lg leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            <div className="space-y-2">
              <h3 className="text-white border-b border-white/20 pb-4 mb-6">
                Connect
              </h3>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex justify-between items-center py-4 border-b border-white/10 hover:border-white transition-colors duration-300"
                >
                  <div>
                    <p className="text-[#808080] text-xs uppercase tracking-wide mb-1">
                      {link.label}
                    </p>
                    <p className="text-white font-medium">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-45 transition-all duration-300"
                    size={20}
                  />
                </a>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-[#808080] text-sm mb-3 uppercase tracking-wide">
                Currently available for
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• Freelance Projects</li>
                <li>• Full-time Opportunities</li>
                <li>• Consulting Work</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form  className="space-y-8" action="https://getform.io/f/bdrkrypb" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-[#808080] text-xs uppercase tracking-wide">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 outline-none transition-colors text-white placeholder:text-[#333]"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="block text-[#808080] text-xs uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 outline-none transition-colors text-white placeholder:text-[#333]"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="block text-[#808080] text-xs uppercase tracking-wide">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 outline-none transition-colors resize-none text-white placeholder:text-[#333]"/>
                  </div>
    
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                    >
                      <span className="font-medium tracking-wide">Send Message</span>
                      <ArrowUpRight
                        className="group-hover:rotate-45 transition-transform duration-300"
                        size={20}
                      />
                    </button>
                    <a
                      type="submit"
                      href="/Mohamed_Amini_CV.pdf"
                      download="Mohamed_Amini_CV.pdf"
                      className="group inline-flex items-center gap-3 ml-6 px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                    >
                      <span className="font-medium tracking-wide">Download my cv </span>
                      <ArrowUpRight
                        className="group-hover:rotate-45 transition-transform duration-300"
                        size={20}
                      />
                    </a>
                  </div>
                </form>
              </div>
            </div>
    
            <FooterBox />
          </div>
        </section>
      );
    };
