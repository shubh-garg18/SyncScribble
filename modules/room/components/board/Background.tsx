import { RefObject, useEffect } from "react";
import { motion } from "framer-motion";

import { CANVAS_SIZE } from "@/common/constants/canvasSize";
import { useBackground } from "@/common/recoil/background";

import { useBoardPosition } from "../../hooks/useBoardPosition";

const Background = ({ bgRef }: { bgRef: RefObject<HTMLCanvasElement> }) => {
  const bg = useBackground();
  const { x, y } = useBoardPosition();

  useEffect(() => {
    const ctx = bgRef.current?.getContext("2d");

    if (ctx) {
      // Enhanced color schemes
      const darkTheme = {
        background: "#0a0b14", // Deep navy blue
        body: "#0f1018", // Slightly darker for body
        gridLines: "#1e293b", // Slate blue for grid
        accentLines: "#334155" // Lighter slate for major grid lines
      };

      const lightTheme = {
        background: "#fefefe", // Pure white with subtle warmth
        body: "#f8fafc", // Light blue-gray for body
        gridLines: "#e2e8f0", // Light gray-blue for grid
        accentLines: "#cbd5e1" // Slightly darker for major grid lines
      };

      const theme = bg.mode === "dark" ? darkTheme : lightTheme;

      // Create gradient background for more visual appeal
      if (bg.mode === "dark") {
        const gradient = ctx.createLinearGradient(0, 0, CANVAS_SIZE.width, CANVAS_SIZE.height);
        gradient.addColorStop(0, "#0a0b14");
        gradient.addColorStop(0.5, "#0f1219");
        gradient.addColorStop(1, "#141827");
        ctx.fillStyle = gradient;
      } else {
        const gradient = ctx.createRadialGradient(
          CANVAS_SIZE.width / 2, 
          CANVAS_SIZE.height / 2, 
          0,
          CANVAS_SIZE.width / 2, 
          CANVAS_SIZE.height / 2, 
          Math.max(CANVAS_SIZE.width, CANVAS_SIZE.height) / 2
        );
        gradient.addColorStop(0, "#ffffff");
        gradient.addColorStop(0.7, "#f8fafc");
        gradient.addColorStop(1, "#f1f5f9");
        ctx.fillStyle = gradient;
      }
      
      ctx.fillRect(0, 0, CANVAS_SIZE.width, CANVAS_SIZE.height);

      // Set body background with smooth transition
      document.body.style.backgroundColor = theme.body;
      document.body.style.transition = "background-color 0.3s ease";

      if (bg.lines) {
        const gridSize = 25;
        
        // Draw subtle background pattern first
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = theme.gridLines;
        ctx.lineWidth = 0.5;
        
        // Fine grid pattern
        for (let i = 0; i < CANVAS_SIZE.height; i += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(CANVAS_SIZE.width, i);
          ctx.stroke();
        }

        for (let i = 0; i < CANVAS_SIZE.width; i += gridSize) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, CANVAS_SIZE.height);
          ctx.stroke();
        }
        
        ctx.restore();

        // Draw accent lines every 5th grid line
        ctx.save();
        ctx.globalAlpha = 0.6;
        ctx.strokeStyle = theme.accentLines;
        ctx.lineWidth = 1;
        
        for (let i = 0; i < CANVAS_SIZE.height; i += gridSize * 5) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(CANVAS_SIZE.width, i);
          ctx.stroke();
        }

        for (let i = 0; i < CANVAS_SIZE.width; i += gridSize * 5) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, CANVAS_SIZE.height);
          ctx.stroke();
        }
        
        ctx.restore();

        // Add subtle dots at major intersections for premium feel
        ctx.save();
        ctx.fillStyle = theme.accentLines;
        ctx.globalAlpha = 0.4;
        
        for (let x = 0; x < CANVAS_SIZE.width; x += gridSize * 5) {
          for (let y = 0; y < CANVAS_SIZE.height; y += gridSize * 5) {
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        
        ctx.restore();
      } else {
        // Even without grid lines, add a subtle texture
        ctx.save();
        ctx.globalAlpha = 0.02;
        ctx.fillStyle = bg.mode === "dark" ? "#ffffff" : "#000000";
        
        // Create subtle noise pattern
        for (let i = 0; i < 1000; i++) {
          const x = Math.random() * CANVAS_SIZE.width;
          const y = Math.random() * CANVAS_SIZE.height;
          ctx.fillRect(x, y, 1, 1);
        }
        
        ctx.restore();
      }
    }
  }, [bgRef, bg]);

  return (
    <motion.canvas
      ref={bgRef}
      width={CANVAS_SIZE.width}
      height={CANVAS_SIZE.height}
      className={`absolute top-0 transition-all duration-300 ${
        bg.mode === "dark" 
          ? "shadow-2xl shadow-blue-900/20" 
          : "shadow-lg shadow-slate-200/50"
      }`}
      style={{ 
        x, 
        y,
        filter: bg.mode === "dark" 
          ? "contrast(1.05) brightness(1.02)" 
          : "contrast(1.02) brightness(1.01)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
};

export default Background;