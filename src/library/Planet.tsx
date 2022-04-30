import { motion } from "framer-motion";
import React from "react";

export function Planet({
  img,
  size,
  position,
}: {
  img: string;
  position: "left" | "right";
  size: "large" | "small";
}): JSX.Element {
  const offset = 600;
  const [planetSize, setSize] = React.useState<number>();

  React.useEffect(() => {
    const maxSize = size === "large" ? 480 : 300;
    const minSize = 250;
    setSize(Math.random() * maxSize + minSize);
  }, [size]);

  return (
    <motion.img
      src={img}
      alt="Planet"
      style={{
        position: "absolute",
        right: position === "right" ? 0 : "auto",
        left: position === "left" ? 0 : "auto",
        bottom: 0,
        width: planetSize,
        height: planetSize,
      }}
      variants={{
        hidden: {
          rotate: -12,
          x: position === "right" ? offset : -offset,
        },
        show: {
          x: position === "right" ? 90 : -100,
          rotate: 0,
        },
        exit: {
          rotate: -12,
          x: position === "right" ? offset : -offset,
        },
      }}
    />
  );
}
