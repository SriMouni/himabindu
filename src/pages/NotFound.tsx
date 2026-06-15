import { Link, useLocation } from "react-router-dom";
import Navbar from "@/pages/home/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="bg-background-50 text-foreground-900 min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="font-heading text-7xl md:text-9xl font-semibold text-primary-500/20 select-none">404</p>
        <h1 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-950 -mt-4">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-foreground-500 font-label break-all max-w-md">{location.pathname}</p>
        <p className="mt-4 text-foreground-600 max-w-md">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground-950 text-background-50 text-sm font-medium hover:bg-foreground-800 transition-colors">
            <i className="ri-home-4-line" /> Back to Home
          </Link>
          <Link to="/himabindu-rudrapaka" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-background-300 text-foreground-700 text-sm font-medium hover:border-primary-300 hover:text-primary-600 transition-colors">
            About Himabindu Rudrapaka
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
