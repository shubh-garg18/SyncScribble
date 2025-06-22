import { AiOutlineClose } from "react-icons/ai";

import { useModal } from "@/common/recoil/modal";

const NotFoundModal = ({ id }: { id: string }) => {
  const { closeModal } = useModal();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
      <div className="relative flex flex-col items-center rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700/50 p-8 max-w-md w-full shadow-2xl shadow-black/25 animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={closeModal} 
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <AiOutlineClose size={20} />
        </button>

        {/* Error Icon */}
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 relative">
          <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
          <div className="relative w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">!</span>
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center space-y-4 mb-6">
          <h2 className="text-xl font-bold text-slate-200 leading-tight">
            Room Not Found
          </h2>
          
          <div className="space-y-2">
            <p className="text-slate-300 font-medium">
              Room <span className="px-2 py-1 bg-slate-800 rounded-md font-mono text-blue-400 border border-slate-700">"{id}"</span> doesn't exist or is full
            </p>
            <p className="text-slate-400 text-sm">
              The room may have been deleted or reached its participant limit.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            onClick={closeModal}
            className="btn btn-primary flex-1 text-sm font-semibold relative overflow-hidden group"
          >
            <span className="relative z-10">Try Again</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => {
              closeModal();
              // Could add logic to create new room here
            }}
            className="btn flex-1 text-sm font-semibold border-slate-600 hover:border-slate-500 text-slate-300 hover:text-slate-200"
          >
            Create New Room
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 w-full">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-400 text-xs">💡</span>
            </div>
            <div className="text-slate-400 text-xs leading-relaxed">
              <p className="font-medium text-slate-300 mb-1">Tips:</p>
              <ul className="space-y-1">
                <li>• Double-check the room ID for typos</li>
                <li>• Ask the room creator for a new link</li>
                <li>• Create your own room to get started</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundModal;