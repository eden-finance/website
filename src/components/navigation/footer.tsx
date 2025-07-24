const Footer = () => {
  const footerLinks = [
    { name: 'About Eden', href: '#about' },
    { name: 'Documentation', href: '#services' },
    { name: 'Security & Audits', href: '#contact' },
    { name: 'Twitter · Discord · Telegram', href: '#privacy' },
    { name: 'Legacy & Privacy', href: '#terms' },
  ]

  return (
    <footer className="w-full px-4 pt-16">
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
          <p className="text-muted-foreground text-sm">
            © 2025 Eden Finance. All rights reserved <br />
            Built on AssetChain • Powered by cNGN
          </p>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          {/* If you have an actual logo image, replace the div above with: */}
          <img
            src="/eden-logo-footer.png"
            alt="Eden Finance"
            // className="h-24 w-auto"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
