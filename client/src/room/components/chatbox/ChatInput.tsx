import { FormEvent, useState } from "react";

import { motion } from "framer-motion";
import { AiOutlineSend } from "react-icons/ai";

import { socket } from "@/client/src/middle/lib/socket";

const ChatInput = () => {
  const [msg, setMsg] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (msg.trim()) {
      socket.emit("send_msg", msg);
      setMsg("");
    }
  };

  const isEmpty = !msg.trim();

  return (
    <form className="flex w-full items-center gap-3" onSubmit={handleSubmit}>
      {/* Input Container */}
      <div className="relative flex-1">
        {/* Glowing border effect */}
        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-sm opacity-0"
          animate={{
            opacity: isFocused ? 0.4 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Input field */}
        <div className="relative">
          <input
            className="w-full rounded-2xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm px-5 py-3 pr-4 text-slate-800 placeholder-slate-400 shadow-lg transition-all duration-300 focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:shadow-xl hover:border-slate-300 hover:shadow-md"
            placeholder="Type your message..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          
          {/* Character count indicator */}
          {msg.length > 0 && (
            <motion.div
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {msg.length}
            </motion.div>
          )}
        </div>
      </div>

      {/* Send Button */}
      <motion.button
        className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        type="submit"
        disabled={isEmpty}
        whileHover={{ scale: isEmpty ? 1 : 1.05 }}
        whileTap={{ scale: isEmpty ? 1 : 0.95 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
          animate={{
            background: [
              "linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234), rgb(6, 182, 212))",
              "linear-gradient(to right, rgb(147, 51, 234), rgb(6, 182, 212), rgb(59, 130, 246))",
              "linear-gradient(to right, rgb(6, 182, 212), rgb(59, 130, 246), rgb(147, 51, 234))",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Button content */}
        <div className="relative">
          {isEmpty ? (
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AiOutlineSend className="text-lg opacity-60" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.5 }
              }}
            >
              <AiOutlineSend className="text-lg" />
            </motion.div>
          )}
        </div>
        
        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-white/20"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
        />
      </motion.button>
      
      {/* Typing indicator dots */}
      {msg.length > 0 && (
        <motion.div
          className="absolute -top-8 left-4 flex space-x-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-blue-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </form>
  );
};

export default ChatInput;