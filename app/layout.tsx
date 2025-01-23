import "./globals.css"
import { Inter } from 'next/font/google'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeToggle } from '@/components/theme-toggle'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Minimal Docs Site",
  description: "A gorgeous minimal documentation site using Next.js App Router",
}

import { Space_Grotesk, Hanken_Grotesk } from 'next/font/google';

const indie = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: "400",
});

const ruda = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: "400", // Choose the appropriate weight as per the Google Fonts page
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger className="ml-3 mt-3" />
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <main className="flex-1 overflow-auto p-8 pt-16">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  )
}

