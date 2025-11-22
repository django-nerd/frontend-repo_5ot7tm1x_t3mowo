import { useState } from "react";

const API_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function Login({ onSuccess }) {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("Logged in successfully");
        onSuccess?.(data.token || "demo-token");
      } else {
        setStatus(data.detail || "Invalid credentials");
      }
    } catch (e) {
      setStatus("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="login" className="py-16 bg-zinc-950 text-white">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl font-black">Member Login</h2>
        <p className="text-white/70 mt-1">Access your classes and bookings.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <label className="block">
            <span className="text-sm text-white/70">Email</span>
            <input name="email" type="email" required className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="you@example.com" />
          </label>
          <label className="block">
            <span className="text-sm text-white/70">Password</span>
            <input name="password" type="password" required className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="••••••••" />
          </label>
          <button disabled={loading} className="w-full px-5 py-3 rounded-lg bg-red-600 hover:bg-red-700 font-semibold disabled:opacity-60" type="submit">
            {loading ? "Signing in..." : "Sign In"}
          </button>
          {status && <p className="text-sm text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  );
}
