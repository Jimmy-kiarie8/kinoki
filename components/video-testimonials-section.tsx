"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const videoTestimonials = [];

export default function VideoTestimonialsSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [showDemoVideo, setShowDemoVideo] = useState(false);

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-slate-900 text-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
          
            <span className="text-emerald-400"> Maximum Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get maximum results in 2 weeks
          </p>
        </div>

        {/* Video Grid */}

        {/* Product Demo Video */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Get Rosemary Oil for
              <span className="text-emerald-400"> Maximum Results</span>
            </h3>
            <div className="relative">
              {!showDemoVideo ? (
                <>
                  <img
                    src="/hair-imgs/6.avif"
                    alt="Product demonstration"
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
                    <div
                      className="bg-emerald-600 rounded-full p-6 hover:bg-emerald-700 transition-colors cursor-pointer"
                      onClick={() => setShowDemoVideo(true)}
                    >
                      <Play className="w-12 h-12 text-white ml-1" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative w-full h-64 md:h-80">
                 
                  <video src="/videos/page-video.mp4" autoPlay loop={false} playsInline controls className="w-full h-full rounded-xl" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
