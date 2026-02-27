import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/buttons"
import useScrollReveal from "../hooks/useScrollReveal";

export default function Home() {
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
       title="Emmanuel Ihejirika — Full-Stack Web Developer"
       desciption="Full-stack developer skilled in Next.js, React, Node.js, Django, MongoDB, and modern web technologies."
       />

       <section className="max-w-6xl mx-auto px-6 py-32">
  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
    I build fast, scalable<br className="hidden md:block" />
    web applications
  </h1>

  <p className="text-white/70 text-lg max-w-2xl mb-10">
    I’m Emmanuel Ihejirika, a full-stack developer specializing in
    Next.js, React, Node.js, Django, and MongoDB — focused on performance,
    clean architecture, and real business results.
  </p>

 <div className="mt-10 flex gap-6">
  <Button href="/projects">View Projects</Button>
  <Button href="/contact" variant="secondary">
    Contact Me
  </Button>
</div>

</section>

    </Layout>
    </section>
  )
}
