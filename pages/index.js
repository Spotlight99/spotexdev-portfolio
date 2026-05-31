import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/buttons"
import useScrollReveal from "../hooks/useScrollReveal";

export default function Home() {
  const { ref, visible } = useScrollReveal();

  return (
    <Layout>
      <SEO
        title="Emmanuel Ihejirika — Full-Stack Web Developer"
        description="Full-stack developer skilled in Next.js, React, Node.js, Django, MongoDB, and modern web technologies."
      />

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-32">
        <div
          ref={ref}
          className={`
            flex flex-col md:flex-row items-center gap-10 md:gap-16
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          {/* LEFT — Text Content */}
          <div className="flex-1 text-center md:text-left">

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              I build fast,<br />
              scalable web<br />
              applications
            </h1>

            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              I'm <span className="text-white font-medium">Emmanuel Ihejirika</span>, a full-stack
              developer specializing in Next.js, React, Node.js, Django, and MongoDB —
              focused on performance, clean architecture, and real business results.
            </p>

            {/* Stats row */}
            <div className="flex justify-center md:justify-start gap-6 mb-8">
              <div>
                <p className="text-2xl font-bold">9+</p>
                <p className="text-xs text-white/50 mt-1">Projects</p>
              </div>
              <div className="border-l border-white/10 pl-6">
                <p className="text-2xl font-bold">3+</p>
                <p className="text-xs text-white/50 mt-1">Years Exp.</p>
              </div>
              <div className="border-l border-white/10 pl-6">
                <p className="text-2xl font-bold">5+</p>
                <p className="text-xs text-white/50 mt-1">Technologies</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button href="/projects">View Projects</Button>
              <Button href="/contact" variant="secondary">Contact Me</Button>
            </div>
          </div>

          import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/buttons"
import useScrollReveal from "../hooks/useScrollReveal";
import Image from "next/image";

export default function Home() {
  const { ref, visible } = useScrollReveal();

  return (
    <Layout>
      <SEO
        title="Emmanuel Ihejirika — Full-Stack Web Developer"
        description="Full-stack developer skilled in Next.js, React, Node.js, Django, MongoDB, and modern web technologies."
      />

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-32">
        <div
          ref={ref}
          className={`
            flex flex-col md:flex-row items-center gap-10 md:gap-16
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          {/* LEFT — Text Content */}
          <div className="flex-1 text-center md:text-left">

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              I build fast,<br />
              scalable web<br />
              applications
            </h1>

            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              I'm <span className="text-white font-medium">Emmanuel Ihejirika</span>, a full-stack
              developer specializing in Next.js, React, Node.js, Django, and MongoDB —
              focused on performance, clean architecture, and real business results.
            </p>

            {/* Stats row */}
            <div className="flex justify-center md:justify-start gap-6 mb-8">
              <div>
                <p className="text-2xl font-bold">9+</p>
                <p className="text-xs text-white/50 mt-1">Projects</p>
              </div>
              <div className="border-l border-white/10 pl-6">
                <p className="text-2xl font-bold">3+</p>
                <p className="text-xs text-white/50 mt-1">Years Exp.</p>
              </div>
              <div className="border-l border-white/10 pl-6">
                <p className="text-2xl font-bold">5+</p>
                <p className="text-xs text-white/50 mt-1">Technologies</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button href="/projects">View Projects</Button>
              <Button href="/contact" variant="secondary">Contact Me</Button>
            </div>
          </div>

  

        </div>
      </section>
    </Layout>
  );
}

        </div>
      </section>
    </Layout>
  );
}
