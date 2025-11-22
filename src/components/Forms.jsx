import { useState } from "react";

const API_URL = import.meta.env.VITE_BACKEND_URL || "";

function Input({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-sm text-white/70">{label}</span>
      <input
        className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-600"
        {...props}
      />
    </label>
  );
}

function Textarea({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-sm text-white/70">{label}</span>
      <textarea
        className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-600"
        {...props}
      />
    </label>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black">{title}</h2>
        {subtitle && <p className="text-white/70 mt-1">{subtitle}</p>}
        <div className="mt-8 grid md:grid-cols-2 gap-8">{children}</div>
      </div>
    </section>
  );
}

export function BookingForm() {
  const [status, setStatus] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch(`${API_URL}/api/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus(data.ok ? "Booked successfully!" : data.detail || "Error");
      if (data.ok) e.currentTarget.reset();
    } catch (err) {
      setStatus("Network error");
    }
  };

  return (
    <Section id="booking" title="Booking" subtitle="Reserve a spot in our classes or facilities.">
      <form onSubmit={onSubmit} className="space-y-4">
        <Input name="full_name" label="Full Name" required placeholder="John Doe" />
        <Input name="email" type="email" label="Email" required placeholder="john@example.com" />
        <Input name="phone" label="Phone" placeholder="+1 555 000 1234" />
        <Input name="class_type" label="Class Type" required placeholder="HIIT / Strength / Yoga" />
        <div className="grid grid-cols-2 gap-3">
          <Input name="date" label="Date" type="date" required />
          <Input name="time" label="Time" type="time" required />
        </div>
        <Textarea name="notes" label="Notes" placeholder="Any preferences?" />
        <button className="px-5 py-3 rounded-lg bg-red-600 hover:bg-red-700 font-semibold" type="submit">Book Now</button>
        {status && <p className="text-sm text-white/70">{status}</p>}
      </form>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-semibold">Why Book?</h3>
        <p className="text-white/70 mt-2">Secure your slot for popular classes. Limited seats for maximum attention.</p>
      </div>
    </Section>
  );
}

export function AdmissionForm() {
  const [status, setStatus] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch(`${API_URL}/api/admission`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus(data.ok ? "Welcome to Vector Strength!" : data.detail || "Error");
      if (data.ok) e.currentTarget.reset();
    } catch {
      setStatus("Network error");
    }
  };
  return (
    <Section id="admission" title="Admission" subtitle="Become a member and start training.">
      <form onSubmit={onSubmit} className="space-y-4">
        <Input name="full_name" label="Full Name" required />
        <Input name="email" type="email" label="Email" required />
        <Input name="phone" label="Phone" />
        <Input name="address" label="Address" />
        <Input name="plan" label="Plan" placeholder="Monthly / Quarterly / Yearly" required />
        <Textarea name="objectives" label="Objectives" placeholder="Your fitness goals" />
        <button className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-100" type="submit">Join Now</button>
        {status && <p className="text-sm text-white/70">{status}</p>}
      </form>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-semibold">Membership Perks</h3>
        <ul className="list-disc list-inside text-white/70 mt-2 space-y-1">
          <li>Unlimited gym access</li>
          <li>Free group classes</li>
          <li>Sauna & recovery lounge</li>
        </ul>
      </div>
    </Section>
  );
}

export function TrainerForm() {
  const [status, setStatus] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch(`${API_URL}/api/trainer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus(data.ok ? "Application submitted!" : data.detail || "Error");
      if (data.ok) e.currentTarget.reset();
    } catch {
      setStatus("Network error");
    }
  };
  return (
    <Section id="trainer" title="Hire a Trainer" subtitle="Work 1:1 with our certified pros.">
      <form onSubmit={onSubmit} className="space-y-4">
        <Input name="full_name" label="Full Name" required />
        <Input name="email" type="email" label="Email" required />
        <Input name="phone" label="Phone" />
        <Input name="experience_years" type="number" min="0" max="60" label="Experience (years)" />
        <Input name="specialties" label="Specialties" placeholder="Strength, Mobility, HIIT" />
        <Textarea name="bio" label="Short Bio" />
        <button className="px-5 py-3 rounded-lg bg-red-600 hover:bg-red-700 font-semibold" type="submit">Submit</button>
        {status && <p className="text-sm text-white/70">{status}</p>}
      </form>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-semibold">How it works</h3>
        <p className="text-white/70 mt-2">Tell us your goals and we’ll match you with the right trainer.</p>
      </div>
    </Section>
  );
}

export function Reviews() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    payload.rating = parseInt(payload.rating, 10);
    try {
      const res = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus(data.ok ? "Thanks for the review!" : data.detail || "Error");
      if (data.ok) {
        e.currentTarget.reset();
        load();
      }
    } catch {
      setStatus("Network error");
    }
  };

  const load = async () => {
    try {
      const res = await fetch(`${API_URL}/api/reviews`);
      const data = await res.json();
      if (data.ok) setItems(data.items);
    } catch {}
  };

  useState(() => { load(); }, []);

  return (
    <Section id="reviews" title="Reviews" subtitle="What our members say">
      <form onSubmit={submit} className="space-y-4">
        <Input name="full_name" label="Full Name" required />
        <Input name="rating" type="number" min="1" max="5" label="Rating (1-5)" required />
        <Textarea name="comment" label="Comment" />
        <button className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-100" type="submit">Submit Review</button>
        {status && <p className="text-sm text-white/70">{status}</p>}
      </form>
      <div className="space-y-4">
        {items.map((r, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="font-semibold">{r.full_name} <span className="text-white/60">• {r.rating}/5</span></div>
            <div className="text-white/70">{r.comment}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Gallery() {
  const photos = Array.from({ length: 8 }).map((_, i) => `https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=${i}`);
  return (
    <section id="gallery" className="py-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white">Photos</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((src, idx) => (
            <img key={idx} src={src} alt="Gym" className="w-full h-40 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition" />
          ))}
        </div>
      </div>
    </section>
  );
}
