"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const games = [
  {
    title: "OÜTIE Putt Putt",
    description:
      "Master the greens in this addictive mini-golf experience. Compete with friends and earn rewards as you sink impossible shots across beautifully designed courses.",
    image: "/images/whatsapp-20image-202025-09-17-20at-2006.jpeg",
    status: "live",
  },
  {
    title: "OÜTIE Pool",
    description:
      "Rack 'em up in this sleek 8-ball pool game. Challenge players worldwide, climb the leaderboards, and prove you're the ultimate pool shark.",
    image: "/images/whatsapp-20image-202025-09-17-20at-2007.jpeg",
    status: "coming-soon",
  },
  {
    title: "OÜTIE Chess",
    description:
      "The timeless game of strategy, reimagined. Battle opponents in ranked matches, solve daily puzzles, and earn your place among the grandmasters.",
    image: "/images/whatsapp-20image-202025-09-17-20at-2006.jpeg",
    status: "coming-soon",
  },
]

export function GamesSection() {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section id="games" ref={ref} className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#A4FF42]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#A4FF42]/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Our Games<span className="text-[#A4FF42]">.</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-white/70 max-w-2xl"
          >
            Classic gameplay meets modern rewards. Every game in our collection is designed for fun first, with
            blockchain benefits built in.
          </motion.p>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 w-full rounded-2xl overflow-hidden border border-[#A4FF42]/20 shadow-[0_0_40px_rgba(164,255,66,0.1)]"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/out-20law-20banners.png"
              alt="Outlaw Mini-Games Banner"
              width={1400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Game Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-black border border-[#A4FF42]/20 group-hover:border-[#A4FF42]/50 transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring" }}
                  className="absolute top-4 right-4"
                >
                  <div className="w-12 h-12 bg-[#A4FF42]/20 backdrop-blur-md rounded-full flex items-center justify-center border border-[#A4FF42]/30">
                    <span className="text-[#A4FF42] text-xs font-bold">OÜTIE</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="mt-4 flex items-center gap-4"
              >
                <h3 className="text-xl font-bold text-white group-hover:text-[#A4FF42] transition-colors">{game.title}</h3>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="flex-1 h-0.5 bg-[#A4FF42] origin-left"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="mt-3 text-white/60 leading-relaxed"
              >
                {game.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className={`mt-4 border-2 font-semibold ${
                    game.status === "live"
                      ? "border-[#A4FF42] bg-[#A4FF42] text-black hover:bg-[#A4FF42]/90 hover:text-black"
                      : "border-white/30 text-white/80 bg-white/5 cursor-not-allowed"
                  }`}
                  disabled={game.status === "coming-soon"}
                >
                  {game.status === "live" ? (
                    <>
                      VIEW GAME <ExternalLink className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    "COMING SOON"
                  )}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
