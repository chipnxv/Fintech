"use client"

import { motion } from "framer-motion"
import { BarChart3, Home, LineChart, Settings, TrendingUp, BookOpen, BarChart2, BarChart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: BarChart2, label: "Portfolio", href: "/portfolio" },
  { icon: LineChart, label: "Market Analysis", href: "/market-analysis" },
  { icon: TrendingUp, label: "Trading", href: "/trading" },
  { icon: BarChart3, label: "Performance", href: "/performance" },
  { icon: BookOpen, label: "Learn", href: "/learn" },
  { icon: BarChart, label: "AI Advisor", href: "/ai-advisor" }, // Added AI Advisor
]

const bottomItems = [{ icon: Settings, label: "Settings", href: "/settings" }]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r border-purple-900/20 bg-background/95 backdrop-blur-md p-4">
      <div className="flex items-center gap-2 px-2 py-4">
        <TrendingUp className="h-6 w-6 text-purple-500" />
        <span className="text-lg font-bold">Finvest</span>
      </div>
      <nav className="space-y-2 pt-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors relative ${
              pathname === item.href ? "text-purple-500" : "text-muted-foreground hover:text-purple-500"
            }`}
          >
            {pathname === item.href && (
              <motion.div
                layoutId="active"
                className="absolute left-0 right-0 top-0 bottom-0 rounded-lg bg-purple-500/10"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}

        <div className="mt-auto pt-4">
          {bottomItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors relative ${
                pathname === item.href ? "text-purple-500" : "text-muted-foreground hover:text-purple-500"
              }`}
            >
              {pathname === item.href && (
                <motion.div
                  layoutId="active"
                  className="absolute left-0 right-0 top-0 bottom-0 rounded-lg bg-purple-500/10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}