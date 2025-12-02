"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Wallet, Gamepad2, Gift } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Biometric Security",
    description: "Your Keys, Your Rules",
  },
  {
    icon: Wallet,
    title: "Built on Solana",
    description: "Send, Receive, Swap, Hold",
  },
  {
    icon: Gamepad2,
    title: "Play Mini-Games",
    description: "Earn While You Play",
  },
  {
    icon: Gift,
    title: "Earn Rewards",
    description: "Proof of Play is Here",
  },
]

export function WelcomeNews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#A4FF42]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#A4FF42]/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl lg:text-6xl font-bold text-white"
        >
          Latest News<span className="text-[#A4FF42]">.</span>
        </motion.h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#A4FF42]/20"
          >
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OUTLAW%20Wallet%20Trailer%202025%20-%20Outlaw%20Crypto%20Games%20%281080p%2C%20h264%29-24ONwuQRCX6RQMl3fi5htlX6vY6w5G-fyIgwFukY3Sao2nS5z3dmI4Z7N2W2K.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#A4FF42] font-semibold text-sm uppercase tracking-wider"
            >
              Introducing
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-2 text-3xl lg:text-4xl font-bold text-white"
            >
              Outlaw Wallet
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-2 text-white/60"
            >
              by Outlaw Games
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-lg text-white/70"
            >
              All-in-one app for Solana, coins & stablecoins. Play mini-games, earn rewards, and build your empire.
            </motion.p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 bg-black/40 backdrop-blur-xl rounded-xl border border-[#A4FF42]/20 hover:border-[#A4FF42]/50 transition-all group shadow-[0_0_20px_rgba(164,255,66,0.1)]"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-8 h-8 text-[#A4FF42]" />
                  </motion.div>
                  <h4 className="mt-3 font-semibold text-white group-hover:text-[#A4FF42] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-sm text-white/60">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
