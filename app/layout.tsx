import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Dancing_Script } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Karan Mehndi Art - Timeless Henna, Crafted with Love",
  description:
    "Professional mehendi artist in Mumbai offering bridal, festive, and custom henna designs with natural ingredients and intricate patterns.",
  keywords: "mehandi, henna, bridal mehendi, henna artist, Mumbai, Karan Mehndi Art",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${dancingScript.variable} font-sans bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'