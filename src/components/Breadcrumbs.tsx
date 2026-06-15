import { Link } from "react-router-dom";

export interface Crumb {
  name: string;
  path: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-foreground-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span className="text-foreground-700 font-medium" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link to={c.path} className="hover:text-primary-600 transition-colors">
                    {c.name}
                  </Link>
                  <span className="text-foreground-300">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
