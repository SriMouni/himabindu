import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "Journey",  href: "#journey" },
  { label: "Impact",   href: "#impact" },
  { label: "Awards",   href: "#awards" },
  // { label: "Global",   href: "#global" },
  { label: "Skills",   href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio",href: "#portfolio" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background-50 border-b border-background-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          className="font-heading text-lg md:text-xl font-semibold text-foreground-950 tracking-tight cursor-pointer whitespace-nowrap"
        >
          Himabindu<span className="text-primary-500"> Rudrapaka</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-label font-medium text-foreground-700 hover:text-primary-500 transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Theme switcher */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-background-300 text-foreground-800 hover:text-primary-500 hover:border-primary-400 transition-colors cursor-pointer"
          >
            <i className={`text-lg ${theme === "dark" ? "ri-sun-line" : "ri-moon-line"}`} />
          </button>

          {/* CTA */}
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Appointment+with+Himabindu&dates=20250701T100000Z/20250701T103000Z&details=Consultation+Session&location=Online"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500 text-background-50 text-sm font-medium hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            Book a Call
          </a>

          {/* Mobile hamburger */}
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
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-3 text-sm font-medium text-foreground-700 hover:text-primary-500 border-b border-background-100 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Appointment+with+Himabindu&dates=20250701T100000Z/20250701T103000Z&details=Consultation+Session&location=Online"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center px-5 py-2.5 rounded-full bg-primary-500 text-background-50 text-sm font-medium cursor-pointer"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}