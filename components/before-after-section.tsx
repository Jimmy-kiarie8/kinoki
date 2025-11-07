"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const beforeAfterData = [
  {
    id: 1,
    name: "Sarah M.",
    timeframe: "2 weeks",
    beforeImage: "/before-after/1.jpeg",
    afterImage: "/before-after/2.jpeg",
  },
  {
    id: 2,
    name: "Sarah M.",
    age: 32,
    location: "Nairobi",
    timeframe: "After 3 weeks",
    beforeImage: "/before-after/3.jpeg",
    afterImage: "/before-after/4.jpeg",
  }
];

export default function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Amazing
            <span className="text-emerald-600"> Energy Results ⚡</span>
          </h2>
          <p className="text-xl text-gray-600">
            See real energy transformations
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-6 mx-4">
              <div className="flex justify-between items-center gap-4 mb-4">
                <div className="flex-1">
                  <img
                    src={beforeAfterData[currentIndex].beforeImage}
                    alt="Before transformation"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <p className="text-center mt-2 font-semibold text-gray-700">
                    BEFORE
                  </p>
                </div>
                <div className="flex-1">
                  <img
                    src={beforeAfterData[currentIndex].afterImage}
                    alt="After transformation"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <p className="text-center mt-2 font-semibold text-emerald-600">
                    AFTER
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {beforeAfterData[currentIndex].name}
                </h3>
                <p className="text-emerald-600 font-semibold mt-2">
                  After {beforeAfterData[currentIndex].timeframe}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {beforeAfterData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-emerald-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {beforeAfterData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <img
                      src={item.beforeImage}
                      alt="Before transformation"
                      className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center mt-2 font-semibold text-gray-700">
                      BEFORE
                    </p>
                  </div>
                  <div>
                    <img
                      src={item.afterImage}
                      alt="After transformation"
                      className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center mt-2 font-semibold text-emerald-600">
                      AFTER
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mt-2">
                    After {item.timeframe}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coffee Results Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            More Amazing Energy Results
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {["https://cdn.shopify.com/s/files/1/0270/3933/4494/t/4/assets/0e8a9b44608a4fc0b53828595060533b-1637124807392_1200x.gif?v=1637124812", "https://thejewelryclubonline.com/cdn/shop/files/hairoilgif.webp?v=1727838761&width=750"].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={image}
                  alt="Coffee energy result"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ⚡ Energizing!
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
