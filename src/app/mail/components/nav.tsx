"use client"

import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { usePathname, useRouter } from "next/navigation"


interface NavProps {
  isCollapsed: boolean
  links: {
    title: string
    label?: string
    icon: LucideIcon
    to?: string
    variant: "default" | "ghost"
  }[]
}

export function Nav({ links, isCollapsed }: NavProps) {
  
  const pathname = usePathname() 
  return (
    <div
      data-collapsed={false}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>{
            console.log('pathname',pathname,link?.to)

          return (
            <Link
            key={link.title}
            href={link?.to ||"/"}
            className={cn(
              buttonVariants({ variant:  pathname ===link?.to ?"default":"ghost", size: "sm" }),
              pathname ===link?.to  &&
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
              "justify-start"
            )}
          >
            <link.icon className="mr-2 h-4 w-4" />
            {link.title}
            {link.label && (
              <span
                className={cn(
                  "ml-auto",
                  pathname ===link?.to  &&
                    "text-background dark:text-white"
                )}
              >
                {link.label}
              </span>
            )}
          </Link>
          )
        }
        
        )}
      </nav>
    </div>
  )
}
