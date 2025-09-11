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
  
  const SocialFooter = () => {
    return (
      <footer className="py-12 border-t border-line">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          {/* Section 3 - About Sol */}
          <div className="mb-8">
          
            <p className="font-satoshi text-[10px] text-text-secondary leading-relaxed">
             3. about Sol. equal parts thinker, feeler, doer. Potent when in best. Mixed / of still waters and fiery drumming. I dance to thin the air I breathe. known to move mountains when on mission.
            </p>
          </div>
            <div className="font-satoshi text-[10px] text-text-secondary leading-relaxed py-4 pl-4 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-32">
              <p className="font-satoshi">
              home..is the land of possibilities. 
              </p>
            </div>
          {/* Section 4 - Take Note */}
          <div className="mb-8">
           
            <p className="font-satoshi text-[10px] text-text-secondary leading-relaxed px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
              4. take note:. <span className="font-bold">at the moment</span>, I am not actively engaging new visions. Though if you're interested in external thoughts, feedback, collaboration or embrace from a listening ear, send a brief intro. If it inspires action from me, you will hear from me. Anything offered will be free of cost. For an open flow of ideas, I encourage mutual NDAs. Given, please submit with initial outreach.
            </p>
          </div>

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
                All rights reserved. <Link target="_blank" href="https://docs.google.com/document/d/1ZMdYltBytGUquybPd5ycGQK7GhQOyDX4O2FqA0loioE/edit?usp=sharing" className="text-text-muted">privacy policy</Link>. <Link target="_blank" href="https://docs.google.com/document/d/1ZMdYltBytGUquybPd5ycGQK7GhQOyDX4O2FqA0loioE/edit?usp=sharing" className="text-text-muted">terms of use</Link>. <Link target="_blank" href="https://docs.google.com/document/d/1ZMdYltBytGUquybPd5ycGQK7GhQOyDX4O2FqA0loioE/edit?usp=sharing" className="text-text-muted">cookies policy</Link>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default SocialFooter;