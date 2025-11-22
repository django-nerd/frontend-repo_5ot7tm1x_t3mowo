import { useState } from "react";

const API_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function ClassActions() {
  const [status, setStatus] = useState(null);

  const doAction = async (endpoint, payload) => {
    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus(data.ok ? "Action completed." : data.detail || "Error");
    } catch {
      setStatus("Network error");
    }
  };

  const bookClass = (e) => {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    doAction("/api/book-class", payload);
  };

  const joinClass = (e) => {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    doAction("/api/join-class", payload);
  };

  return (
    <section id="classes" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">Classes</h2>
        <p className="text-white/70 mt-1">Book a class in advance or join an available class instantly.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={bookClass} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-sm text-white/70">Name</span>
                <input name="full_name" required className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white" />
              </label>
              <label className="block">
                <span className="text-sm text-white/70">Email</span>
                <input name="email" type="email" required className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm text-white/70">Class</span>
              <input name="class_type" required placeholder="HIIT / Strength / Yoga" className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white" />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-sm text-white/70">Date</span>
                <input name="date" type="date" required className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white" />
              </label>
              <label className="block">
                <span className="text-sm text-white/70">Time</span>
                <input name="time" type="time" required className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white" />
              </label>
            </div>
            <button className="px-5 py-3 rounded-lg bg-red-600 hover:bg-red-700 font-semibold" type="submit">Book Class</button>
          </form>

          <form onSubmit={joinClass} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-sm text-white/70">Name</span>
                <input name="full_name" required className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white" />
              </label>
              <label className="block">
                <span className="text-sm text-white/70">Email</span>
                <input name="email" type="email" required className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm text-white/70">Class Code</span>
              <input name="class_code" required placeholder="e.g. HIIT-12" className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white" />
            </label>
            <button className="px-5 py-3 rounded-lg bg-white text-black hover:bg-zinc-100 font-semibold" type="submit">Join Class</button>
          </form>
        </div>
        {status && <p className="text-sm text-white/70 mt-4">{status}</p>}
      </div>
    </section>
  );
}
