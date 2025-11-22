import { useEffect, useRef, useState } from "react";
import { X, SendHorizonal } from "lucide-react";

const API_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function Chatbot({ open, onClose }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm your Vector Strength assistant. Ask me about memberships, hours, classes, or trainers." },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async (e) => {
    e.preventDefault();
    const text = inputRef.current.value.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    inputRef.current.value = "";
    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "bot", text: data.reply || "" }]);
    } catch {
      setMessages((m) => [...m, { role: "bot", text: "Sorry, I couldn't reach the server." }]);
    }
  };

  return (
    <div className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition ${open ? "opacity-100" : "opacity-0"}`}
      />

      {/* Panel */}
      <div className={`absolute bottom-6 right-6 w-[22rem] sm:w-[26rem] bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition transform ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="h-12 bg-gradient-to-r from-red-700 to-red-600 text-white flex items-center justify-between px-3">
          <div className="font-semibold">Vector Strength AI</div>
          <button onClick={onClose} className="p-1 rounded hover:bg-white/10"><X size={18} /></button>
        </div>
        <div className="h-72 overflow-y-auto p-3 space-y-2">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[85%] p-2 rounded-lg text-sm ${m.role === "bot" ? "bg-white/5 text-white" : "bg-red-600 text-white ml-auto"}`}>
              {m.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <form onSubmit={send} className="flex items-center gap-2 p-3 border-t border-white/10">
          <input ref={inputRef} className="flex-1 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Type a message..." />
          <button className="px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white" aria-label="Send"><SendHorizonal size={18} /></button>
        </form>
      </div>
    </div>
  );
}
