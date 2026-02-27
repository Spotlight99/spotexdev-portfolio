import { useEffect, useRef, useState } from "react";

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold]);

  return { ref, visible };
}