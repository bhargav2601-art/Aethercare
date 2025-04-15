"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Brain, Home, LineChart, MessageCircle, Music, Settings, User, LogOut } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "Chat", href: "/chat", icon: MessageCircle },
    { name: "Digital Twin", href: "/digital-twin", icon: Brain },
    { name: "Music Therapy", href: "/music-therapy", icon: Music },
    { name: "Check-in", href: "/check-in", icon: MessageCircle },
    { name: "Insights", href: "/insights", icon: LineChart },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <div className="w-64 border-r bg-background h-screen flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold flex items-center">
          <span className="text-indigo-500 mr-2">✦</span> AetherCare
        </h1>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <Link key={link.href} href={link.href}>
              <Button variant="ghost" className={cn("w-full justify-start", pathname === link.href && "bg-muted")}>
                <Icon className="mr-2 h-4 w-4" />
                {link.name}
              </Button>
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
            <User className="h-4 w-4 text-indigo-500" />
          </div>
          <div>
            <p className="text-sm font-medium">User Name</p>
            <p className="text-xs text-muted-foreground">user@example.com</p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start mt-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/10"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </Button>
      </div>
    </div>
  )
}
