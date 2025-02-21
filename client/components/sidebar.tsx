"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, BookOpen, Home, LineChart, PieChart, Settings, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()

  const links = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Portfolio", href: "/portfolio", icon: PieChart },
    { name: "Market Analysis", href: "/analysis", icon: LineChart },
    { name: "Trading", href: "/trading", icon: TrendingUp },
    { name: "Performance", href: "/performance", icon: BarChart3 },
    { name: "Learn", href: "/learn", icon: BookOpen },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <div className="w-64 border-r bg-gray-900 h-screen"> {/* Simplified background */}
      <div className="p-4">
        <h1 className="text-xl font-bold text-white mb-8">JakePlan</h1> {/* Made title white */}
        <nav className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <Button
                key={link.href}
                variant={pathname === link.href ? "secondary" : "ghost"} // Still using 'variant', which is from your existing Button component
                className={`w-full justify-start gap-2 ${pathname === link.href ? 'bg-gray-700' : ''}`} // Applied Tailwind default classes for active state
                asChild
              >
                <Link href={link.href} className="flex items-center gap-2 text-white">
                  <Icon className="h-4 w-4" />
                  {link.name}
                </Link>
              </Button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
