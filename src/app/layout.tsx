import type { Metadata } from "next"
import { Roboto_Flex, Sacramento } from "next/font/google"
import "./globals.css"

const roboto = Roboto_Flex({ subsets: ["latin"] })

const sacramento = Sacramento({
  variable: "--signature-font",
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SPalojoki Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${roboto.className} ${sacramento.variable}`}>
        {children}
      </body>
    </html>
  )
}
