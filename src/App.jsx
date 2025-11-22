import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BookingForm, AdmissionForm, TrainerForm, Reviews, Gallery } from './components/Forms'
import Chatbot from './components/Chatbot'

function App() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black">
      <Navbar onChatToggle={() => setChatOpen(true)} />
      <main>
        <Hero />
        <BookingForm />
        <AdmissionForm />
        <TrainerForm />
        <Reviews />
        <Gallery />
      </main>

      <footer className="py-12 bg-black border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-gradient-to-br from-red-600 to-red-800 grid place-items-center text-white font-black">VS</div>
            <span className="text-white/80">© {new Date().getFullYear()} Vector Strength</span>
          </div>
          <div className="text-white/60 text-sm">Red • White • Black</div>
        </div>
      </footer>

      <Chatbot open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  )
}

export default App
