import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { projects } from "../data/projects";
import ProjectCard from "../components/projectcard";
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
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </Layout>
    </section>
  );
}