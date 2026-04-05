import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-center text-sm text-white/60">
      <div className="flex items-center justify-center gap-4 mb-3">
        <a
          href="https://github.com/Spotlight99"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition-colors"
        >
          <SiGithub size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/emmanuel-ihejirika-000535237"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition-colors"
        >
          <SiLinkedin size={18} />
        </a>
      </div>
      © {new Date().getFullYear()} spotexdev
    </footer>
  );
}