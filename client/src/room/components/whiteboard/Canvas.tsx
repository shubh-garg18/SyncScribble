import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { BsArrowsMove } from "react-icons/bs";

import { CANVAS_SIZE } from "@/client/src/middle/constants/canvasSize";
import { useViewportSize } from "@/client/src/middle/hooks/useViewportSize";
import { socket } from "@/client/src/middle/lib/socket";

import { useBoardPosition } from "../../hooks/useBoardPosition";
import { useCtx } from "../../hooks/useCtx";
import { useDraw } from "../../hooks/useDraw";
import { useMovesHandlers } from "../../hooks/useMovesHandlers";
import { useRefs } from "../../hooks/useRefs";
import { useSocketDraw } from "../../hooks/useSocketDraw";
import Background from "./Background";

const Canvas = () => {
  const { canvasRef, bgRef, undoRef, redoRef } = useRefs();
  const { width, height } = useViewportSize();
  const { x, y } = useBoardPosition();
  const ctx = useCtx();

  const [dragging, setDragging] = useState(true);

  const {
    handleEndDrawing,
    handleDraw,
    handleStartDrawing,
    drawing,
    clearOnYourMove,
  } = useDraw(dragging);
  useSocketDraw(drawing);

  const { handleUndo, handleRedo } = useMovesHandlers(clearOnYourMove);

  useEffect(() => {
    setDragging(false);
  }, []);

  // SETUP
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      setDragging(e.ctrlKey);
    };

    window.addEventListener("keyup", handleKey);
    window.addEventListener("keydown", handleKey);

    const undoBtn = undoRef.current;
    const redoBtn = redoRef.current;

    undoBtn?.addEventListener("click", handleUndo);
    redoBtn?.addEventListener("click", handleRedo);

    return () => {
      window.removeEventListener("keyup", handleKey);
      window.removeEventListener("keydown", handleKey);
      undoBtn?.removeEventListener("click", handleUndo);
      redoBtn?.removeEventListener("click", handleRedo);
    };
  }, [canvasRef, dragging, handleRedo, handleUndo, redoRef, undoRef]);

  useEffect(() => {
    if (ctx) socket.emit("joined_room");
  }, [ctx]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Enhanced Canvas with Visual Effects */}
      <motion.canvas
        // SETTINGS
        ref={canvasRef}
        width={CANVAS_SIZE.width}
        height={CANVAS_SIZE.height}
        className={`absolute top-0 z-10 rounded-lg transition-all duration-200 ${
          dragging 
            ? "cursor-move shadow-2xl shadow-blue-500/20 ring-2 ring-blue-400/30" 
            : "cursor-crosshair shadow-xl shadow-slate-300/40 hover:shadow-2xl hover:shadow-slate-400/30"
        }`}
        style={{ 
          x, 
          y,
          filter: dragging 
            ? "brightness(1.05) contrast(1.05)" 
            : "brightness(1.02) contrast(1.02)"
        }}
        // Enhanced drag animations
        drag={dragging}
        dragConstraints={{
          left: -(CANVAS_SIZE.width - width),
          right: 0,
          top: -(CANVAS_SIZE.height - height),
          bottom: 0,
        }}
        dragElastic={0.1}
        dragTransition={{ 
          power: 0.2, 
          timeConstant: 150,
          bounceStiffness: 300,
          bounceDamping: 20
        }}
        whileDrag={{
          scale: 0.98,
          rotate: 0.5,
          transition: { duration: 0.2 }
        }}
        // HANDLERS
        onMouseDown={(e) => handleStartDrawing(e.clientX, e.clientY)}
        onMouseUp={handleEndDrawing}
        onMouseMove={(e) => {
          handleDraw(e.clientX, e.clientY, e.shiftKey);
        }}
        onTouchStart={(e) =>
          handleStartDrawing(
            e.changedTouches[0].clientX,
            e.changedTouches[0].clientY
          )
        }
        onTouchEnd={handleEndDrawing}
        onTouchMove={(e) =>
          handleDraw(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
        }
      />
      
      <Background bgRef={bgRef} />
      {/* <MiniMap dragging={dragging} /> */}
      
      {/* Enhanced Drag Toggle Button */}
      <motion.button
        className={`absolute bottom-14 right-5 z-10 rounded-2xl md:bottom-5 p-4 text-lg font-medium shadow-lg backdrop-blur-sm transition-all duration-300 ${
          dragging 
            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-500/30 ring-2 ring-emerald-400/50" 
            : "bg-gradient-to-r from-slate-200 to-slate-300 text-slate-700 shadow-slate-400/30 hover:from-slate-300 hover:to-slate-400 dark:from-slate-700 dark:to-slate-800 dark:text-slate-200 dark:shadow-slate-600/30"
        }`}
        onClick={() => setDragging((prev) => !prev)}
        whileHover={{ 
          scale: 1.05,
          y: -2,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <motion.div
          animate={{ 
            rotate: dragging ? 45 : 0,
            scale: dragging ? 1.1 : 1
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <BsArrowsMove className="drop-shadow-sm" />
        </motion.div>
        
        {/* Status Indicator */}
        <motion.div
          className={`absolute -top-1 -right-1 h-3 w-3 rounded-full ${
            dragging ? "bg-emerald-300" : "bg-slate-400"
          }`}
          animate={{
            scale: dragging ? [1, 1.2, 1] : 1,
            opacity: dragging ? [0.8, 1, 0.8] : 0.6
          }}
          transition={{
            duration: dragging ? 1.5 : 0.3,
            repeat: dragging ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
      </motion.button>

      {/* Mode Indicator Tooltip */}
      <motion.div
        className={`absolute bottom-28 right-5 z-10 rounded-xl px-3 py-2 text-sm font-medium shadow-lg backdrop-blur-sm md:bottom-20 ${
          dragging
            ? "bg-emerald-500/90 text-white"
            : "bg-slate-700/90 text-slate-200 dark:bg-slate-200/90 dark:text-slate-700"
        }`}
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: { delay: 0.7, duration: 0.3 }
        }}
        exit={{ opacity: 0, scale: 0.8, y: 10 }}
      >
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${
            dragging ? "bg-emerald-300" : "bg-slate-400"
          }`} />
          {dragging ? "Pan Mode" : "Draw Mode"}
        </div>
        <div className="text-xs opacity-75 mt-1">
          {dragging ? "Hold Ctrl to toggle" : "Hold Ctrl to pan"}
        </div>
      </motion.div>

      {/* Subtle Corner Gradients for Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-transparent rounded-br-full" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-200/20 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-200/20 to-transparent rounded-tr-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-200/20 to-transparent rounded-tl-full" />
      </div>
    </div>
  );
};

export default Canvas;