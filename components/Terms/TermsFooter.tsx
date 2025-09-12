import { InstagramIcon, Linkedin01Icon, SpotifyIcon } from "hugeicons-react";
import Link from "next/link";

interface SocialLink {
    name: string;
    href: string;
    logo: React.ReactNode;
  }
  
  const socialLinks: SocialLink[] = [
    { name: "LinkedIn", logo: <Linkedin01Icon/>, href: "https://www.linkedin.com/in/keyla-sol-inoa-68a1858b/" },
    { name: "Instagram", logo: <InstagramIcon/>, href: "https://www.instagram.com/sol.inoa/" },
    { name: "Spotify", logo: <SpotifyIcon/>, href: "https://open.spotify.com/user/hgcuqeyvfqsgie03b8j9tbqik?si=nQociPLwQ3CH3FOA79DLeQ" },
  ];
  
  const TermsFooter = () => {
    return (
      <footer className="py-12 border-t border-line">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          {/* Contact and Social Links */}
          <div className="flex  flex-col items-center my-12 gap-5 ">
            <div className="font-satoshi text-[10px] text-text-primary mb-2">
              move me: <a href="mailto:sol@social-light.studio" className="text-text-secondary hover:text-primary transition-colors duration-300">sol@social-light.studio</a>
            </div>
            
            <div className="flex items-center">
            <div className="flex divide-x divide-text-muted">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                target="_blank"
                href={link.href}
                className="font-satoshi text-[10px] text-text-secondary hover:text-primary transition-colors duration-300 flex items-center px-2"
              >
                {link.logo}
                <span className="ml-2">{link.name}</span>
              </a>
            ))}
            </div>
            </div>


          </div>

          {/* Copyright - Horizontal scrolling */}
          <div className="w-full overflow-hidden">
            <div className="overflow-x-auto scrollbar-hide text-center">
              <div className="font-satoshi text-[10px] text-text-muted whitespace-nowrap inline-block min-w-max ">
                All rights reserved. <Link target="_blank" href="/terms" className="text-text-muted">privacy policy</Link>. <Link href="/terms" className="text-text-muted hover:text-primary transition-colors duration-300">terms of service</Link>. <Link target="_blank" href="/terms" className="text-text-muted">cookies policy</Link>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
    
  export default TermsFooter;
