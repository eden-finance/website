const Footer = () => {
  const footerLinks = [
    { name: "About Eden", href: "#about" },
    { name: "Documentation", href: "#services" },
    { name: "Security & Audits", href: "#contact" },
    { name: "Twitter · Discord · Telegram", href: "#privacy" },
    { name: "Legacy & Privacy", href: "#terms" },
  ];

  return (
    <footer className="w-full py-16 px-4">
      <div className="max-w-[851px] mx-auto text-center">
        <div className="flex flex-wrap justify-center items-center gap-10 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-foreground hover:text-foreground transition-colors duration-200"
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
          <div className="text-6xl font-bold text-foreground">InvestCorp</div>
          {/* If you have an actual logo image, replace the div above with: */}
          {/* <img 
            src="/path-to-your-logo.png" 
            alt="InvestCorp Logo" 
            className="h-24 w-auto"
          /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
