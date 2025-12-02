"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#A4FF42]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02, borderColor: "rgba(164,255,66,0.4)" }}
            transition={{ duration: 0.3 }}
            className="bg-black/80 backdrop-blur-sm border-2 border-[#A4FF42]/20 rounded-2xl p-8 lg:p-12 shadow-[0_0_30px_rgba(164,255,66,0.1)]"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white"
              >
                STAY IN THE
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                className="text-[#A4FF42] inline-block"
              >
                LOOP
              </motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white text-lg mb-4"
            >
              Subscribe here for all the news that's fit to fly delivered straight to your inbox! You can opt out
              anytime.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/60 text-sm mb-8"
            >
              By subscribing, you agree to receive emails from us. Please review our{" "}
              <a href="#" className="underline text-white hover:text-[#A4FF42] transition-colors">
                privacy policy
              </a>{" "}
              for more information.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-black border-2 border-[#A4FF42] h-14 text-white placeholder:text-gray-400 focus:border-[#A4FF42] focus:ring-2 focus:ring-[#A4FF42]/50 rounded-lg"
                  required
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    type="submit"
                    className="h-14 w-14 bg-black border-2 border-[#A4FF42] text-white hover:bg-[#A4FF42] hover:text-black transition-all rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(164,255,66,0.2)]"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full h-14 bg-[#A4FF42] text-black hover:bg-[#A4FF42]/90 font-bold text-lg rounded-lg transition-all shadow-[0_0_30px_rgba(164,255,66,0.3)]"
                >
                  SUBSCRIBE
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
