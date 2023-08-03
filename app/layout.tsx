import "@/styles/globals.css"
import { Metadata } from "next"


import { fontSans } from "@/lib/fonts"
import { Providers } from "@/components/providers"


export const metadata: Metadata = {}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className=
            "min-h-screen bg-orange-100 tk-new-hero overflow-x-hidden  antialiased">

          <Providers>
          <div className="relative flex min-h-screen   flex-col">
            <div className="flex-1">{children}</div>
          </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
