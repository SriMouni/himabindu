import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/himabindu-rudrapaka" },
  { label: "Schools", to: "/schools-managed-by-himabindu-rudrapaka" },
  { label: "Blog", to: "/blog" },
];

export default function PageNav() {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-50 bg-background-50/90 backdrop-blur border-b border-background-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-lg font-semibold text-foreground-950">
          Himabindu <span className="text-primary-500">Rudrapaka</span>
        </Link>
        <nav className="flex items-center gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hidden sm:inline text-sm font-medium text-foreground-700 hover:text-primary-500 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-background-300 text-foreground-800 hover:text-primary-500 hover:border-primary-400 transition-colors"
          >
            <i className={`text-lg ${theme === "dark" ? "ri-sun-line" : "ri-moon-line"}`} />
          </button>
        </nav>
      </div>
    </header>
  );
}
