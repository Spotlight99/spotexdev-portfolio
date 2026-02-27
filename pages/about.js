import Layout from "../components/Layout"
import SEO from "../components/SEO"
import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
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
        title="About — Emmanuel Ihejirika"
        description="About Emmanuel Ihejirika, a full-stack web developer specializing in scalable web applications, backend systems, and automation."
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
  <div className="grid gap-12 md:grid-cols-3">

    {/* LEFT COLUMN */}
    <div className="md:col-span-2 space-y-10">
      
      {/* Header */}
      <header>
        <h1 className="text-4xl font-extrabold mb-4">About Me</h1>
        <p className="text-white/70 max-w-2xl">
          I’m a full-stack web developer focused on building reliable,
          scalable, and maintainable software solutions.
        </p>
      </header>

      {/* Bio */}
      <div className="space-y-6 text-white/80 leading-relaxed">
        <p>
          My work spans modern web applications, backend systems,
          automation tools, and financial utilities. I focus on writing
          clean, structured code that scales well and remains easy to
          maintain over time.
        </p>

        <p>
          I have hands-on experience building projects with Next.js,
          React, Node.js, Django, Python, and modern frontend tooling.
          Several of my projects involve real-time data handling,
          system logic design, and extensible architectures.
        </p>

        <p>
          I approach development with a problem-solving mindset —
          understanding requirements clearly, designing practical
          solutions, and implementing them with attention to detail.
        </p>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <aside className="space-y-8">

      {/* Skills */}
      <div className="border border-white/10
                        rounded-x1
                        p-6
                        transition 
                        hover:-translate-y-1
                        hover:shadow-x1
                        hover:shadow-black/40
                        hover:border-white/30">
        <h2 className="text-lg font-semibold mb-4">Core Skills</h2>
        <ul className="space-y-2 text-sm text-white/70">
          <li>• Full-Stack Web Development</li>
          <li>• Backend Logic & APIs</li>
          <li>• Automation & Scripting</li>
          <li>• Market & Data Analysis Tools</li>
          <li>• Scalable System Design</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="border border-white/10
                        rounded-x1
                        p-6
                        transition 
                        hover:-translate-y-1
                        hover:shadow-x1
                        hover:shadow-black/40
                        hover:border-white/30">
        <h2 className="text-lg font-semibold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "Next.js",
            "React",
            "Node.js",
            "Python",
            "Django",
            "Flask",
            "MongoDB",
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS"
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/10 text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </aside>
  </div>
</section>
    </Layout>
    </section>
  )
}