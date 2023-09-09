export const contentVariants = {
  hidden: {
    opacity: 0,
    transform: "perspective(600px) rotateX(90deg)",
    transformOrigin: 'top center',
  },
  visible: {
    opacity: 1,
    transform: "perspective(600px) rotateX(0deg)",
    transformOrigin: 'bottom center',
    transition: {
      duration: 0.5,
      delay: 0.5, // delay to allow the "lifting and dropping" animation to complete
    },
  },
  exit: {
    opacity: 0,
    transform: "perspective(600px) rotateX(90deg)",
    transformOrigin: 'bottom center',
    transition: {
      duration: 0.3,
    },
  },
};


export const tabVariants = {
  lifted: {
    y: -10,
    transition: {
      duration: 0.5,
    }
  },
  landed: {
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    }
  },
};

