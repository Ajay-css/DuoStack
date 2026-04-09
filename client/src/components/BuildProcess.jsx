import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import browser from "../assets/browser.png"

export default function BuildProcess() {

  return (

    <section ref={ref} className="relative h-[400vh] bg-gray-50">

      <div className="sticky top-0 h-screen flex items-center justify-center px-6">

        <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl border overflow-hidden">

          {/* Browser Bar */}

          <div className="flex items-center gap-2 px-4 py-3 border-b bg-gray-100">

            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />

            <div className="ml-4 text-sm text-gray-500">
              duostack.app
            </div>

          </div>

          {/* Browser Content */}

          <div className="h-[440px] relative overflow-hidden">

            <img src={browser} alt="browser" />

          </div>

        </div>

      </div>

    </section>

  )

}