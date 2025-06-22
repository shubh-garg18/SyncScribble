import { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { FiCopy, FiCheck, FiShare2, FiUsers, FiLink, FiMail } from "react-icons/fi";
import { BsQrCode, BsWhatsapp, BsTwitter, BsFacebook } from "react-icons/bs";

import { useModal } from "@/common/recoil/modal";
import { useRoom } from "@/common/recoil/room";

const ShareModal = () => {
  const { id } = useRoom();
  const { closeModal } = useModal();

  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
    // Generate QR code URL (using a free QR code API)
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleShare = (platform) => {
    const shareText = `Join me on this collaborative drawing canvas! Room ID: ${id}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(shareText);

    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      email: `mailto:?subject=Join my drawing canvas&body=${encodedText}%0A%0A${url}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const ShareButton = ({ icon, label, onClick, color = "bg-gray-100 hover:bg-gray-200" }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-105 ${color} group`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{label}</span>
    </button>
  );

  return (
    <div className="relative flex flex-col rounded-2xl bg-gradient-to-br from-white to-blue-50 p-8 shadow-2xl max-w-md mx-auto">
      <button 
        onClick={closeModal} 
        className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
      >
        <AiOutlineClose className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
      </button>
      
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
          <FiShare2 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Share Canvas</h2>
        <p className="text-gray-600">Invite others to collaborate on your drawing</p>
      </div>

      {/* Room Info */}
      <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
        <div className="flex items-center gap-2 mb-2">
          <FiUsers className="text-blue-600" />
          <span className="text-sm font-medium text-blue-800">Room Information</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-600">Room ID:</span>
            <p className="font-mono font-bold text-lg text-blue-700">{id}</p>
          </div>
          <img 
            src={qrCode} 
            alt="QR Code" 
            className="w-12 h-12 rounded border border-gray-200"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* URL Copy Section */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
          <FiLink />
          Share Link
        </label>
        <div className="relative">
          <input 
            type="text" 
            value={url} 
            readOnly 
            className="w-full px-4 py-3 pr-24 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button 
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              copied 
                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
            onClick={handleCopy}
          >
            {copied ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Share Options */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
          <FiShare2 />
          Quick Share
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <ShareButton
            icon={<BsWhatsapp className="text-green-600" />}
            label="WhatsApp"
            onClick={() => handleShare('whatsapp')}
            color="bg-green-50 hover:bg-green-100"
          />
          <ShareButton
            icon={<FiMail className="text-gray-600" />}
            label="Email"
            onClick={() => handleShare('email')}
            color="bg-gray-50 hover:bg-gray-100"
          />
          <ShareButton
            icon={<BsTwitter className="text-blue-400" />}
            label="Twitter"
            onClick={() => handleShare('twitter')}
            color="bg-blue-50 hover:bg-blue-100"
          />
          <ShareButton
            icon={<BsFacebook className="text-blue-600" />}
            label="Facebook"
            onClick={() => handleShare('facebook')}
            color="bg-blue-50 hover:bg-blue-100"
          />
        </div>
      </div>

      {/* QR Code Section */}
      <div className="text-center pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center gap-2 mb-3">
          <BsQrCode className="text-gray-600" />
          <span className="text-sm font-medium text-gray-700">QR Code</span>
        </div>
        <div className="inline-block p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
          <img 
            src={qrCode} 
            alt="QR Code for sharing" 
            className="w-24 h-24 rounded"
            onError={(e) => {
              e.target.parentElement.innerHTML = '<div class="w-24 h-24 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs">QR Code</div>';
            }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">Scan to join the canvas</p>
      </div>
    </div>
  );
};

export default ShareModal;