import { useState } from "react"
import { Check, X } from "lucide-react"
import LeadModel from "./LeadModel"

const plans = [
  {
    name: "Basic",
    price: "₹3K – ₹5K",
    features: [
      { text: "1–3 Page Website", ok: true },
      { text: "Responsive Design", ok: true },
      { text: "Basic SEO Setup", ok: true },
      { text: "Backend Integration", ok: false },
      { text: "Animations", ok: false },
      { text: "Payment Gateway", ok: false },
      { text: "Admin Dashboard", ok: false }
    ]
  },
  {
    name: "Standard",
    price: "₹5K – ₹10K",
    features: [
      { text: "4–6 Page Website", ok: true },
      { text: "Responsive Design", ok: true },
      { text: "SEO Optimized", ok: true },
      { text: "Backend Integration", ok: false },
      { text: "Animations", ok: false },
      { text: "Payment Gateway", ok: false },
      { text: "Admin Dashboard", ok: false }
    ]
  },
  {
    name: "Advanced",
    price: "₹10K – ₹25K",
    highlight: true,
    features: [
      { text: "Custom Website", ok: true },
      { text: "Responsive Design", ok: true },
      { text: "Advanced SEO", ok: true },
      { text: "Backend API", ok: true },
      { text: "Animations", ok: true },
      { text: "Payment Gateway", ok: false },
      { text: "Admin Dashboard", ok: false }
    ]
  },
  {
    name: "Ecommerce",
    price: "₹15K – ₹40K",
    features: [
      { text: "Online Store", ok: true },
      { text: "Responsive Design", ok: true },
      { text: "Advanced SEO", ok: true },
      { text: "Backend API", ok: true },
      { text: "Animations", ok: true },
      { text: "Payment Gateway", ok: true },
      { text: "Admin Dashboard", ok: true }
    ]
  }
]

export default function Pricing() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <section id="pricing" className="py-24 px-6 bg-white">

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-900">
          Compare Plans
        </h2>
        <p className="mt-3 text-gray-600">
          Transparent pricing for your website project.
        </p>
      </div>

      {/* Scroll Wrapper */}
      <div className="mt-16 p-4 max-w-6xl mx-auto overflow-x-auto scrollbar-hide">

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 min-w-max md:min-w-0">

          {plans.map((plan, i) => (

            <div
              key={i}
              className={`relative flex flex-col border rounded-xl p-6 transition
              ${plan.highlight ? "border-black shadow-2xl scale-[1.03]" : "border-gray-200"}
              min-w-[280px] max-w-[280px] md:min-w-0 md:max-w-full
              `}
            >

              {/* 🔥 Most Popular Badge (LEFT SIDE) */}
              {plan.highlight && (
                <div className="absolute -top-3 left-4">
                  <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-2xl font-bold mt-1">
                  {plan.price}
                </p>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 flex-1">

                {plan.features.map((f, idx) => (

                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm opacity-0 animate-[fadeIn_0.5s_forwards]"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >

                    {f.ok ? (
                      <Check size={16} className="text-green-500" />
                    ) : (
                      <X size={16} className="text-red-400" />
                    )}

                    <span className="text-gray-700">{f.text}</span>

                  </li>

                ))}

              </ul>

              {/* CTA */}
              <button
                onClick={() => setOpenModal(true)}
                className={`mt-8 py-2.5 rounded-full text-sm font-medium transition
                ${plan.highlight
                    ? "bg-black text-white"
                    : "border border-gray-300 hover:bg-black hover:text-white"
                  }`}
              >
                Get Started
              </button>

            </div>

          ))}

        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <LeadModel close={() => setOpenModal(false)} />
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  )
}