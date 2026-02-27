import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { projects } from "../data/projects"
import useScrollReveal from "../hooks/useScrollReveal";

export default function Projects() {
  const { ref, visible } = useScrollReveal();
  return (
    <section
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
    <Layout>
      <SEO
        title="Projects — Emmanuel Ihejirika"
        description="Selected software development projects by Emmanuel Ihejirika, including web applications, backend systems, and trading logic engines."
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <header className="mb-16">
          <h1 className="text-4xl font-extrabold mb-4">Projects</h1>
          <p className="text-white/70 max-w-2xl">
            A selection of professional projects spanning web applications,
            backend systems, automation tools, and financial utilities.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="border border-white/10
                        rounded-x1
                        p-6
                        transition 
                        hover:-translate-y-1
                        hover:shadow-x1
                        hover:shadow-black/40
                        hover:border-white/30
                        ">

              <div className="mb-4">
                <span className="text-xs uppercase tracking-wide text-white/50">
                  {project.type}
                </span>
                <h2 className="text-2xl font-bold mt-2">
                  {project.title}
                </h2>
              </div>

              <p className="text-white/70 mb-6">
                {project.description}
              </p>

              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">
                  Key Contributions
                </h3>
                <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                  {project.contributions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 text-xs text-white/50">
                Status: {project.status}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
    </section>
  )
}