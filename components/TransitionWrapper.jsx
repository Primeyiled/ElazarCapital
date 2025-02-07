import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const TransitionWrapper = ({ children, transitionProps = {}, threshold = 0.1 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Keep it false to animate every time the component is in view
    threshold, // Controls the amount of the component visible before triggering animation
  });

  // Animation variants
  const animationVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slightly translated
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Slower transition (adjust the duration as needed)
        ease: "easeOut", // Smooth easing for the animation
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...transitionProps} // Allow custom transition props if needed
    >
      {children}
    </motion.div>
  );
};

export default TransitionWrapper;
