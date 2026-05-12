import { motion } from "framer-motion";

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export const popIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.92, rotate: -2 },
  whileInView: { opacity: 1, scale: 1, rotate: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.55, delay, ease: [0.34, 1.56, 0.64, 1] },
});

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
  viewport: { once: true, margin: "-100px" },
};
