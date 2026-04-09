import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import {
  LayoutDashboard,
  ShoppingCart,
  Code2,
  Wallet,
  Clock,
  User,
  Mail,
  Phone,
  ArrowRight,
  ArrowLeft,
  Send,
  X
} from "lucide-react"

export default function LeadModel({ close }) {

  const [step, setStep] = useState(1)
  const [project, setProject] = useState("")
  const [budget, setBudget] = useState("")
  const [timeline, setTimeline] = useState("")

  const { register, handleSubmit } = useForm()

  const next = () => setStep(step + 1)
  const prev = () => setStep(step - 1)

  const onSubmit = async (data) => {

    const payload = {
      ...data,
      project,
      budget,
      timeline
    }

    const res = await fetch("https://formspree.io/f/xzdkqrkb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    if (res.ok) {
      toast.success("Project request sent successfully");
      close()
    }
  }

  return (

    <div className="fixed inset-0 bg-black/40 backdrop-blur-lg z-50 flex items-start md:items-center justify-center overflow-y-auto p-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >

        {/* Header */}

        <div className="flex items-center justify-between px-6 py-4 border-b">

          <h2 className="text-lg font-semibold">
            Start Your Project
          </h2>

          <button onClick={close}>
            <X size={20} />
          </button>

        </div>

        {/* Progress */}

        <div className="px-6 pt-4">

          <div className="w-full h-2 bg-gray-100 rounded-full">

            <div
              className="h-2 bg-black rounded-full transition-all"
              style={{ width: `${step * 25}%` }}
            />

          </div>

        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="p-8 min-h-[320px] flex flex-col justify-between">

            <AnimatePresence mode="wait">

              {/* STEP 1 */}

              {step === 1 && (

                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  className="space-y-6"
                >

                  <h3 className="text-xl font-semibold">
                    What do you want to build?
                  </h3>

                  <div className="grid grid-cols-1 gap-4">

                    <button
                      type="button"
                      onClick={() => {
                        setProject("Business Website")
                        next()
                      }}
                      className="border p-4 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition"
                    >
                      <LayoutDashboard size={22} />
                      Business Website
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setProject("Ecommerce")
                        next()
                      }}
                      className="border p-4 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition"
                    >
                      <ShoppingCart size={22} />
                      Ecommerce Store
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setProject("Web Application")
                        next()
                      }}
                      className="border p-4 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition"
                    >
                      <Code2 size={22} />
                      Web Application
                    </button>

                  </div>

                </motion.div>
              )}

              {/* STEP 2 */}

              {step === 2 && (

                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  className="space-y-6"
                >

                  <h3 className="text-xl font-semibold">
                    What is your budget?
                  </h3>

                  <div className="space-y-3">

                    {[
                      "₹5K – ₹10K",
                      "₹10K – ₹25K",
                      "₹25K – ₹50K",
                      "₹50K+"
                    ].map((b) => (

                      <button
                        key={b}
                        type="button"
                        onClick={() => {
                          setBudget(b)
                          next()
                        }}
                        className="border rounded-xl p-4 w-full flex items-center gap-3 hover:bg-gray-50"
                      >
                        <Wallet size={20} />
                        {b}
                      </button>

                    ))}

                  </div>

                </motion.div>
              )}

              {/* STEP 3 */}

              {step === 3 && (

                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  className="space-y-6"
                >

                  <h3 className="text-xl font-semibold">
                    Project timeline
                  </h3>

                  <div className="space-y-3">

                    {[
                      "Immediately",
                      "1 Month",
                      "2-3 Months",
                      "Flexible"
                    ].map((t) => (

                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          setTimeline(t)
                          next()
                        }}
                        className="border rounded-xl p-4 w-full flex items-center gap-3 hover:bg-gray-50"
                      >
                        <Clock size={20} />
                        {t}
                      </button>

                    ))}

                  </div>

                </motion.div>
              )}

              {/* STEP 4 */}

              {step === 4 && (

                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  className="space-y-5"
                >

                  <h3 className="text-xl font-semibold">
                    Your contact information
                  </h3>

                  <div className="space-y-4">

                    <div className="flex items-center border rounded-lg px-3">
                      <User size={18} />
                      <input
                        {...register("name")}
                        placeholder="Your name"
                        className="w-full p-3 outline-none"
                      />
                    </div>

                    <div className="flex items-center border rounded-lg px-3">
                      <Mail size={18} />
                      <input
                        {...register("email")}
                        placeholder="Email address"
                        className="w-full p-3 outline-none"
                      />
                    </div>

                    <div className="flex items-center border rounded-lg px-3">
                      <Phone size={18} />
                      <input
                        {...register("phone")}
                        placeholder="Phone number"
                        className="w-full p-3 outline-none"
                      />
                    </div>

                    <textarea
                      {...register("message")}
                      placeholder="Project details"
                      className="w-full border rounded-lg p-3"
                    />

                  </div>

                </motion.div>
              )}

            </AnimatePresence>

            {/* Navigation */}

            <div className="flex justify-between mt-8">

              {step > 1 && (
                <button
                  type="button"
                  onClick={prev}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
              )}

              {step === 4 && (
                <button
                  type="submit"
                  className="ml-auto bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:scale-105 transition"
                >
                  Send Request
                  <Send size={16} />
                </button>
              )}

            </div>

          </div>

        </form>

      </motion.div>

    </div>
  )
}