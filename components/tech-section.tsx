"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Shield, Coins, Users } from "lucide-react"

const techFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on Solana for instant transactions and minimal fees.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Non-custodial wallet with biometric security keeps you in control.",
  },
  {
    icon: Coins,
    title: "Real Rewards",
    description: "Earn tokens, NFTs, and exclusive items through gameplay.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Join a global community of players and compete for glory.",
  },
]

export function TechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section id="technology" ref={ref} className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A4FF42]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-white"
          >
            Powered by <span className="text-[#A4FF42]">Solana</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-white/70 max-w-2xl mx-auto"
          >
            We chose Solana for its speed, low costs, and environmental efficiency. The best tech stays invisible until
            you need it.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-center group relative"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 mx-auto bg-[#A4FF42]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#A4FF42]/20 border border-[#A4FF42]/20 group-hover:border-[#A4FF42]/50 transition-all duration-300 shadow-[0_0_20px_rgba(164,255,66,0.1)] group-hover:shadow-[0_0_30px_rgba(164,255,66,0.3)]"
              >
                <feature.icon className="w-10 h-10 text-[#A4FF42]" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="mt-6 text-xl font-semibold text-white group-hover:text-[#A4FF42] transition-colors"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="mt-2 text-white/60"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
