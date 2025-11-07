import { CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: "🌿",
    title: "Pulls Out Toxins",
    description: "Kinoki pads use bamboo vinegar, tourmaline, and herbal extracts to draw out impurities through your soles while you rest.",
    features: [
      "Bamboo vinegar detox technology",
      "Noticeable darkening after first night",
      "Supports liver & lymphatic drainage"
    ]
  },
  {
    icon: "🦶",
    title: "Relieves Swelling & Pain",
    description: "Feel lighter on your feet by reducing water retention, soreness, and inflammation in your legs and ankles overnight.",
    features: [
      "Soothes tired feet after long days",
      "Great for standing professions",
      "Reduces morning stiffness"
    ]
  },
  {
    icon: "😴",
    title: "Deeper, Calmer Sleep",
    description: "Lavender and wood vinegar aromas calm the nervous system so you drift off faster and stay asleep longer.",
    features: [
      "Promotes relaxation",
      "Less tossing & turning",
      "Wake up refreshed"
    ]
  },
  {
    icon: "⚡",
    title: "Boosts Circulation",
    description: "Gentle far-infrared release encourages better blood flow, helping your body deliver oxygen and remove waste.",
    features: [
      "Supports lymph circulation",
      "Warms cold feet",
      "Improves morning energy"
    ]
  },
  {
    icon: "🍃",
    title: "100% Natural Ingredients",
    description: "Made with genuine Kinoki formulation – no parabens, no harsh chemicals, just trusted Japanese detox botanicals.",
    features: [
      "Bamboo vinegar & tourmaline",
      "Vitamin C, wood vinegar",
      "Tested for skin safety"
    ]
  },
  {
    icon: "⌚",
    title: "Simple Nightly Ritual",
    description: "Peel, stick, and sleep. The hypoallergenic adhesive keeps pads secure all night for effortless detoxing.",
    features: [
      "Apply in under 10 seconds",
      "No pills or fasting required",
      "Disposal is mess-free"
    ]
  },
]

export default function ProductBenefitsSection() {
  return (
    <section id="detox-benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose
            <span className="text-emerald-600"> Kinoki Detox Foot Pads?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the original Japanese overnight detox pads trusted worldwide for toxin removal, pain relief, and better sleep with zero effort.
          </p>
        </div>

        {/* Benefits Grid with Detailed Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Key Statistics Section */}
        {/* <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Proven Results
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stat: "94%", label: "Customer Satisfaction", icon: "⭐" },
              { stat: "4-8", label: "Weeks to See Results", icon: "⚡" },
              { stat: "85%", label: "Reduced Breakage", icon: "💪" },
              { stat: "100%", label: "Natural Ingredients", icon: "🌿" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">{item.stat}</div>
                <p className="text-gray-700 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* How It Works Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            How to Use Kinoki for Overnight Detox
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1",
                title: "Peel & Stick",
                description: "Remove the backing and place the soft pad in the center of your foot before bed. Press gently to secure.",
                icon: "🩹"
              },
              {
                step: "Step 2",
                title: "Sleep 6-8 Hours",
                description: "Let the natural ingredients draw out toxins while you rest. Many users notice a calming warmth within minutes.",
                icon: "🌙"
              },
              {
                step: "Step 3",
                title: "Wake Up & Glow",
                description: "Remove the pads in the morning to reveal the trapped impurities. Clean your feet and feel noticeably lighter.",
                icon: "✨"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="text-sm font-semibold text-emerald-600 mb-2">{step.step}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
