import type React from "react"
import Link from "next/link"
import { Brain } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background">
              <div className="container flex h-16 items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-indigo-500" />
                  <span className="text-xl font-bold">AetherCare</span>
                </Link>
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
