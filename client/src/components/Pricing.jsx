import { Check } from "lucide-react"
import { PhoneCall } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "₹3,000 – ₹5,000",
    desc: "Perfect for small businesses getting online.",
    features: [
      "1–3 Pages Website",
      "Home, About, Contact",
      "Responsive Design",
      "Fast Performance",
      "Basic SEO Setup"
    ]
  },
  {
    name: "Standard",
    price: "₹5,000 – ₹10,000",
    desc: "Professional website for growing brands.",
    features: [
      "4–6 Pages Website",
      "Enhanced UI Design",
      "Contact Form Integration",
      "Mobile Optimized",
      "SEO Friendly"
    ]
  },
  {
    name: "Advanced",
    price: "₹10,000 – ₹25,000+",
    desc: "Custom websites with backend and animations.",
    popular: true,
    features: [
      "Custom UI/UX Design",
      "Animations",
      "Dynamic Content",
      "Backend Integration",
      "Scalable Architecture"
    ]
  },
  {
    name: "E-commerce",
    price: "₹15,000 – ₹40,000+",
    desc: "Full online store with payments & admin.",
    features: [
      "Product Listings",
      "Cart System",
      "Payment Gateway",
      "Admin Panel",
      "Order Management"
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 bg-gray-50">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Pricing Details
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Transparent pricing designed for startups and businesses.
        </p>
      </div>

      {/* Pricing Container */}
      <div className="mt-16 max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {plans.map((plan, i) => (

            <div
              key={i}
              className={`relative flex flex-col justify-between p-6 rounded-xl transition duration-300 
              ${plan.popular
                  ? "border border-black shadow-md"
                  : "border border-gray-200"
                }`}
            >

              {plan.popular && (
                <span className="absolute -top-3 left-5 text-xs bg-black text-white px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.name}
                </h3>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  {plan.price}
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  {plan.desc}
                </p>

                <ul className="mt-6 space-y-3">

                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">

                      <Check size={18} className="text-green-500" />

                      {f}

                    </li>
                  ))}

                </ul>

              </div>

              <button className={`mt-8 py-3 rounded-full text-sm font-medium transition
                ${plan.popular
                  ? "bg-black text-white hover:scale-105"
                  : "border border-gray-300 hover:bg-gray-900 hover:text-white"
                }`}
              >
                Get Started
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Additional Services */}
      <div className="max-w-5xl mx-auto mt-20 grid md:grid-cols-3 gap-6 text-center text-gray-600">

        <div>
          <h4 className="font-semibold text-gray-900">Domain & Hosting</h4>
          <p>₹500 – ₹1500</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Extra Pages</h4>
          <p>₹500 – ₹1500 / page</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Custom Features</h4>
          <p>Based on requirement</p>
        </div>

      </div>

      {/* Maintenance */}
      <div className="max-w-3xl mx-auto mt-14 text-center text-gray-600">
        Maintenance & Support — ₹500–₹1500 / month or ₹3000–₹8000 yearly
      </div>

      {/* Free Consultation */}
      <div className="max-w-4xl mx-auto mt-24 text-center">

        <h3 className="text-3xl font-semibold text-gray-900">
          Need help choosing the right plan?
        </h3>

        <p className="mt-4 text-gray-600 text-lg">
          Book a free consultation call and we’ll help you plan your project.
        </p>

        <button className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-medium hover:scale-105 hover:shadow-xl transition-all duration-300">
          Book a Free Consultation Call
          <PhoneCall size={20} />
        </button>

      </div>

    </section>
  )
}