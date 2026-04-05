import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="font-bold text-lg">
          Emmanuel Ihejirika
        </Link>

        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-white/60">
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
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="
        relative
        text-white/70
        hover:text-white

        after:absolute
        after:left-0
        after:-bottom-1
        after:h-px
        after:w-0
        after:bg-white
        after:transition-all
        hover:after:w-full
      "
    >
      {children}
    </Link>
  );
}