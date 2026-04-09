import { useState } from "react"

export default function CostCalculator() {

  const [pages, setPages] = useState(5)
  const [animations, setAnimations] = useState(false)
  const [cms, setCms] = useState(false)

  const base = 3000
  const pagesCost = pages * 800
  const animationCost = animations ? 4000 : 0
  const cmsCost = cms ? 5000 : 0

  const total = base + pagesCost + animationCost + cmsCost

  return (

    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <header className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Estimate Your Website Cost
          </h2>

          <p className="mt-4 text-gray-600">
            Get a quick estimate for your project based on features.
          </p>

        </header>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-6">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Number of Pages
              </label>

              <input
                type="range"
                min="1"
                max="15"
                value={pages}
                onChange={(e) => setPages(e.target.value)}
                className="w-full mt-2"
              />

              <p className="text-gray-600 mt-1">{pages} pages</p>
            </div>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                onChange={(e) => setAnimations(e.target.checked)}
              />

              Animations & Micro-interactions

            </label>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                onChange={(e) => setCms(e.target.checked)}
              />

              CMS / Admin Panel

            </label>

          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col justify-center">

            <h3 className="text-lg text-gray-500">
              Estimated Cost
            </h3>

            <p className="text-4xl font-bold text-gray-900 mt-2">
              ₹{total.toLocaleString()}
            </p>

            <p className="text-gray-600 mt-4 text-sm">
              This is an estimated project cost based on selected features.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}