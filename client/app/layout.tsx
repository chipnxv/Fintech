"use client"

import type React from "react"
import { useEffect } from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    document.documentElement.style.colorScheme = "dark"
  }, [])

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex h-screen bg-gradient-overlay">
            <Sidebar />
            <main className="flex-1 overflow-auto backdrop-blur-[2px]">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}