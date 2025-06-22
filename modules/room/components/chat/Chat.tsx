import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { BsFillChatFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { useList } from "react-use";

import { DEFAULT_EASE } from "@/common/constants/easings";
import { socket } from "@/common/lib/socket";
import { useRoom } from "@/common/recoil/room";

import ChatInput from "./ChatInput";
import Message from "./Message";

const Chat = () => {
  const room = useRoom();

  const msgList = useRef<HTMLDivElement>(null);

  const [newMsg, setNewMsg] = useState(false);
  const [opened, setOpened] = useState(false);
  const [msgs, handleMsgs] = useList<Message>([]);

  useEffect(() => {
    const handleNewMsg = (userId: string, msg: string) => {
      const user = room.users.get(userId);

      handleMsgs.push({
        userId,
        msg,
        id: msgs.length + 1,
        username: user?.name || "Anonymous",
        color: user?.color || "#000",
      });

      msgList.current?.scroll({ top: msgList.current?.scrollHeight });

      if (!opened) setNewMsg(true);
    };

    socket.on("new_msg", handleNewMsg);

    return () => {
      socket.off("new_msg", handleNewMsg);
    };
  }, [handleMsgs, msgs, opened, room.users]);

  return (
    <motion.div
      className="absolute bottom-0 z-50 flex h-[300px] w-full flex-col overflow-hidden sm:left-36 sm:w-[30rem]"
      animate={{ y: opened ? 0 : 260 }}
      transition={{ ease: DEFAULT_EASE, duration: 0.2 }}
    >
      {/* Glowing backdrop */}
      <div className="absolute -inset-2 bg-gradient-to-t from-blue-500/20 via-purple-500/10 to-transparent rounded-t-2xl blur-xl" />
      
      {/* Chat Header */}
      <motion.button
        className="relative flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-t-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-4 px-6 font-bold text-white shadow-2xl border-b border-white/10"
        onClick={() => {
          setOpened((prev) => !prev);
          setNewMsg(false);
        }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"
          animate={{
            background: [
              "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2))",
              "linear-gradient(to right, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))",
              "linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <div className="relative flex items-center gap-3">
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <BsFillChatFill className="text-xl text-blue-400" />
          </motion.div>
          
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Chat
          </span>
          
          {newMsg && (
            <motion.div
              className="relative"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-sm opacity-60" />
              <div className="relative rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                <motion.span
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  New!
                </motion.span>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          className="relative text-slate-300"
          animate={{ rotate: opened ? 0 : 180 }}
          transition={{ ease: DEFAULT_EASE, duration: 0.3 }}
        >
          <FaChevronDown className="text-lg" />
        </motion.div>
      </motion.button>
      
      {/* Chat Body */}
      <div className="relative flex flex-1 flex-col justify-between bg-gradient-to-b from-white via-slate-50 to-white backdrop-blur-md border-x border-b border-white/20 shadow-2xl">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.15)_1px,_transparent_0)] bg-[length:20px_20px]" />
        
        {/* Messages Container */}
        <div className="relative h-[190px] overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent hover:scrollbar-thumb-slate-400" ref={msgList}>
          {msgs.length === 0 ? (
            <motion.div
              className="flex flex-col items-center justify-center h-full text-slate-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl mb-2 opacity-50">💬</div>
              <p className="text-sm font-medium">No messages yet</p>
              <p className="text-xs text-slate-400">Start the conversation!</p>
            </motion.div>
          ) : (
            msgs.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
              >
                <Message {...msg} />
              </motion.div>
            ))
          )}
        </div>
        
        {/* Chat Input Container */}
        <div className="relative border-t border-slate-200 bg-gradient-to-r from-white via-slate-50 to-white p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
          <div className="relative">
            <ChatInput />
          </div>
        </div>
      </div>
      
      {/* Bottom glow effect */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-lg rounded-full" />
    </motion.div>
  );
};

export default Chat;