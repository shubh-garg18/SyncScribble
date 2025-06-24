import { useRef } from "react";

import { motion } from "framer-motion";
import { useInterval, useMouse } from "react-use";

import { getPos } from "@/client/src/middle/lib/getPos";
import { socket } from "@/client/src/middle/lib/socket";

import { useBoardPosition } from "../../hooks/useBoardPosition";

const MousePosition = () => {
  const { x, y } = useBoardPosition();

  const prevPosition = useRef({ x: 0, y: 0 });

  const ref = useRef<HTMLDivElement>(null);

  const { docX, docY } = useMouse(ref);

  const touchDevice = window.matchMedia("(pointer: coarse)").matches;

  useInterval(() => {
    if (
      (prevPosition.current.x !== docX || prevPosition.current.y !== docY) &&
      !touchDevice
    ) {
      socket.emit("mouse_move", getPos(docX, x), getPos(docY, y));
      prevPosition.current = { x: docX, y: docY };
    }
  }, 150);

  if (touchDevice) return null;

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none absolute top-0 left-0 z-50 select-none"
      animate={{ x: docX + 15, y: docY + 15 }}
      transition={{ duration: 0.05, ease: "linear" }}
    >
      {/* Glowing backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-lg blur-sm" />
      
      {/* Main coordinate display */}
      <div className="relative bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10 shadow-2xl">
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 rounded-lg blur-[1px] -z-10" />
        
        {/* Coordinate text */}
        <div className="flex items-center space-x-1 text-xs font-mono">
          <span className="text-purple-300 font-semibold">X:</span>
          <span className="text-white font-bold min-w-[2rem] text-right">
            {getPos(docX, x).toFixed(0)}
          </span>
          <span className="text-slate-400 mx-1">|</span>
          <span className="text-cyan-300 font-semibold">Y:</span>
          <span className="text-white font-bold min-w-[2rem] text-right">
            {getPos(docY, y).toFixed(0)}
          </span>
        </div>
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-lg pointer-events-none" />
      </div>
      
      {/* Cursor indicator dot */}
      <motion.div
        className="absolute -top-2 -left-2 w-2 h-2 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full shadow-lg"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Trailing sparkle effect */}
      <motion.div
        className="absolute -top-1 -left-1 w-1 h-1 bg-white/60 rounded-full"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.5,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
};

export default MousePosition;