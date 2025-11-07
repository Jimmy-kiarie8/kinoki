"use client"

import { useState } from "react"

const detoxImages = [
  { id: 1, src: "/images/2.jpeg", alt: "Kinoki Detox Foot Pads packaging" },
  { id: 2, src: "/images/2.jpeg", alt: "Applying Kinoki pads before bed" },
  { id: 3, src: "/images/3.jpeg", alt: "Kinoki pads after overnight detox" },
  { id: 4, src: "/images/4.jpeg", alt: "Relaxing with Kinoki detox pads" },
  { id: 5, src: "/images/5.jpeg", alt: "Fresh bamboo vinegar ingredients" },
  { id: 6, src: "/images/2.jpeg", alt: "Testimonials from Kinoki users" },
]

export default function HairGallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-lime-50 to-emerald-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            See Kinoki Detox
            <span className="text-emerald-600"> In Action</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real photos from customers using Kinoki Detox Foot Pads nightly.
          </p>
        </div>

        {/* Coffee Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {detoxImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(selectedImage === image.id ? null : image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                  index === 0 || index === 5 ? 'h-64 md:h-96' : 'h-48 md:h-64'
                }`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              
              {/* Overlay with minimal text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-semibold text-sm md:text-base">
                  🌿 Natural Detox
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Screen Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={detoxImages.find(img => img.id === selectedImage)?.src}
                alt={detoxImages.find(img => img.id === selectedImage)?.alt}
                className="w-full h-full object-contain rounded-xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Detox While You Sleep?
            </h3>
            <button
              onClick={() => document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-lime-400 hover:bg-lime-500 text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Claim Your Kinoki Box - KES 2,499
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 