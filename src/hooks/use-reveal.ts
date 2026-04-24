import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    const items = el.querySelectorAll<HTMLElement>(".reveal");
    items.forEach((item, i) => {
      if (!item.style.getPropertyValue("--reveal-delay")) {
        item.style.setProperty("--reveal-delay", `${i * 80}ms`);
      }
      io.observe(item);
    });

    return () => io.disconnect();
  }, []);

  return ref;
}
