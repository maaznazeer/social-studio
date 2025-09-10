interface SocialLink {
    name: string;
    href: string;
  }
  
  const socialLinks: SocialLink[] = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/keyla-sol-inoa-68a1858b/" },
    { name: "Instagram", href: "https://www.instagram.com/sol.inoa/" },
    { name: "Spotify", href: "https://open.spotify.com/user/hgcuqeyvfqsgie03b8j9tbqik?si=nQociPLwQ3CH3FOA79DLeQ" },
  ];
  
  const SocialFooter = () => {
    return (
      <footer className="py-8 border-t border-line">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="font-mono text-xs text-text-muted">
              All rights reserved. privacy policy. terms of use. cookies policy.
            </div>
            
            <div className="flex space-x-1">
              {socialLinks.map((link, index) => (
                <span key={link.name}>
                  <a 
                    href={link.href}
                    className="font-mono text-xs text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                  {index < socialLinks.length - 1 && (
                    <span className="mx-1 text-text-muted">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default SocialFooter;