import { useState } from "react";
import emailjs from "emailjs-com";
import { SiGithub, SiLinkedin } from "react-icons/si";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Initialize EmailJS (replace with your public key from emailjs.com)
      emailjs.init("h0na93cALgVC1qi0a");

      // Send email (replace with your service ID and template ID)
      await emailjs.send("service_qxwkf1y", "template_qies5kd", {
        to_email: "ihejirikaemmanuelchukwuemeka@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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

          <p className="text-white/70 mb-12 max-w-2xl">
            I'm open to full-time roles, freelance projects, and technical
            collaborations. If you have a project or opportunity in mind,
            feel free to reach out.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="mb-16 space-y-6 bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm"
          >
            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
                {error}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                placeholder="Project inquiry, freelance work, etc."
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-white/90 transition-all disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Sending..." : "REACH OUT"}
            </button>
          </form>

          {/* Social Buttons */}
          <div className="space-y-4">
            <p className="text-white/70 mb-6">Or connect with me on:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.linkedin.com/in/emmanuel-ihejirika-000535237"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-6 py-4 text-white font-medium transition-all"
              >
                <SiLinkedin size={20} />
                REACH OUT ON LINKEDIN
              </a>

              <a
                href="https://github.com/Spotlight99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-6 py-4 text-white font-medium transition-all"
              >
                <SiGithub size={20} />
                CHECK OUR GITHUB PROFILE
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </section>
  );
}
