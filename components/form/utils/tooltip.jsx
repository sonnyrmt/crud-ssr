import { motion } from "framer-motion";

const tooltipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const Tooltip = ({ text = "Required Field", showTooltip }) => {
  return (
    <motion.div
      className="absolute -top-4 pointer-events-none selection:bg-none left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm max-w-48 w-max  p-1 rounded-lg bg-zinc-900/50 border-zinc-800 border-[1px]"
      initial="hidden"
      animate={showTooltip ? "visible" : "hidden"}
      variants={tooltipVariants}
    >
      {text}
    </motion.div>
  );
};
