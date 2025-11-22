import { ShoppingCart, MessageSquare } from "lucide-react";

export default function Navbar({ onChatToggle }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-gradient-to-br from-red-600 to-red-800 grid place-items-center text-white font-black">VS</div>
          <span className="text-white font-semibold tracking-wide">Vector Strength</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#booking" className="hover:text-white transition">Booking</a>
          <a href="#admission" className="hover:text-white transition">Admission</a>
          <a href="#trainer" className="hover:text-white transition">Hire Trainer</a>
          <a href="#reviews" className="hover:text-white transition">Reviews</a>
          <a href="#gallery" className="hover:text-white transition">Photos</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={onChatToggle} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white" aria-label="Open Chatbot">
            <MessageSquare size={18} />
          </button>
          <button className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white" aria-label="Cart">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
