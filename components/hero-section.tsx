"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Volume2, VolumeX } from "lucide-react"

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true)

  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted={isMuted} playsInline className="w-full h-full object-cover opacity-30">
          <source src="/videos/page-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-emerald-950/60" />
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-6 right-6 z-20 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-lime-500/10 border border-lime-300/20 rounded-full text-lime-200 text-sm font-medium mb-6">
            🌿 Authentic Kinoki Detox Foot Pads
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Reset Your Body Overnight
            <span className="block text-lime-300">with Kinoki Detox Foot Pads</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-emerald-100 mb-6 font-medium">
            Pull out toxins, reduce swelling, sleep deeper, and wake up light on your feet.
          </p>

          {/* Hero Coffee Image */}
          <div className="mb-8 flex justify-center" onClick={scrollToOrder}>
            <img 
              src="/images/1.jpeg"
              alt="Kinoki Detox Foot Pads packaging"
              className="w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover shadow-2xl border-4 border-lime-300 bg-white"
            />
          </div>

          {/* Simplified Value Proposition */}
          <p className="text-xl md:text-2xl text-lime-200 font-semibold mb-8">
            Detox • Better Sleep • Reduced Foot Fatigue • Natural Bamboo Vinegar Formula
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToOrder}
              size="lg"
              className="bg-lime-400 hover:bg-lime-500 text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              ORDER NOW - KES 2,499
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 text-lg font-semibold rounded-xl"
              onClick={() => document.getElementById("detox-benefits")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="w-5 h-5 mr-2" />
              How Kinoki Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold">4.9/5 Happy Sleepers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <span className="font-semibold">Free Kenya Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span className="font-semibold">Cash on Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌙</span>
              <span className="font-semibold">Visible Overnight Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
