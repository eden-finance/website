import Image from 'next/image'
import SmoothCursor from '~/components/miscellaneous/cursor'
import Navbar from '~/components/navigation/header'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <section className="relative h-full pt-[120px] pb-10 md:min-h-dvh xl:h-dvh">
        <Image
          src="/noise_effect.webp"
          alt="noise effect"
          fill
          priority
          className="pointer-events-none fixed inset-0 z-50 h-dvh w-screen md:opacity-90"
        />
        {children}
      </section>
      <SmoothCursor />

      {/* <Footer /> */}
    </>
  )
}
