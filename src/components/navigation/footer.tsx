import Image from 'next/image'

const Footer = () => {
  const footerLinks = [
    { name: 'About Eden', href: '#' },
    { name: 'Documentation', href: 'https://docs.edenfinance.org' },
    { name: 'Github', href: 'https://github.com/eden-finance' },
    { name: 'X', href: 'https://x.com/0xedenfi' },
    { name: 'Legacy & Privacy', href: '#' },
  ]

  return (
    <footer className="w-full px-4 pt-16 sm:px-0">
      <div className="mx-auto max-w-[851px] text-center">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm sm:gap-10 sm:text-base">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-foreground font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mb-12">
          <p className="text-muted-foreground font-medium">
            © 2025 Eden Finance. All rights reserved <br />
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/eden-logo-footer.png"
            alt="Eden Finance"
            width={663}
            height={233}
            className="hidden dark:block"
          />
          <Image
            src="/eden-logo-footer-light.png"
            alt="Eden Finance"
            width={663}
            height={233}
            className="block dark:hidden"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
