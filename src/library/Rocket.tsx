import { motion } from "framer-motion";
import img from "../assets/rocket.svg";

export function Rocket() {
  return (
    <motion.img
      alt="rocket"
      src={img}
      style={{
        width: 230,
        height: 230,
      }}
      animate={{
        rotate: [45, 55, 45],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
}
