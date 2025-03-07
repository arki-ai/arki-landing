import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="relative h-24 bg-[#0A1525] overflow-hidden">
      {/* Línea divisoria con gradiente */}
      <div className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Elemento decorativo central */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <motion.div
          className="relative h-10 w-10 rounded-full border border-white/10 bg-[#0A1525]"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(2, 129, 239, 0)",
              "0 0 0 8px rgba(2, 129, 239, 0.1)",
              "0 0 0 0 rgba(2, 129, 239, 0)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-2 rounded-full bg-arkiblue-600/20"></div>
          <div className="absolute inset-3 rounded-full bg-arkiblue-600/40"></div>
          <div className="absolute inset-4 rounded-full bg-arkiblue-600"></div>
        </motion.div>
      </div>

      {/* Partículas decorativas */}
      <div className="absolute left-1/4 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-blue-400/30"></div>
      <div className="absolute left-1/3 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-orange-400/30"></div>
      <div className="absolute right-1/4 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-blue-400/30"></div>
      <div className="absolute right-1/3 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-purple-400/30"></div>
    </div>
  );
};

export default SectionDivider;
