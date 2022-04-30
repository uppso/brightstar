import { motion } from "framer-motion";
import img from "../assets/earth.svg";

export function Earth() {
  return (
    <motion.img
      src={img}
      alt="earth"
      style={{
        width: 500,
        height: 500,
        position: "absolute",
        bottom: -30,
        right: -10,
      }}
      animate={{
        rotate: [0, -15, 0],
      }}
      transition={{
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
}
