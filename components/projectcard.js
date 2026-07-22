import { useEffect, useState } from "react";

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    tech,
    liveUrl,
    type,
    contributions,
    status,
    images = []
  } = project;

  const [isHovered, setIsHovered] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hasHover, setHasHover] = useState(false);

  const hasImages = Array.isArray(images) && images.length > 0;

  useEffect(() => {
    if (typeof window === "undefined") return;
    setHasHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  useEffect(() => {
    if (!hasImages || !hasHover || !isHovered) {
      setActiveImageIndex(0);
      return;
    }

    const interval = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % images.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, [hasImages, hasHover, images.length, isHovered]);

  const Card = (
    <div
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article
        className="
          border border-white/10 rounded-xl bg-white/5 p-6
          transition duration-300
          hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 hover:border-white/30
          overflow-hidden
        "
      >
        {hasImages && (
          <div
            className="
              relative mb-6 overflow-hidden rounded-[1.25rem]
              bg-slate-950/95 border border-white/5
              transition-all duration-700 ease-in-out
              md:max-h-0 md:opacity-0 md:group-hover:max-h-56 md:group-hover:opacity-100
            "
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={images[activeImageIndex]}
                alt={`${title} screenshot ${activeImageIndex + 1}`}
                className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            </div>
          </div>
        )}

        <div className="mb-4">
          <span className="text-xs uppercase tracking-wide text-white/50">
            {type}
          </span>
          <h3 className="text-2xl font-bold mt-2">{title}</h3>
          {liveUrl && (
            <span className="inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full bg-green-500/20 text-green-400">
              Live Project
            </span>
          )}
        </div>

        <p className="text-white/70 mb-6">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Key Contributions</h4>
          <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
            {contributions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 text-xs text-white/50">Status: {status}</div>
      </article>
    </div>
  );
  if (liveUrl) {
    return (
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="block">
        {Card}
      </a>
    );
  }
  return Card;
}