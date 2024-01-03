"use client"
import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

import * as React from "react"
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"

import { AccountSwitcher } from "@/app/mail/components/account-switcher"
import { MailDisplay } from "@/app/mail/components/mail-display"
import { MailList } from "@/app/mail/components/mail-list"
import { Nav } from "@/app/mail/components/nav"
import { Mail } from "@/app/mail/data"
import { useMail } from "@/app/mail/use-mail"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { accounts, mails } from "@/app/mail/data"
import { useRouter } from 'next/router'
interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}



export default function Navbar({
  children,
}: {
  children: React.ReactNode
}) {
  const defaultLayout = [265, 440, 655];
  const navCollapsedSize =4
  const isCollapsed = false;


  return (
  
    
      <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full items-stretch"
      >
         <div style={{width:264}}>
          <div className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]': 'px-2')}>
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div>
          <Separator />
          <Nav
            isCollapsed={false}
            links={[
              {
                title: "Inbox",
                label: "128",
                icon: Inbox,
                variant: "default",
                to:'/',
              },
              {
                title: "Drafts",
                label: "9",
                icon: File,
                variant: "ghost",
                to:'/mail',
              },
              {
                title: "Profil",
                label: "",
                icon: Send,
                variant: "ghost",
                to:'/profil',
              },
              {
                title: "Junk",
                label: "23",
                icon: ArchiveX,
                variant: "ghost",
                to:'/3',
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2,
                variant: "ghost",
                to:'/4',
              },
              {
                title: "Archive",
                label: "",
                icon: Archive,
                variant: "ghost",
                to:'/5',
              },
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Social",
                label: "972",
                icon: Users2,
                variant: "ghost",
                to:'/11',
              },
              {
                title: "Updates",
                label: "342",
                icon: AlertCircle,
                variant: "ghost",
                to:'/12',
              },
              {
                title: "Forums",
                label: "128",
                icon: MessagesSquare,
                variant: "ghost",
                to:'/32',
              },
              {
                title: "Shopping",
                label: "8",
                icon: ShoppingCart,
                variant: "ghost",
                to:'/44',
              },
              {
                title: "Promotions",
                label: "21",
                icon: Archive,
                variant: "ghost",
                to:'/54',
              },
            ]}
          />
        </div>
        <ResizableHandle  />
       <div className='min-h-screen flex'>
       {children}
       </div>
      

      </ResizablePanelGroup>
      </TooltipProvider>
        
    
 
  )
}
