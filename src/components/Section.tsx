import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative py-24 md:py-32 px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: -50, filter: "blur(5px)", scale: 0.98 }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
