"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      "#main-content [data-motion='copy'] > *, #main-content [data-motion='image'], #main-content [data-motion='text']",
    ));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.reveal = "visible";
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -48px 0px", threshold: 0 });

    // Only prepare content below the viewport; hydration never hides what is already visible.
    for (const element of elements) {
      if (element.getBoundingClientRect().top < window.innerHeight) continue;
      element.dataset.reveal = "pending";
      observer.observe(element);
    }

    function revealTarget(target: Element) {
      for (const element of elements) {
        if (!target.contains(element) && !element.contains(target)) continue;
        element.removeAttribute("data-reveal");
        observer.unobserve(element);
      }
    }

    function onFocus(event: FocusEvent) {
      if (event.target instanceof Element) revealTarget(event.target);
    }

    function onHashChange() {
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); }
      catch { return; }
      const target = document.getElementById(id);
      if (target) revealTarget(target);
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    function onMotionChange() {
      if (!reducedMotion.matches) return;
      observer.disconnect();
      for (const element of elements) element.removeAttribute("data-reveal");
    }

    onHashChange();
    document.addEventListener("focusin", onFocus);
    window.addEventListener("hashchange", onHashChange);
    reducedMotion.addEventListener("change", onMotionChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", onFocus);
      window.removeEventListener("hashchange", onHashChange);
      reducedMotion.removeEventListener("change", onMotionChange);
      for (const element of elements) element.removeAttribute("data-reveal");
    };
  }, []);

  return null;
}
