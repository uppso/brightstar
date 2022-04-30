import { motion } from "framer-motion";

export function Planets({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    <motion.div
      data-testid="planets"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
