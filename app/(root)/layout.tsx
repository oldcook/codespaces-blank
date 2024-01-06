import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main suppressHydrationWarning={true}>
      <Header />
      <body >{children}</body>
      <Footer />
    </main>
  )
}
