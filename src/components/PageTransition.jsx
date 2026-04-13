import { motion } from "framer-motion";

// The new page slides OVER the old page seamlessly.
const pageAnim = {
  initial: {
    // Slanted wedge starting off-screen at the bottom.
    // Higher on the right side, lower on the left side.
    clipPath: "polygon(0% 120%, 100% 100%, 100% 100%, 0% 100%)",
    filter: "brightness(0.5)",
    zIndex: 50,
  },
  animate: {
    // Unfurls up to cover the whole screen perfectly straight.
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    filter: "brightness(1)",
    zIndex: 50,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1], // Apple-like sweeping ease
    },
  },
  exit: {
    // The old page stays exactly where it is natively while the new one covers it.
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    filter: "brightness(0.3)", // Dims out to give depth to the new page sliding heavily over it
    zIndex: 0,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
      /* absolute positioning is critical so it lays visually directly over the old page during routing */
      className="absolute top-0 left-0 w-full min-h-screen bg-black overflow-hidden origin-top"
    >
      {/* The actual page content is rendered normally inside */}
      {children}
    </motion.div>
  );
};

export default PageTransition;
