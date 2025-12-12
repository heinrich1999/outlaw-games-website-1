import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | OUTLAW",
  description: "Privacy Policy for OUTLAW Token Rewards & Wallet App.",
  alternates: {
    canonical: "https://www.outlaw.games/privacy",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

