// ========================================
// SIDE QUEST STUDIOS - REVEAL CONTROLLER
// ========================================

export function initializeRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");

  // Respect accessibility preferences
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  // Observe elements entering the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}