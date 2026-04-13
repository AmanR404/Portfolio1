import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "./Header";
import SEO from "./SEO";

const projects = [
  {
    id: 1,
    title: "Swiffy labs",
    category: "Web Application",
    image: "/project1.png", 
  },
  {
    id: 2,
    title: "EDME wellness",
    category: "Wellness Platform",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
  }
];

const Works = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black font-sans">
      <SEO 
        title="Works & Projects | Aman Rai" 
        description="Explore the professional portfolio and enterprise case studies developed by Aman Rai."
      />
      <Header theme="light" />
      
      <div className="flex flex-col w-full pb-32 pt-8">
        {projects.map((project, index) => (
          <Link 
            to={`/works/${project.title.toLowerCase().replace(/\s+/g, '-')}`} 
            key={project.id} 
            className="w-full flex flex-col md:flex-row min-h-screen max-h-[900px] items-center border-b border-gray-100 last:border-none hover:bg-gray-50 transition-colors"
          >
            
            {/* Left side: Image coming from left/opacity */}
            <motion.div 
              className="w-full md:w-1/2 h-[50vh] md:h-full p-8 md:p-12 lg:p-16 flex items-center justify-center order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full h-full max-h-[70vh] relative overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>

            {/* Right side: Text coming from UP */}
            <motion.div 
              className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center order-1 md:order-2"
              initial={{ opacity: 0, y: -80 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-black leading-[0.9] mb-6">
                {project.title}
              </h2>
              <p className="text-gray-600 text-lg md:text-2xl font-medium tracking-tight">
                {project.category}
              </p>
            </motion.div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Works;
