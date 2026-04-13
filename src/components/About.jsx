import { motion } from "framer-motion";
import { Phone, FileText, Briefcase, Bug } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SEO from "./SEO";

// Helper component for animating text word-by-word
const AnimatedText = ({ text, delayOffset = 0 }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: delayOffset * 0.5 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <motion.div
      className="flex flex-wrap"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-[6px] mb-1">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Helper component for line-by-line slide up (alternative approach for headings/buttons)
const SlideUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section 
      id="about" 
      className="w-full min-h-screen bg-[#EBEBE6] text-[#111111] flex items-center justify-center py-20 px-6 md:px-16 lg:px-24 relative"
    >
      <SEO 
        title="About Aman Rai | Experience & Journey" 
        description="Learn about Aman Rai, a Full Stack Developer with enterprise experience at Reliance and Aditya Birla Group."
      />
      <div className="absolute top-0 left-0 w-full z-50">
        <Header theme="light" />
      </div>

      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mt-12">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col gap-10 w-full lg:w-3/5">
          <SlideUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              About me
            </h2>
          </SlideUp>

          <div className="flex flex-col gap-8 text-lg sm:text-xl font-medium leading-relaxed tracking-tight text-[#222222]">
            <AnimatedText 
              delayOffset={0.2}
              text="Results-driven Web Developer with hands-on experience in building responsive, user-centric web applications using modern technologies." 
            />
            <AnimatedText 
              delayOffset={1.2}
              text="Skilled in frontend/backend development, API integration, and performance optimization. Passionate about clean code, intuitive design, and delivering high-quality digital experiences." 
            />
            <AnimatedText 
              delayOffset={2.2}
              text="Along with that, I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products." 
            />
          </div>
        </div>

        {/* Right Side: Links/Pills */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center items-start lg:items-end gap-5">
          <SlideUp delay={0.5}>
            <Link to="/connect" className="flex items-center justify-between gap-6 px-6 py-3 rounded-full border border-gray-400 hover:bg-[#dcdcd7] transition-colors cursor-pointer w-48 group">
              <span className="font-semibold text-sm">Connect</span>
              <Phone size={18} className="text-gray-700 group-hover:text-black transition-colors" />
            </Link>
          </SlideUp>

          <SlideUp delay={0.6}>
            <a href="#resume" className="flex items-center justify-between gap-6 px-6 py-3 rounded-full border border-gray-400 hover:bg-[#dcdcd7] transition-colors cursor-pointer w-48 group">
              <span className="font-semibold text-sm">Resume</span>
              {/* Using FileText as an approximation of the folder/document icon from image */}
              <FileText size={18} className="text-gray-700 group-hover:text-black transition-colors" />
            </a>
          </SlideUp>

          <SlideUp delay={0.7}>
            <a href="https://www.linkedin.com/in/aman3214/" target="_blank" className="flex items-center justify-between gap-6 px-6 py-3 rounded-full border border-gray-400 hover:bg-[#dcdcd7] transition-colors cursor-pointer w-48 group">
              <span className="font-semibold text-sm">LinkedIn</span>
              <Briefcase size={18} className="text-gray-700 group-hover:text-black transition-colors" />
            </a>
          </SlideUp>

          <SlideUp delay={0.8}>
            <a href="#github" className="flex items-center justify-between gap-6 px-6 py-3 rounded-full border border-gray-400 hover:bg-[#dcdcd7] transition-colors cursor-pointer w-48 group">
              <span className="font-semibold text-sm">GitHub</span>
              {/* As requested in the image (it shows a bug icon) */}
              <Bug size={18} className="text-gray-700 group-hover:text-black transition-colors" />
            </a>
          </SlideUp>
        </div>

      </div>
    </section>
  );
};

export default About;
