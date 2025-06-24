import { motion } from "framer-motion";

import { socket } from "@/client/src/middle/lib/socket";

const Message = ({ userId, msg, username, color }: Message) => {
  const me = socket.id === userId;

  return (
    <motion.div
      className={`group my-3 flex gap-3 ${me ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
    >
      <div className={`flex max-w-[80%] ${me ? "flex-row-reverse" : "flex-row"} items-end gap-2`}>
        {/* Avatar */}
        {!me && (
          <motion.div
            className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full shadow-lg"
            style={{ 
              backgroundColor: color,
              boxShadow: `0 0 0 2px ${color}20, 0 4px 12px ${color}30`
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <span className="text-xs font-bold text-white">
              {username.charAt(0).toUpperCase()}
            </span>
            
            {/* Online indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-white shadow-sm">
              <motion.div
                className="h-full w-full rounded-full bg-green-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}

        {/* Message Bubble */}
        <div className={`flex flex-col ${me ? "items-end" : "items-start"}`}>
          {/* Username (for other users) */}
          {!me && (
            <motion.div
              className="mb-1 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span
                className="text-xs font-bold opacity-80"
                style={{ color }}
              >
                {username}
              </span>
              <div className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="text-xs text-slate-400">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </motion.div>
          )}

          {/* Message Content */}
          <motion.div
            className={`relative max-w-full rounded-2xl px-4 py-2.5 shadow-lg ${
              me
                ? "rounded-br-md bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white"
                : "rounded-bl-md bg-white border border-slate-200 text-slate-800"
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Message background effects */}
            {me ? (
              <>
                {/* Animated gradient for own messages */}
                <motion.div
                  className="absolute inset-0 rounded-2xl rounded-br-md bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <div className="relative">
                  <p className="text-sm font-medium leading-relaxed break-words">
                    {msg}
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Subtle hover effect for other messages */}
                <motion.div
                  className="absolute inset-0 rounded-2xl rounded-bl-md bg-gradient-to-r from-slate-50 to-blue-50 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <div className="relative">
                  <p className="text-sm leading-relaxed break-words">
                    {msg}
                  </p>
                </div>
              </>
            )}

            {/* Message tail */}
            <div
              className={`absolute bottom-0 h-3 w-3 ${
                me
                  ? "-right-1 bg-gradient-to-br from-blue-600 to-cyan-600"
                  : "-left-1 bg-white border-l border-b border-slate-200"
              } rotate-45 transform`}
            />
          </motion.div>

          {/* Timestamp for own messages */}
          {me && (
            <motion.div
              className="mt-1 text-xs text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </motion.div>
          )}
        </div>

        {/* Own avatar */}
        {me && (
          <motion.div
            className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <span className="text-xs font-bold text-white">
              You
            </span>
            
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-cyan-500/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        )}
      </div>

      {/* Message reactions placeholder */}
      <motion.div
        className="absolute -bottom-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex space-x-1">
          {/* Could add reaction buttons here */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Message;