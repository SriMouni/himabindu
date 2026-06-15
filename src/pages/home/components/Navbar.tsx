import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Journey", href: "#journey" },
  { label: "Impact", href: "#impact" },
  { label: "Awards", href: "#awards" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section anchors scroll on the home page; from any other page they navigate
  // home (and the browser scrolls to the hash on load).
  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/")) return; // real route handled by <Link>
    if (!isHome) {
      window.location.href = href === "#home" ? "/" : `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const solid = scrolled || !isHome;

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-background-50 border-b border-background-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="font-heading text-lg md:text-xl font-semibold text-foreground-950 tracking-tight cursor-pointer whitespace-nowrap"
        >
          Himabindu<span className="text-primary-500"> Rudrapaka</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-label font-medium text-foreground-700 hover:text-primary-500 transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-label font-medium text-foreground-700 hover:text-primary-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-background-300 text-foreground-800 hover:text-primary-500 hover:border-primary-400 transition-colors cursor-pointer"
          >
            <i className={`text-lg ${theme === "dark" ? "ri-sun-line" : "ri-moon-line"}`} />
          </button>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`text-foreground-950 text-xl ${menuOpen ? "ri-close-line" : "ri-menu-3-line"}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background-50 border-t border-background-200 px-6 py-4">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="block w-full text-left py-3 text-sm font-medium text-foreground-700 hover:text-primary-500 border-b border-background-100"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-3 text-sm font-medium text-foreground-700 hover:text-primary-500 border-b border-background-100 cursor-pointer"
              >
                {link.label}
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}
