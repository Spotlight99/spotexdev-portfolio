import SEO from "../components/SEO";
import Layout from "../components/Layout";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
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
        title="Contact — Emmanuel Ihejirika"
        description="Get in touch with Emmanuel Ihejirika for web development, collaboration, or freelance work."
      />

      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>

        <p className="text-white/70 mb-10 max-w-2xl">
          I’m open to full-time roles, freelance projects, and technical
          collaborations. If you have a project or opportunity in mind,
          feel free to reach out.
        </p>

        <div className="space-y-6 text-white/80">
          <div>
            <span className="block text-sm text-white/50">Email</span>
            <a
              href="mailto:ihejirikaemmanuelchukwuemeka@email.com"
              className="hover:underline"
            >
              ihejirikaemmanuelchukwuemeka@email.com
            </a>
          </div>

          <div>
            <span className="block text-sm text-white/50">GitHub</span>
            <a
              href="https://github.com/Spotlight99"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/Spotlight99
            </a>
          </div>

          <div>
            <span className="block text-sm text-white/50">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/emmanuel-ihejirika-000535237"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/emmanuel-ihejirika-000535237
            </a>
          </div>
        </div>
      </section>
    </Layout>
    </section>
  );
}
