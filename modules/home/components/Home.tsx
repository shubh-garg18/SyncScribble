import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { socket } from "@/common/lib/socket";
import { useModal } from "@/common/recoil/modal";
import { useSetRoomId } from "@/common/recoil/room";

import NotFoundModal from "../modals/NotFound";

const Home = () => {
  const { openModal } = useModal();
  const setAtomRoomId = useSetRoomId();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Remove the white background since we want our dark theme
    document.body.style.backgroundColor = "";
  }, []);

  useEffect(() => {
    socket.on("created", (roomIdFromServer) => {
      setAtomRoomId(roomIdFromServer);
      setIsLoading(false);
      router.push(roomIdFromServer);
    });

    const handleJoinedRoom = (roomIdFromServer: string, failed?: boolean) => {
      setIsConnecting(false);
      if (!failed) {
        setAtomRoomId(roomIdFromServer);
        router.push(roomIdFromServer);
      } else {
        openModal(<NotFoundModal id={roomId} />);
      }
    };

    socket.on("joined", handleJoinedRoom);

    return () => {
      socket.off("created");
      socket.off("joined", handleJoinedRoom);
    };
  }, [openModal, roomId, router, setAtomRoomId]);

  useEffect(() => {
    socket.emit("leave_room");
    setAtomRoomId("");
  }, [setAtomRoomId]);

  const handleCreateRoom = () => {
    if (!username.trim()) return;
    setIsLoading(true);
    socket.emit("create_room", username);
  };

  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!roomId.trim() || !username.trim()) return;
    setIsConnecting(true);
    socket.emit("join_room", roomId, username);
  };

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
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative inline-block mb-6">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Digiboard
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl -z-10"></div>
          </div>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Create, collaborate, and bring your ideas to life on the most beautiful real-time whiteboard
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-slate-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live collaboration enabled</span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="w-full max-w-md">
          <div className="floating-panel space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Username Input */}
            <div className="space-y-3">
              <label htmlFor="username" className="block text-sm font-semibold text-slate-200 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                Enter your name
              </label>
              <div className="relative">
                <input
                  id="username"
                  className="input w-full pl-12 pr-4 text-lg"
                  placeholder="Your creative name..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value.slice(0, 15))}
                  maxLength={15}
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                  👤
                </div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-slate-500">
                  {username.length}/15
                </div>
              </div>
            </div>

            {/* Decorative Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-slate-900 px-4 py-2 rounded-full border border-slate-700">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Join Room Section */}
            <form onSubmit={handleJoinRoom} className="space-y-4">
              <div className="space-y-3">
                <label htmlFor="room-id" className="block text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <div className="w-1 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                  Join existing room
                </label>
                <div className="relative">
                  <input
                    id="room-id"
                    className="input w-full pl-12 pr-4 text-lg"
                    placeholder="Room ID..."
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                    🔗
                  </div>
                </div>
              </div>
              <button 
                type="submit" 
                disabled={!roomId.trim() || !username.trim() || isConnecting}
                className="btn btn-primary w-full text-lg font-semibold relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isConnecting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Connecting...
                  </div>
                ) : (
                  <>
                    <span className="relative z-10">Join Room</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                )}
              </button>
            </form>

            {/* OR Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-slate-900 px-6 py-1 text-slate-400 text-sm font-medium rounded-full border border-slate-700">
                  or
                </span>
              </div>
            </div>

            {/* Create Room Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-4 bg-gradient-to-b from-pink-400 to-orange-400 rounded-full"></div>
                <h3 className="text-sm font-semibold text-slate-200">Create new room</h3>
              </div>
              <button 
                onClick={handleCreateRoom}
                disabled={!username.trim() || isLoading}
                className="btn w-full text-lg font-semibold relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-500 hover:to-orange-500 border-pink-500/50 hover:border-pink-400/50 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Creating...
                  </div>
                ) : (
                  <>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      ✨ Create New Room
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
              <span className="text-xl">⚡</span>
            </div>
            <h4 className="font-semibold text-slate-200 mb-2">Real-time</h4>
            <p className="text-sm text-slate-400">Instant collaboration with zero lag</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
              <span className="text-xl">🎨</span>
            </div>
            <h4 className="font-semibold text-slate-200 mb-2">Beautiful</h4>
            <p className="text-sm text-slate-400">Stunning interface that inspires creativity</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-500/30">
              <span className="text-xl">🚀</span>
            </div>
            <h4 className="font-semibold text-slate-200 mb-2">Fast</h4>
            <p className="text-sm text-slate-400">Lightning-fast performance for smooth drawing</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-slate-500 text-sm">
            Made with ❤️ for creative minds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;