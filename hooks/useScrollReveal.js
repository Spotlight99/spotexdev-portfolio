import { useEffect, useRef, useState } from "react";

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once (WP standard)
        }
      },
      {
        threshold: options.threshold ?? 0.15,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options.threshold]);

  return { ref, visible };
}
