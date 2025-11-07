import { Star, Shield, Users, Award } from "lucide-react"

const testimonials = [
  {
    name: "James Mwangi",
    location: "Nairobi",
    rating: 5,
    text: "Best Kinoki Coffee I've ever had. My energy levels are through the roof!",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Kiprop",
    location: "Eldoret",
    rating: 5,
    text: "Amazing energy boost in just 15 minutes. Highly recommend to all coffee lovers!",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Samuel Ochieng",
    location: "Kisumu",
    rating: 5,
    text: "My productivity has increased significantly since I started using Kinoki Coffee. Thank you!",
    image: "/placeholder.svg?height=60&width=60",
  },
]

const faqs = [
  {
    question: "How long does it take to feel the energy boost?",
    answer:
      "Most customers feel the energy boost within 15-30 minutes of drinking Kinoki Coffee, with sustained energy for 4-6 hours.",
  },
  {
    question: "Is it suitable for all coffee drinkers?",
    answer:
      "Yes! Our premium blend works for all coffee lovers - whether you prefer strong, mild, or flavored coffee.",
  },
  {
    question: "How do I brew Kinoki Coffee?",
    answer:
      "Use 2 tablespoons of coffee per 6 ounces of water. Brew using your preferred method - drip, French press, or espresso machine. Enjoy hot or cold!",
  }
]

export default function TrustElements() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Trust Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Premium Coffee</div>
          </div>
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">2+ Years</div>
            <div className="text-gray-600">Proven Results</div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Badges */}
        <div className="text-center mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Secure & Trusted</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-6 h-6" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">📱</span>
              <span>M-Pesa Accepted</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">🏦</span>
              <span>Bank Transfer</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">💳</span>
              <span>Card Payments</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
