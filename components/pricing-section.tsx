"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, Truck, Shield, Clock } from "lucide-react"

const packages = [
  {
    id: "single",
    name: "Detox Starter • 1 Box",
    originalPrice: 3499,
    price: 2499,
    savings: 1000,
    description: "Perfect to test Kinoki and feel lighter after your very first night",
    features: ["1 box • 10 authentic pads", "Improved sleep & energy", "Free nationwide delivery"],
    popular: false,
    image: "/images/1.jpeg",
  },
  {
    id: "double",
    name: "Complete Cleanse • 3 Boxes",
    originalPrice: 9000,
    price: 6499,
    savings: 2501,
    description: "Best seller – full body reset across three weeks of nightly detox",
    features: ["3 boxes • 30 pads", "Use on both feet nightly", "Cash on delivery available"],
    popular: true,
    image: "/images/2.jpeg",
  },
  {
    id: "triple",
    name: "Family Pack • 5 Boxes",
    originalPrice: 15000,
    price: 9999,
    savings: 5001,
    description: "Share the Kinoki experience with family or enjoy two months of detox",
    features: ["5 boxes • 50 pads", "Extra adhesive sheets included", "Great for couples & parents"],
    popular: false,
    image: "/images/3.jpeg",
  },
]


export default function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 15,
    minutes: 27,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToOrder = (packageType: string) => {
    const orderForm = document.getElementById("order-form")
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: "smooth" })
      // Set the selected package in the form
      const packageSelect = document.querySelector('select[name="package"]') as HTMLSelectElement
      if (packageSelect) {
        packageSelect.value = packageType
        packageSelect.dispatchEvent(new Event("change", { bubbles: true }))
      }
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-950 via-emerald-900 to-lime-700 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Choose Your
            <span className="text-lime-300"> Kinoki Detox Package</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Limited stock available – secure genuine Kinoki pads while the promo lasts.
          </p>

          {/* Countdown Timer */}
          <div className="bg-lime-500 text-slate-900 rounded-xl p-4 inline-block mb-8">
            <p className="text-sm font-semibold mb-2">⚡ LIMITED TIME OFFER ENDS IN:</p>
            <div className="flex gap-4 text-2xl font-bold">
              <div className="text-center">
                <div>{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="text-xs">HOURS</div>
              </div>
              <div>:</div>
              <div className="text-center">
                <div>{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className="text-xs">MINS</div>
              </div>
              <div>:</div>
              <div className="text-center">
                <div>{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className="text-xs">SECS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white text-gray-900 rounded-2xl p-8 ${
                pkg.popular ? "ring-4 ring-lime-400 transform scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-lime-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold">MOST POPULAR</div>
                </div>
              )}

              {/* Package Image */}
              <div className="text-center mb-6">
                <img src={pkg.image || "/placeholder.svg"} alt={pkg.name} className="mx-auto h-32 object-contain" />
              </div>

              {/* Package Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>

                <div className="mb-4">
                  <div className="text-gray-500 line-through text-lg">KES {pkg.originalPrice.toLocaleString()}</div>
                  <div className="text-4xl font-bold text-emerald-600">KES {pkg.price.toLocaleString()}</div>
                  <div className="text-emerald-500 font-semibold">Save KES {pkg.savings.toLocaleString()}</div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={() => scrollToOrder(pkg.id)}
                className={`w-full py-4 text-lg font-semibold rounded-xl ${
                  pkg.popular
                    ? "bg-lime-400 hover:bg-lime-500 text-slate-900"
                    : "bg-emerald-900 hover:bg-emerald-800 text-white"
                }`}
              >
                ORDER NOW
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Truck className="w-12 h-12 text-lime-300 mb-3" />
            <h4 className="text-lg font-bold mb-2">FREE Delivery</h4>
            <p className="text-gray-300">Nationwide shipping in 1-3 business days</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-lime-300 mb-3" />
            <h4 className="text-lg font-bold mb-2">Authenticity Guaranteed</h4>
            <p className="text-gray-300">Sealed Kinoki pads sourced directly from the manufacturer</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-lime-300 mb-3" />
            <h4 className="text-lg font-bold mb-2">Results Overnight</h4>
            <p className="text-gray-300">Notice detox residue and lighter feet after your first use</p>
          </div>
        </div>
      </div>
    </section>
  )
}
