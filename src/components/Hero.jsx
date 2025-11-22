export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-96 h-96 bg-red-600/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-20 w-[36rem] h-[36rem] bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Unleash Your Power at <span className="text-red-600">Vector Strength</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl">
            Premium equipment, elite coaching, and a community built to push limits. Join today and transform your performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#booking" className="px-5 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition">Book a Class</a>
            <a href="#admission" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-100 transition">Join Now</a>
          </div>
        </div>
        <div className="relative">
          <div className="w-full aspect-square rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),rgba(255,255,255,0)_60%)] border border-white/10 flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-red-600/60 animate-pulse" />
              <div className="absolute inset-4 rounded-full border-2 border-white/20 animate-spin [animation-duration:18s]" />
              <div className="absolute inset-8 rounded-full border-2 border-white/10 animate-spin [animation-duration:28s]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-black grid place-items-center text-white font-black text-xl shadow-[0_0_50px_rgba(239,68,68,0.6)]">
                  VS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[
          { label: "Strength", value: "+1200 kg lifted daily" },
          { label: "Coaches", value: "10+ Certified" },
          { label: "Members", value: "2k+ Strong" },
          { label: "Classes", value: "HIIT • Strength • Mobility" },
        ].map((s) => (
          <div key={s.label} className="p-4 rounded-xl bg-white/5 border border-white/10 text-white">
            <div className="text-sm text-white/60">{s.label}</div>
            <div className="font-semibold">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
