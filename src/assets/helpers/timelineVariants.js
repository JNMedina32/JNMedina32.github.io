export const timelineVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideIn: {
    initial: { x: -100 },
    animate: { x: 0 },
    transition: { type: "spring", stiffness: 100 },
  },
  scaleIn: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { duration: 0.5 },
  },
};
