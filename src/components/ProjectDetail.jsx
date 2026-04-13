import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SEO from "./SEO";

const projectData = {
  "swiffy-labs": {
    title: "SwiffyLabs",
    subtitle: "UI Migration for Insurance Platform (React)",
    role: "Frontend Developer",
    timeline: "11/25 - 02/26",
    image: "/project1.png",
    link: "https://www.swiffylabs.com/",
    overview: [
      "During my time at SwiffyLabs, I played a key role in a large-scale UI migration for a comprehensive insurance platform. By transitioning their legacy interfaces into a modern React.js architecture housed within an Nx monorepo, I was able to streamline their entire frontend ecosystem.",
      "A major highlight of this transition was implementing a config-driven UI architecture that could dynamically render over 20 distinct forms and modules. This strategic shift ultimately reduced manual development effort by roughly 40%.",
      "To ensure long-term stability and velocity, I designed reusable UI templates from the ground up. This enabled a much faster migration process while establishing standardized design patterns. Ultimately, the thorough refactoring and optimization resulted in a highly scalable, maintainable, and noticeably more performant digital experience for the end users."
    ]
  },
  "edme-wellness": {
    title: "EDME Wellness",
    subtitle: "Enterprise UI (React)",
    role: "Frontend Developer",
    timeline: "2026",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    overview: [
      "For the EDME Wellness Platform, I engineered a wellness-focused enterprise insurance UI utilizing React.js and TypeScript. A major priority was crafting an interface that completely streamlined usability and refined the overall user experience for the handling of complex workflows.",
      "To achieve this scale, I architected and built highly scalable UI components and custom templates from scratch. These foundational elements were designed specifically for intricate workflow and policy management modules, guaranteeing long-term flexibility and seamless reusability across the ecosystem.",
      "Furthermore, I integrated robust GraphQL APIs to overhaul and modernize their data-fetching and state management processes. This architectural choice significantly reduced data latency and optimized execution flow, resulting in a noticeably sharper and more responsive application."
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  
  const project = projectData[id] || {
    title: `Project ${id}`,
    subtitle: "Detailed case study coming soon.",
    role: "Frontend Developer",
    timeline: "2026",
    image: "",
    link: "#",
    overview: ["Waiting for content to be supplied."]
  };

  return (
    <div className="w-full min-h-screen bg-white text-black font-sans">
      <SEO 
        title={`${project.title} | Case Study`} 
        description={`Read the full case study on ${project.title}. ${project.subtitle}. Built by Aman Rai.`}
      />
      <Header theme="light" />
      
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 pt-32 pb-20">
        <Link to="/works" className="text-gray-500 hover:text-black mb-8 inline-block transition-colors underline underline-offset-4">
          &larr; Back to Works
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-6">
            <div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter capitalize leading-tight">
                {project.title}
              </h1>
            </div>
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-lg font-medium hover:text-gray-500 transition-colors pb-4 border-b border-black hover:border-gray-500 pb-1 w-fit">
                Visit Website <ExternalLink size={20} />
              </a>
            )}
          </div>
          
          <p className="text-xl md:text-2xl text-gray-500 font-medium tracking-tight mb-16">
            {project.subtitle}
          </p>

          <div className="w-full h-[60vh] bg-gray-100 rounded-2xl mb-16 flex flex-col items-center justify-center text-gray-400 overflow-hidden shadow-xl">
             {project.image ? (
               <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
             ) : (
               <span className="text-lg">Hero Banner Placeholder</span>
             )}
          </div>
          
          <div className="max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-1 border-t border-gray-200 pt-8">
                <h3 className="text-sm text-gray-400 font-semibold mb-2 uppercase tracking-widest">Role</h3>
                <p className="font-medium text-lg">{project.role}</p>
                
                <h3 className="text-sm text-gray-400 font-semibold mb-2 uppercase tracking-widest mt-8">Timeline</h3>
                <p className="font-medium text-lg">{project.timeline}</p>
            </div>
            <div className="md:col-span-3 border-t border-gray-200 pt-8">
                <h2 className="text-3xl font-bold mb-8 tracking-tight">Overview</h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  {project.overview.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
