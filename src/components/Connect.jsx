import { motion } from "framer-motion";
import { Briefcase, Bug, FileText, ArrowRight, ArrowDown } from "lucide-react";
import Header from "./Header";
import SEO from "./SEO";

const Connect = () => {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <SEO 
        title="Let's Connect | Aman Rai" 
        description="Reach out and connect with Aman Rai for professional inquiries, projects, and collaboration opportunities."
      />
      {/* Absolute header so it stays on top without breaking the height structure */}
      <div className="absolute top-0 w-full z-50">
        <Header theme="light" />
      </div>

      {/* Hero Section: 3 Unique Stretchable Buttons */}
      <section className="flex flex-col md:flex-row w-full h-screen">
        <a href="https://www.linkedin.com/in/aman3214/" target="_blank" className="group flex-1 md:hover:flex-[1.5] transition-all duration-700 ease-in-out bg-[#f4f4f0] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-300 relative overflow-hidden text-black z-0">
           <Briefcase size={64} strokeWidth={1} className="mb-6 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
           <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter uppercase relative z-10 transition-transform duration-500 group-hover:-translate-y-4">LinkedIn</h2>
           <div className="absolute bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 translate-y-8 group-hover:translate-y-0 font-medium">
             <span>Connect with me</span> <ArrowRight size={18} />
           </div>
        </a>

        <a href="#github" className="group flex-1 md:hover:flex-[1.5] transition-all duration-700 ease-in-out bg-[#ebebe6] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-300 relative overflow-hidden text-black z-0">
           <Bug size={64} strokeWidth={1} className="mb-6 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
           <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter uppercase relative z-10 transition-transform duration-500 group-hover:-translate-y-4">GitHub</h2>
           <div className="absolute bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 translate-y-8 group-hover:translate-y-0 font-medium">
             <span>Review my code</span> <ArrowRight size={18} />
           </div>
        </a>

        <a href="https://drive.google.com/file/d/141iC4WpvLZfClqWFB2zGfLiSnq3BJNvL/view?usp=sharing" target="_blank" className="group flex-1 md:hover:flex-[1.5] transition-all duration-700 ease-in-out bg-[#dcdcd7] flex flex-col items-center justify-center relative overflow-hidden text-black z-0">
           <FileText size={64} strokeWidth={1} className="mb-6 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
           <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter uppercase relative z-10 transition-transform duration-500 group-hover:-translate-y-4">Resume</h2>
           <div className="absolute bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 translate-y-8 group-hover:translate-y-0 font-medium">
             <span>Download PDF</span> <ArrowRight size={18} />
           </div>
        </a>

        {/* Animated Down Scroll Indicator */}
        <div className="absolute bottom-10 right-10 z-50 animate-bounce text-black pointer-events-none flex flex-col items-center opacity-60">
           <span className="text-xs uppercase tracking-widest font-bold rotate-90 origin-top mb-10 translate-y-4">Scroll</span>
           <ArrowDown size={32} strokeWidth={1.5} />
        </div>
      </section>

      {/* Form Section (Triggers on scroll) */}
      <section className="w-full min-h-screen bg-black text-white flex items-center justify-center px-8 py-24 sm:py-32">
        <motion.div 
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4">Say Hello.</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium tracking-tight">I'm always open to discussing new projects.</p>
          </div>

          <form className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="flex flex-col border-b border-gray-700 pb-4 group hover:border-gray-400 transition-colors">
                <label className="text-sm text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">My Name is</label>
                <input type="text" placeholder="John Doe" className="bg-transparent outline-none text-2xl md:text-3xl font-medium placeholder-gray-700 w-full" />
              </div>
              <div className="flex flex-col border-b border-gray-700 pb-4 group hover:border-gray-400 transition-colors">
                <label className="text-sm text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">And my email is</label>
                <input type="email" placeholder="john@doe.com" className="bg-transparent outline-none text-2xl md:text-3xl font-medium placeholder-gray-700 w-full" />
              </div>
            </div>
            
            <div className="flex flex-col border-b border-gray-700 pb-4 mt-12 group hover:border-gray-400 transition-colors">
              <label className="text-sm text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">My Message is</label>
              <textarea placeholder="Tell me about your project..." rows={4} className="bg-transparent outline-none text-2xl md:text-3xl font-medium placeholder-gray-700 w-full resize-none"></textarea>
            </div>

            <div className="flex justify-start pt-8">
               <button type="submit" onClick={(e) => { e.preventDefault(); setTimeout(() => {
                alert("Message Received");
               }, 1000); }} className="group relative px-10 py-5 bg-white text-black text-lg font-bold uppercase tracking-widest overflow-hidden rounded-full">
                 <span className="relative z-10 group-hover:text-white transition-colors duration-500">Send Message</span>
                 <div className="absolute inset-0 bg-[#2d2d2d] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out border border-white rounded-full"></div>
               </button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Connect;
