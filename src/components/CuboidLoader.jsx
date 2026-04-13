import { useEffect, useState } from "react";
import "../styles/cuboidLoader.css";

const CuboidLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          // Start expansion animation
          setTimeout(() => setExpand(true), 300);

          // Reveal website
          setTimeout(() => onComplete(), 1200);

          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`loader-container ${expand ? "fade-out" : ""}`}>
      <div className="loader-content">
        <div className={`cuboid ${expand ? "cuboid-expand" : ""}`}>
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>

        {/* Percentage with spacing */}
        <p className="loading-text">{progress}%</p>
      </div>
    </div>
  );
};

export default CuboidLoader;