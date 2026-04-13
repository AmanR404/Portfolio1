import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MusicEqualizer = ({ isPlaying }) => {
  return (
    <div className="flex items-end gap-[5px] h-8 cursor-pointer">
      <motion.div 
        className="w-[3px] bg-white origin-bottom rounded-[1px]"
        animate={{ height: isPlaying ? [8, 16, 8] : 4 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div 
        className="w-[3px] bg-white origin-bottom rounded-[1px]"
        animate={{ height: isPlaying ? [24, 12, 24] : 4 }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut", delay: 0.1 }}
      />
      <motion.div 
        className="w-[3px] bg-white origin-bottom rounded-[1px]"
        animate={{ height: isPlaying ? [8, 20, 8] : 4 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div 
        className="w-[3px] bg-white origin-bottom rounded-[1px]"
        animate={{ height: isPlaying ? [16, 8, 16] : 4 }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut", delay: 0.15 }}
      />
    </div>
  );
};

const Dashboard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let audio = document.getElementById("global-bg-music");
    
    if (!audio) {
      audio = document.createElement("audio");
      audio.id = "global-bg-music";
      audio.src = "/bg_music.mp3";
      audio.loop = true;
      document.body.appendChild(audio);
      
      // Auto-play attempt (Browsers will block this until the user interacts with the page)
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
          // BROWSER POLICY WORKAROUND: If autoplay is blocked natively, 
          // we attach a temporary listener to start playing the moment the user clicks anywhere on the screen!
          const forcePlay = () => {
            audio.play().then(() => {
              document.removeEventListener('click', forcePlay);
              document.removeEventListener('keydown', forcePlay);
            }).catch(console.error);
          };
          document.addEventListener('click', forcePlay);
          document.addEventListener('keydown', forcePlay);
        }); 
    } else {
      setIsPlaying(!audio.paused);
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById("global-bg-music");
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  };

  return (
    <section className="h-screen w-full">
      <div className="flex w-full justify-between absolute bottom-30 px-10 pointer-events-auto items-end">
        <Link to="/connect" className="mb-2">
          <button className="bg-black border border-gray-700 text-white px-5 h-12 cursor-pointer hover:bg-white hover:text-black transition-colors uppercase tracking-widest font-semibold text-sm rounded-full">Get in touch</button>
        </Link>
        <div className="flex flex-col gap-2 text-xl text-center font-semibold">
          <span>Aman Rai</span>
          <p className="text-gray-300">Full Stack (MERN) Developer building scalable web applications</p>
          <p className="text-gray-300">
            Worked on enterprise projects for{" "}
            <b className="text-white">Reliance & Aditya Birla Group</b>
          </p>
        </div>
        
        {/* Audio Toggle Button */}
        <button 
          onClick={toggleMusic}
          className="cursor-pointer mb-3 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
          title={isPlaying ? "Pause Background Music" : "Play Background Music"}
        >
          <MusicEqualizer isPlaying={isPlaying} />
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
