const Footer = () => {
  const footerLinks = [
    { name: 'About Eden', href: '#about' },
    { name: 'Documentation', href: '#services' },
    { name: 'Security & Audits', href: '#contact' },
    { name: 'Twitter · Discord · Telegram', href: '#privacy' },
    { name: 'Legacy & Privacy', href: '#terms' },
  ]

  return (
    <footer className="w-full px-4 pt-16 sm:px-0">
      <div className="mx-auto max-w-[851px] text-center">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-10">
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
            Built on AssetChain • Powered by cNGN
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/eden-logo-footer.png"
            alt="Eden Finance"
            className="hidden dark:block"
          />
          <img
            src="/eden-logo-footer-light.png"
            alt="Eden Finance"
            className="block dark:hidden"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
