import SmoothCursor from '~/components/miscellaneous/cursor'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      <SmoothCursor />

      {/* <Footer /> */}
    </>
  )
}
