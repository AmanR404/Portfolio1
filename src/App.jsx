import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SmokeCursor from "./components/SmokeCursor";
import CuboidLoader from "./components/CuboidLoader";
import PageTransition from "./components/PageTransition";
import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";

// Lazy Loaded Routes for optimal code-splitting and performance
const LazyAbout = lazy(() => import("./components/About"));
const LazyWorks = lazy(() => import("./components/Works"));
const LazyProjectDetail = lazy(() => import("./components/ProjectDetail"));
const LazyConnect = lazy(() => import("./components/Connect"));

// Minimal fallback to prevent layout flashing during lazy chunk network fetches
const Fallback = () => <div className="w-full min-h-screen bg-black absolute top-0 left-0" />;

const Home = () => (
  <section className="relative min-h-screen text-white overflow-hidden bg-black">
    <SEO 
      title="Aman Rai | Full Stack (MERN) Developer" 
      description="Portfolio of Aman Rai. Full Stack (MERN) Developer building scalable web applications. Explore my case studies, works, and professional resume."
    />
    
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/bg.mp4" type="video/mp4" />
    </video>

    {/* Main Content Overlay */}
    <div className="relative z-10 w-full h-full min-h-screen flex flex-col pointer-events-auto mix-blend-difference">
      <Header />
      <Dashboard />
    </div>
  </section>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><Suspense fallback={<Fallback />}><LazyAbout /></Suspense></PageTransition>} />
        <Route path="/works" element={<PageTransition><Suspense fallback={<Fallback />}><LazyWorks /></Suspense></PageTransition>} />
        <Route path="/works/:id" element={<PageTransition><Suspense fallback={<Fallback />}><LazyProjectDetail /></Suspense></PageTransition>} />
        <Route path="/connect" element={<PageTransition><Suspense fallback={<Fallback />}><LazyConnect /></Suspense></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      <Router>
        {loading && <CuboidLoader onComplete={() => setLoading(false)} />}
        
        {!loading && (
          <div className="flex flex-col min-h-screen w-full bg-black">
            <SmokeCursor />
            <AnimatedRoutes />
          </div>
        )}
      </Router>
    </HelmetProvider>
  );
}

export default App;
