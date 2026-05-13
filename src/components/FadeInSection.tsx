import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface FadeInSectionProps {
  children: React.ReactNode;
  direction?: Direction | string;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  direction = "up",
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [hasEnteredOnce, setHasEnteredOnce] = useState(false);

  // Tracker la première entrée pour différencier l'entrée initiale de la sortie
  useEffect(() => {
    if (isInView && !hasEnteredOnce) {
      setHasEnteredOnce(true);
    }
  }, [isInView, hasEnteredOnce]);

  // Variantes en fonction de la direction
  const variants = {
    hidden: {
      opacity: 0,
      y: typeof direction === "string" && direction === "up" ? 100 : typeof direction === "string" && direction === "down" ? -100 : 0,
      x: typeof direction === "string" && direction === "left" ? 100 : typeof direction === "string" && direction === "right" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
    exit: {
      opacity: 0,
      y: typeof direction === "string" && direction === "up" ? -100 : typeof direction === "string" && direction === "down" ? 100 : 0,
      x: typeof direction === "string" && direction === "left" ? -100 : typeof direction === "string" && direction === "right" ? 100 : 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
  };

  // Déterminer quelle animation utiliser
  const targetAnimation = isInView ? "visible" : (hasEnteredOnce ? "exit" : "hidden");

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={targetAnimation}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
