import { motion } from "framer-motion";

export const Circles = () => {
  const circleBaseStyles =
    "absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full shadow-[0_8px_16px_rgb(0_0_0/0.4)]";

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          opacity: [0, 1, 0.5, 0],
          scale: 1,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 0,
        }}
        className={`${circleBaseStyles} bg-sky-500/[0.2]`}
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          opacity: [0, 1, 0.5, 0],
          scale: 1,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 2,
        }}
        className={`${circleBaseStyles} bg-sky-500/[0.08]`}
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          opacity: [0, 1, 0.5, 0],
          scale: 1,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 4,
        }}
        className={`${circleBaseStyles} bg-sky-500/[0.08]`}
      ></motion.div>
    </>
  );
};
