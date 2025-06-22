import { useEffect } from "react";

import { motion, useMotionValue } from "framer-motion";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import { DEFAULT_MOVE } from "@/common/constants/defaultMove";
import { getPos } from "@/common/lib/getPos";
import { socket } from "@/common/lib/socket";

import { useBoardPosition } from "../../hooks/useBoardPosition";
import { useMoveImage } from "../../hooks/useMoveImage";
import { useRefs } from "../../hooks/useRefs";

const MoveImage = () => {
  const { canvasRef } = useRefs();
  const { x, y } = useBoardPosition();
  const { moveImage, setMoveImage } = useMoveImage();

  const imageX = useMotionValue(moveImage.x || 50);
  const imageY = useMotionValue(moveImage.y || 50);

  useEffect(() => {
    if (moveImage.x) imageX.set(moveImage.x);
    else imageX.set(50);
    if (moveImage.y) imageY.set(moveImage.y);
    else imageY.set(50);
  }, [imageX, imageY, moveImage.x, moveImage.y]);

  const handlePlaceImage = () => {
    const [finalX, finalY] = [getPos(imageX.get(), x), getPos(imageY.get(), y)];

    const move: Move = {
      ...DEFAULT_MOVE,
      img: { base64: moveImage.base64 },
      path: [[finalX, finalY]],
      options: {
        ...DEFAULT_MOVE.options,
        selection: null,
        shape: "image",
      },
    };

    socket.emit("draw", move);

    setMoveImage({ base64: "" });
    imageX.set(50);
    imageY.set(50);
  };

  if (!moveImage.base64) return null;

  return (
    <motion.div
      drag
      dragConstraints={canvasRef}
      dragElastic={0.1}
      dragTransition={{ 
        power: 0.08, 
        timeConstant: 150,
        bounceStiffness: 400,
        bounceDamping: 25
      }}
      className="absolute top-0 z-20 cursor-grab active:cursor-grabbing"
      style={{ x: imageX, y: imageY }}
      initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        rotate: 0,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.5
        }
      }}
      whileDrag={{
        scale: 1.05,
        rotate: 2,
        filter: "brightness(1.1) contrast(1.05)",
        transition: { duration: 0.2 }
      }}
      exit={{
        scale: 0.8,
        opacity: 0,
        rotate: 5,
        transition: { duration: 0.3 }
      }}
    >
      {/* Enhanced Action Buttons */}
      <motion.div 
        className="absolute bottom-full mb-4 flex gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.3, duration: 0.4 }
        }}
      >
        {/* Confirm Button */}
        <motion.button
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 p-3 text-white shadow-lg shadow-emerald-500/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40"
          onClick={handlePlaceImage}
          whileHover={{ 
            scale: 1.1,
            y: -2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <AiOutlineCheck className="text-lg" />
          </motion.div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
          
          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Place Image
          </div>
        </motion.button>

        {/* Cancel Button */}
        <motion.button
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-rose-500 to-pink-500 p-3 text-white shadow-lg shadow-rose-500/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/40"
          onClick={() => setMoveImage({ base64: "" })}
          whileHover={{ 
            scale: 1.1,
            y: -2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
        >
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <AiOutlineClose className="text-lg" />
          </motion.div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
          
          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Cancel
          </div>
        </motion.button>
      </motion.div>

      {/* Enhanced Image Container */}
      <motion.div
        className="relative overflow-hidden rounded-xl shadow-2xl ring-4 ring-white/50 backdrop-blur-sm hover:ring-8 hover:ring-blue-400/30 transition-all duration-300"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {/* Image with enhanced styling */}
        <img
          className="pointer-events-none max-w-xs max-h-64 object-contain rounded-xl"
          alt="image to place"
          src={moveImage.base64}
          style={{
            filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))"
          }}
        />
        
        {/* Overlay Effects */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
        
        {/* Corner Accent */}
        <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse" />
        
        {/* Border Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>

      {/* Drag Indicator */}
      <motion.div
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-slate-800/80 text-white text-xs rounded-full backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { delay: 0.5, duration: 0.3 }
        }}
      >
        <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
        <span className="font-medium">Drag to position</span>
        <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
      </motion.div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [-5, -15, -5],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default MoveImage;