export default function Button({ children, href }) {
  if (href) {
    return (
      <a
      href={href}
      className="
      inline-flex items-center gap-2
      rounded-lg bg-white text-black px-6 py-3
      hover:bg-gray-200
      hover:-translate-y-0.5
      active:translate-y-0
      transition
      "
      >
       {children}
      </a>
    );
  }
  return (
    <button
      className="
      inline-flex items-center gap-2
      rounded-lg bg-white px-6 py-3
      text-black font-medium
      hover:bg-gray-200
      hover:-translate-y-0.5
      active:translate-y-0
      transition
      "
    >
      {children}
    </button>
  );
}