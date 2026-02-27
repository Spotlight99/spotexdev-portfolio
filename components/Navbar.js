import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="font-bold text-lg">
          Emmanuel Ihejirika
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

/* =========================
   Reusable Nav Link Component
   ========================= */

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