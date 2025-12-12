export default function SupportSubdomainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  )
}

