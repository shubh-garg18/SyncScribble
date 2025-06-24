import { motion, AnimatePresence } from "framer-motion";

import { socket } from "@/client/src/middle/lib/socket";
import { useRoom } from "@/client/src/middle/recoil/room";

import UserMouse from "./UserMouse";

const MousesRenderer = () => {
  const { users } = useRoom();

  const otherUsers = [...users.keys()].filter(userId => userId !== socket.id);

  return (
    <div className="pointer-events-none absolute inset-0 z-40">
      {/* Subtle background effect when multiple users are present */}
      <AnimatePresence>
        {otherUsers.length > 0 && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      {/* User activity indicator */}
      <AnimatePresence>
        {otherUsers.length > 0 && (
          <motion.div
            className="absolute top-4 left-4 z-50 pointer-events-auto"
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glowing backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl blur-lg" />
              
              {/* Activity indicator */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 border border-white/20 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {otherUsers.slice(0, 3).map((userId, index) => {
                      const user = users.get(userId);
                      return (
                        <motion.div
                          key={userId}
                          className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: user?.color || '#6B7280' }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                        />
                      );
                    })}
                    {otherUsers.length > 3 && (
                      <motion.div
                        className="w-4 h-4 rounded-full bg-slate-400 border-2 border-white shadow-sm flex items-center justify-center"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="text-xs text-white font-bold">+{otherUsers.length - 3}</span>
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-700">
                      {otherUsers.length} Active
                    </span>
                    <div className="flex items-center gap-1">
                      <motion.div
                        className="w-1.5 h-1.5 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <span className="text-xs text-slate-500">Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User cursors with enhanced animations */}
      <AnimatePresence>
        {otherUsers.map((userId, index) => {
          const user = users.get(userId);
          
          return (
            <motion.div
              key={userId}
              initial={{ 
                opacity: 0, 
                scale: 0.5,
                rotate: -180,
                filter: "blur(4px)"
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0,
                filter: "blur(0px)"
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.3,
                rotate: 180,
                filter: "blur(4px)"
              }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              className="relative"
            >
              <UserMouse userId={userId} />
              
              {/* Subtle trailing effect */}
              <motion.div
                className="absolute -inset-2 rounded-full opacity-20"
                style={{
                  background: `radial-gradient(circle, ${user?.color || '#6B7280'}40 0%, transparent 70%)`
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.1, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Collaborative workspace indicator */}
      <AnimatePresence>
        {otherUsers.length > 2 && (
          <motion.div
            className="absolute top-4 right-4 z-50 pointer-events-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-xl blur-lg" />
              <div className="relative bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 border border-white/20 shadow-xl">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="text-xs font-semibold text-slate-700">
                    Collaborative Mode
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Connection quality indicator */}
      <motion.div
        className="absolute bottom-4 left-4 z-50 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: otherUsers.length > 0 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg blur-sm" />
          <div className="relative bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/10">
            <div className="flex items-center gap-1">
              <div className="flex space-x-0.5">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-green-500 rounded-full"
                    animate={{ 
                      height: [2, 6, 2],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              <span className="text-xs text-white font-medium ml-1">
                {otherUsers.length > 0 ? 'Connected' : 'Solo'}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MousesRenderer;