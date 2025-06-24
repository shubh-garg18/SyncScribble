import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { BsCursorFill } from "react-icons/bs";

import { socket } from "@/client/src/middle/lib/socket";
import { useRoom } from "@/client/src/middle/recoil/room";

import { useBoardPosition } from "../../hooks/useBoardPosition";

const UserMouse = ({ userId }: { userId: string }) => {
  const { users } = useRoom();
  const boardPos = useBoardPosition();

  const [msg, setMsg] = useState("");
  const [x, setX] = useState(boardPos.x.get());
  const [y, setY] = useState(boardPos.y.get());
  const [pos, setPos] = useState({ x: -1, y: -1 });
  const [isActive, setIsActive] = useState(false);

  const userColor = users.get(userId)?.color || "#3B82F6";
  const userName = users.get(userId)?.name || "Anonymous";

  useEffect(() => {
    socket.on("mouse_moved", (newX, newY, socketIdMoved) => {
      if (socketIdMoved === userId) {
        setPos({ x: newX, y: newY });
        setIsActive(true);
        
        // Auto-hide after inactivity
        setTimeout(() => setIsActive(false), 2000);
      }
    });

    const handleNewMsg = (msgUserId: string, newMsg: string) => {
      if (msgUserId === userId) {
        setMsg(newMsg);
        setIsActive(true);

        setTimeout(() => {
          setMsg("");
        }, 3000);
      }
    };
    socket.on("new_msg", handleNewMsg);

    return () => {
      socket.off("mouse_moved");
      socket.off("new_msg", handleNewMsg);
    };
  }, [userId]);

  useEffect(() => {
    const unsubscribe = boardPos.x.onChange(setX);
    return unsubscribe;
  }, [boardPos.x]);

  useEffect(() => {
    const unsubscribe = boardPos.y.onChange(setY);
    return unsubscribe;
  }, [boardPos.y]);

  return (
    <motion.div
      className={`pointer-events-none absolute top-0 left-0 z-20 ${
        pos.x === -1 && "hidden"
      }`}
      style={{ color: userColor }}
      animate={{ 
        x: pos.x + x, 
        y: pos.y + y,
        scale: isActive ? 1 : 0.8,
        opacity: isActive ? 1 : 0.7
      }}
      transition={{ 
        x: { duration: 0.15, ease: "easeOut" },
        y: { duration: 0.15, ease: "easeOut" },
        scale: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.3, ease: "easeInOut" }
      }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ 
        scale: 1, 
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      {/* Enhanced Cursor with Glow Effect */}
      <motion.div 
        className="relative"
        animate={{ 
          rotate: isActive ? 0 : -5,
          scale: isActive ? 1.1 : 1
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {/* Cursor Glow */}
        <div 
          className="absolute inset-0 rounded-full blur-sm opacity-60"
          style={{ 
            backgroundColor: userColor,
            filter: `drop-shadow(0 0 8px ${userColor}40)`
          }}
        />
        
        {/* Main Cursor */}
        <BsCursorFill 
          className="-rotate-90 relative z-10 text-xl drop-shadow-lg" 
          style={{ 
            filter: `drop-shadow(0 2px 4px ${userColor}30)`
          }}
        />
        
        {/* Cursor Trail Effect */}
        <motion.div
          className="absolute -inset-1 rounded-full opacity-30"
          style={{ backgroundColor: userColor }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Enhanced Message Bubble */}
      {msg && (
        <motion.div
          className="absolute top-full left-6 z-30"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { 
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.8, 
            y: -10,
            transition: { duration: 0.2 }
          }}
        >
          {/* Message Container */}
          <div className="relative max-w-xs">
            {/* Message Background with Glassmorphism */}
            <div 
              className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900/95 to-slate-800/95 dark:from-slate-100/95 dark:to-slate-200/95 px-4 py-2 shadow-xl backdrop-blur-lg ring-1 ring-white/10 dark:ring-black/10"
              style={{
                borderLeft: `3px solid ${userColor}`,
                boxShadow: `0 8px 32px ${userColor}20, 0 4px 16px rgba(0,0,0,0.2)`
              }}
            >
              {/* Message Text */}
              <p className="text-sm font-medium text-white dark:text-slate-800 max-h-20 max-w-[15rem] overflow-hidden text-ellipsis leading-relaxed">
                {msg}
              </p>
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>
            
            {/* Speech Bubble Tail */}
            <div 
              className="absolute -top-2 left-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent"
              style={{ borderBottomColor: userColor }}
            />
            <div className="absolute -top-1 left-5 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-slate-900/95 dark:border-b-slate-100/95" />
            
            {/* Floating Animation Dots */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full opacity-60"
                style={{ 
                  backgroundColor: userColor,
                  right: `${5 + i * 15}px`,
                  top: "-6px"
                }}
                animate={{
                  y: [-2, -6, -2],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Enhanced User Name Label */}
      <motion.div
        className="absolute top-6 left-2 z-20"
        initial={{ opacity: 0, x: -10 }}
        animate={{ 
          opacity: isActive ? 1 : 0.7,
          x: 0,
          scale: isActive ? 1 : 0.9
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Name Background */}
        <div 
          className="relative overflow-hidden rounded-lg px-3 py-1 backdrop-blur-sm shadow-lg ring-1 ring-white/20"
          style={{
            backgroundColor: `${userColor}20`,
            border: `1px solid ${userColor}40`
          }}
        >
          {/* Name Text */}
          <p 
            className="text-sm font-semibold drop-shadow-sm"
            style={{ color: userColor }}
          >
            {userName}
          </p>
          
          {/* Background Gradient */}
          <div 
            className="absolute inset-0 opacity-20 rounded-lg"
            style={{
              background: `linear-gradient(45deg, ${userColor}30, transparent)`
            }}
          />
          
          {/* Active Indicator */}
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
            style={{ backgroundColor: userColor }}
            animate={{
              scale: isActive ? [1, 1.3, 1] : 1,
              opacity: isActive ? [0.7, 1, 0.7] : 0.5
            }}
            transition={{
              duration: isActive ? 1.5 : 0.3,
              repeat: isActive ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Ripple Effect on Activity */}
      <motion.div
        className="absolute -inset-4 rounded-full border-2 opacity-0"
        style={{ borderColor: userColor }}
        animate={isActive ? {
          scale: [1, 2, 1],
          opacity: [0.6, 0, 0.6]
        } : {}}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
      />
    </motion.div>
  );
};

export default UserMouse;