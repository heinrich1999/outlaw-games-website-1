"use client"

import { usePathname } from "next/navigation"
import { Chatbot } from "@/components/chatbot"

export function SubdomainWrapper() {
  const pathname = usePathname()
  const isSubdomainPage = pathname?.includes("privacy-subdomain") || pathname?.includes("support-subdomain")
  
  if (isSubdomainPage) {
    return null
  }
  
  return <Chatbot />
}

