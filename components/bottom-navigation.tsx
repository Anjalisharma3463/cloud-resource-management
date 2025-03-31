"use client"

import { BarChart2, Home, LayoutGrid, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export default function BottomNavigation() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background z-10">
      <div className="flex items-center justify-around h-16">
        <Link
          href="/"
          className={cn(
            "flex flex-col items-center justify-center w-full h-full",
            pathname === "/" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          href="/resources"
          className={cn(
            "flex flex-col items-center justify-center w-full h-full",
            pathname.startsWith("/resources") ? "text-primary" : "text-muted-foreground",
          )}
        >
          <LayoutGrid className="h-5 w-5" />
          <span className="text-xs mt-1">Resources</span>
        </Link>
        <Link
          href="/analytics"
          className={cn(
            "flex flex-col items-center justify-center w-full h-full",
            pathname === "/analytics" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <BarChart2 className="h-5 w-5" />
          <span className="text-xs mt-1">Analytics</span>
        </Link>
        <Link
          href="/settings"
          className={cn(
            "flex flex-col items-center justify-center w-full h-full",
            pathname === "/settings" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Settings className="h-5 w-5" />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </div>
  )
}

