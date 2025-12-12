import Link from "next/link"

interface SubdomainFooterProps {
  currentPage: "privacy" | "support"
}

export function SubdomainFooter({ currentPage }: SubdomainFooterProps) {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-600">
          {currentPage === "privacy" ? (
            <>
              <Link
                href="https://support.outlaw.games"
                className="hover:text-[#A4FF42] transition-colors"
              >
                Support
              </Link>
              <Link
                href="https://www.outlaw.games"
                className="hover:text-[#A4FF42] transition-colors"
              >
                Home
              </Link>
            </>
          ) : (
            <>
              <Link
                href="https://privacy.outlaw.games"
                className="hover:text-[#A4FF42] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://www.outlaw.games"
                className="hover:text-[#A4FF42] transition-colors"
              >
                Home
              </Link>
            </>
          )}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Outlaw Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

