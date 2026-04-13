
import { Link, useLocation } from "react-router-dom";

const Header = ({ theme = "dark" }) => {
  const isLight = theme === "light";
  const textColor = isLight ? "text-black" : "text-white";
  const { pathname } = useLocation();

  // The logo is natively white. We inherently invert it to black for pages with known light backgrounds.
  const invertLogo = pathname.startsWith("/works") || pathname.startsWith("/connect") ? "invert" : "";

  const getLinkClass = (path) => {
    // Determine strict routing match
    const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
    
    // Natively return combined Tailwind classes handling scale, stroke weight, and opacity transitions
    return `inline-block transition-all duration-300 ease-out underline ${
      isActive 
        ? "font-bold scale-[1.15] opacity-100" 
        : "opacity-80 hover:opacity-100 hover:scale-[1.10]"
    }`;
  };

  return (
    <nav className={`flex flex-row items-center justify-between gap-4 pt-6 px-6 md:px-10 ${textColor} relative z-50`}>
        <Link to="/" className="flex-shrink-0">
          <img src="/logo.svg" alt="logo" className={`h-4 sm:h-5 md:h-6 w-auto transition-transform duration-300 hover:scale-110 ${invertLogo}`} />
        </Link>
        <div className="flex justify-end gap-6 sm:gap-12 md:gap-24 lg:gap-42 text-xs sm:text-sm md:text-base">
            <ul>
                <li>
                  <Link to="/works" className={getLinkClass("/works")}>Works</Link>
                </li>
            </ul>
            <ul>
                <li>
                  <Link to="/about" className={getLinkClass("/about")}>About</Link>
                </li>
            </ul>
            <ul>
                <li>
                  <Link to="/connect" className={getLinkClass("/connect")}>Connect</Link>
                </li>
            </ul>
        </div>
        <span className="hidden md:inline-block text-sm">
            
        </span>
    </nav>
  );
};

export default Header;