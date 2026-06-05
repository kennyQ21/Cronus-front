import { Variants } from "framer-motion";

/**
 * Shared scroll-triggered fade-up animation factory.
 * Uses typed Framer Motion `Easing` values to satisfy strict TS.
 */
export function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  };
}

export const slideVariants: Variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" as const },
  }),
};
