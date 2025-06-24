import { motion } from "framer-motion";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowsMove } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";

import { useOptionsValue } from "@/client/src/middle/recoil/options";

import { useRefs } from "../../hooks/useRefs";

const SelectionBtns = () => {
  const { selection } = useOptionsValue();
  const { selectionRefs } = useRefs();

  let top;
  let left;

  if (selection) {
    const { x, y, width, height } = selection;
    top = Math.min(y, y + height) - 50;
    left = Math.min(x, x + width);
  } else {
    left = -50;
    top = -50;
  }

  const buttons = [
    {
      icon: BsArrowsMove,
      label: "Move",
      gradient: "from-blue-500 to-indigo-600",
      hoverGradient: "from-blue-600 to-indigo-700",
      shadow: "shadow-blue-500/30",
      hoverShadow: "hover:shadow-blue-500/40",
      index: 0
    },
    {
      icon: FiCopy,
      label: "Copy",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "from-emerald-600 to-teal-700",
      shadow: "shadow-emerald-500/30",
      hoverShadow: "hover:shadow-emerald-500/40",
      index: 1
    },
    {
      icon: AiOutlineDelete,
      label: "Delete",
      gradient: "from-rose-500 to-pink-600",
      hoverGradient: "from-rose-600 to-pink-700",
      shadow: "shadow-rose-500/30",
      hoverShadow: "hover:shadow-rose-500/40",
      index: 2
    }
  ];

  return (
    <motion.div
      className="absolute top-0 left-0 z-50"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ 
        opacity: selection ? 1 : 0, 
        scale: selection ? 1 : 0.8,
        y: selection ? 0 : 10,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.3
        }
      }}
      exit={{ 
        opacity: 0, 
        scale: 0.8, 
        y: 10,
        transition: { duration: 0.2 }
      }}
    >
      {/* Background Container with Glass Effect */}
      <div className="relative flex items-center justify-center gap-3 p-2 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg shadow-xl ring-1 ring-black/5 dark:ring-white/10">
        
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-slate-700/50 dark:via-slate-600/50 dark:to-slate-700/50" />
        
        {buttons.map((button, index) => {
          const Icon = button.icon;
          return (
            <motion.button
              key={button.label}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-r ${button.gradient} p-3 text-white shadow-lg ${button.shadow} backdrop-blur-sm transition-all duration-300 ${button.hoverShadow} hover:shadow-xl`}
              ref={(ref) => {
                if (ref && selectionRefs.current) selectionRefs.current[button.index] = ref;
              }}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                transition: { 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }
              }}
              whileHover={{ 
                scale: 1.1,
                y: -3,
                rotate: index === 0 ? 45 : index === 1 ? 0 : 0,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              {/* Icon with enhanced animations */}
              <motion.div
                whileHover={
                  button.label === "Move" ? { rotate: 90 } :
                  button.label === "Copy" ? { scale: 1.2 } :
                  button.label === "Delete" ? { rotate: [0, -10, 10, 0] } :
                  {}
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Icon className="text-lg drop-shadow-sm" />
              </motion.div>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
              
              {/* Tooltip */}
              <motion.div 
                className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                initial={{ y: 5, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
              >
                {button.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-slate-900 dark:border-t-slate-100" />
              </motion.div>
              
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          );
        })}
        
        {/* Selection Indicator Line */}
        <motion.div
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          initial={{ width: 0 }}
          animate={{ 
            width: selection ? "100%" : "0%",
            transition: { delay: 0.4, duration: 0.3 }
          }}
        />
        
        {/* Corner Accent Dots */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-bl from-pink-400 to-rose-500 rounded-full opacity-60" />
        
        {/* Floating Animation Elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${15 + i * 35}%`,
              top: "-8px",
            }}
            animate={{
              y: [-2, -8, -2],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Connection Line to Selection */}
      {selection && (
        <motion.div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b from-slate-400 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ 
            scaleY: 1,
            transition: { delay: 0.5, duration: 0.3 }
          }}
        />
      )}
    </motion.div>
  );
};

export default SelectionBtns;