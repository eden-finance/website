// import SmoothCursor from '~/components/miscellaneous/cursor'
import Footer from '~/components/navigation/footer'
import Navbar from '~/components/navigation/navbar'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </>
  )
}
