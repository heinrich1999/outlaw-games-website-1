import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "OUTLAW Support - Help Center & FAQs | Outlaw Games",
  description:
    "Get help with OUTLAW Games. Find answers to FAQs about earning $OUTLAW tokens, account setup, technical issues, cashing out, and security. Contact our 24/7 support team.",
  openGraph: {
    title: "OUTLAW Support - Help Center & FAQs",
    description:
      "Get help with OUTLAW Games. Find answers to FAQs about earning $OUTLAW tokens, account setup, technical issues, cashing out, and security.",
    url: "https://www.outlaw.games/support",
    siteName: "Outlaw Games",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OUTLAW Support - Help Center & FAQs",
    description:
      "Get help with OUTLAW Games. Find answers to FAQs about earning $OUTLAW tokens, account setup, technical issues, cashing out, and security.",
  },
  alternates: {
    canonical: "https://www.outlaw.games/support",
  },
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

