import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-lime-300 mb-4">Kinoki Detox Foot Pads Kenya</h3>
            <p className="text-gray-300 mb-4">
              Experience the original Japanese overnight detox. Wake up feeling lighter, energized, and toxin-free after every use.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                FB
              </div>
              <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                IG
              </div>
              <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                TT
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lime-300" />
                <span>+254 712 555 222</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-lime-300" />
                <span>support@kinokidetox.co.ke</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-lime-300" />
                <span>Nairobi CBD, Kenya</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#detox-benefits" className="hover:text-lime-300 transition-colors">
                  Benefits & Ingredients
                </a>
              </li>
              <li>
                <a href="#order-form" className="hover:text-lime-300 transition-colors">
                  Order Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-300 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-300 transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-300 transition-colors">
                  Returns Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Kinoki Detox Kenya. All rights reserved. |
            <a href="#" className="hover:text-lime-300 ml-1">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-lime-300 ml-1">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
