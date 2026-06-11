// Eagerly resolve every image in ./img to its final URL.
// Vite hashes each file and rewrites the URL with the correct base path,
// so these work both in local dev and on GitHub Pages without manual fixes.
const modules = import.meta.glob("./img/*.{jpeg,jpg,png,webp,svg,gif}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const byName: Record<string, string> = {};
for (const filePath in modules) {
  const name = filePath.split("/").pop() as string;
  byName[name] = modules[filePath];
}

/** Resolve an image by its file name, e.g. img("school1.jpeg"). */
export function img(name: string): string {
  return byName[name] ?? name;
}

export default byName;
