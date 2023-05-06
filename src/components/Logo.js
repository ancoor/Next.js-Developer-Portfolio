import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion.div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border broder-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(231, 76, 60, 1)", // red
            "rgba(41, 128, 185, 1)", // blue
            "rgba(241, 196, 15, 1)", // yellow
            "rgba(131,58,180,1)", // purple,
            "#121212",
          ],
          transition: { duration: 2, repeat: Infinity },
        }}
      >
        AB
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
