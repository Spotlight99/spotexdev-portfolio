export default function ProjectCard({ title, description, tech }) {
  return (
    <div
      className="
        bg-white/5 border border-white/10 rounded-xl p-6
        hover:-translate-y-2 hover:shadow-xl hover:shadow-black/40
      "
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs px-3 py-1 rounded-full bg-white/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}