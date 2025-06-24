import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { socket } from "@/client/src/middle/lib/socket";
import { useModal } from "@/client/src/middle/recoil/modal";
import { useSetRoomId } from "@/client/src/middle/recoil/room";
import NotFoundModal from "@/client/src/home/model/NotFound.";

const NameInput = () => {
  const setRoomId = useSetRoomId();
  const { openModal } = useModal();

  const [name, setName] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const [roomExists, setRoomExists] = useState<boolean | null>(null);

  const router = useRouter();
  const roomId = (router.query.roomId || "").toString();

  useEffect(() => {
    if (!roomId) return;

    socket.emit("check_room", roomId);

    socket.on("room_exists", (exists) => {
      setRoomExists(exists);
      if (!exists) {
        setTimeout(() => router.push("/"), 1500); // Give user time to see the message
      }
    });

    // eslint-disable-next-line consistent-return
    return () => {
      socket.off("room_exists");
    };
  }, [roomId, router]);

  useEffect(() => {
    const handleJoined = (roomIdFromServer: string, failed?: boolean) => {
      setIsJoining(false);
      if (failed) {
        router.push("/");
        openModal(<NotFoundModal id={roomIdFromServer} />);
      } else setRoomId(roomIdFromServer);
    };

    socket.on("joined", handleJoined);

    return () => {
      socket.off("joined", handleJoined);
    };
  }, [openModal, router, setRoomId]);

  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    setIsJoining(true);
    socket.emit("join_room", roomId, name);
  };

  // Show loading state while checking room
  if (roomExists === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="text-center animate-fade-in-up">
            <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-slate-200 mb-2">Checking room...</h2>
            <p className="text-slate-400">Please wait while we verify the room exists</p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state if room doesn't exist
  if (roomExists === false) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="text-center animate-fade-in-up">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
              <div className="relative w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">!</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-200 mb-2">Room Not Found</h2>
            <p className="text-slate-400 mb-4">This room doesn't exist or has been deleted</p>
            <p className="text-slate-500 text-sm">Redirecting you back to home...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Digiboard
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl -z-10"></div>
          </div>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-4">
            Real-time whiteboard collaboration
          </p>
          
          {/* Room Info Card */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-lg">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="text-left">
              <p className="text-sm text-slate-400">Joining Room</p>
              <p className="text-lg font-mono text-blue-400 font-semibold">{roomId}</p>
            </div>
          </div>
        </div>

        {/* Name Input Form */}
        <div className="w-full max-w-sm">
          <form onSubmit={handleJoinRoom} className="floating-panel space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Input Section */}
            <div className="space-y-3">
              <label htmlFor="name-input" className="block text-sm font-semibold text-slate-200 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                Enter your name
              </label>
              <div className="relative">
                <input
                  id="name-input"
                  className="input w-full pl-12 pr-12 text-lg"
                  placeholder="Your creative name..."
                  value={name}
                  onChange={(e) => setName(e.target.value.slice(0, 15))}
                  maxLength={15}
                  disabled={isJoining}
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                  👤
                </div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-slate-500">
                  {name.length}/15
                </div>
              </div>
            </div>

            {/* Join Button */}
            <button 
              type="submit" 
              disabled={!name.trim() || isJoining}
              className="btn btn-primary w-full text-lg font-semibold relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isJoining ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Joining Room...
                </div>
              ) : (
                <>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Enter Room
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </>
              )}
            </button>

            {/* Back Button */}
            <button
              type="button"
              onClick={() => router.push("/")}
              disabled={isJoining}
              className="btn w-full text-sm font-medium border-slate-600 hover:border-slate-500 text-slate-300 hover:text-slate-200 disabled:opacity-50"
            >
              ← Back to Home
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="mt-12 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-400 text-sm">ℹ️</span>
              </div>
              <div className="text-slate-400 text-sm leading-relaxed">
                <p className="font-medium text-slate-300 mb-2">Almost there!</p>
                <p>Just enter your name and you'll join the collaborative whiteboard. Your name will be visible to other participants in the room.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-slate-500 text-sm">
            Ready to collaborate? ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default NameInput;