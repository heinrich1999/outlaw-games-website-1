import Link from "next/link"
import Image from "next/image"

export function SubdomainHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link href="https://www.outlaw.games" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/images/outlaw-20lime-20green-20logo-20.png"
            alt="Outlaw Games"
            width={40}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-black font-bold text-lg">OUTLAW</span>
        </Link>
      </div>
    </header>
  )
}

