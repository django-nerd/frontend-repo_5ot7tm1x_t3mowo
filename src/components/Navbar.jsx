import { MessageSquare, LogIn } from "lucide-react";
import Logo from "./Logo";

export default function Navbar({ onChatToggle }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <Logo size={36} withText />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#booking" className="hover:text-white transition">Booking</a>
          <a href="#classes" className="hover:text-white transition">Classes</a>
          <a href="#admission" className="hover:text-white transition">Admission</a>
          <a href="#trainer" className="hover:text-white transition">Hire Trainer</a>
          <a href="#reviews" className="hover:text-white transition">Reviews</a>
          <a href="#gallery" className="hover:text-white transition">Photos</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#login" className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center gap-2">
            <LogIn size={18} /> <span className="hidden sm:inline">Login</span>
          </a>
          <button onClick={onChatToggle} className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white" aria-label="Open Chatbot">
            <MessageSquare size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
