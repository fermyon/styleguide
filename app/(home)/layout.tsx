import "../globals.css"
import { Inter } from 'next/font/google'
import { ThemeToggle } from '@/components/theme-toggle'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Documentation Starter - Home",
  description: "Welcome to our documentation site",
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  )
}

