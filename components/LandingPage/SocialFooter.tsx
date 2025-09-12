"use client";

import { useState, useEffect } from "react";
import PolicyModal from "../PolicyModal";

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
    const [modalState, setModalState] = useState<{
      isOpen: boolean;
      type: "privacy" | "terms" | "cookies" | null;
    }>({
      isOpen: false,
      type: null,
    });

    const [scrollY, setScrollY] = useState(0);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    const openModal = (type: "privacy" | "terms" | "cookies") => {
      setModalState({ isOpen: true, type });
    };

    const closeModal = () => {
      setModalState({ isOpen: false, type: null });
    };

    // Scroll animation effect
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        setScrollY(scrollPosition);
        
        // Start revealing footer when user scrolls 40% of the page
        const revealPoint = documentHeight * 0.7;
        
        if (scrollPosition + windowHeight >= revealPoint) {
          setIsFooterVisible(true);
        } else {
          setIsFooterVisible(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
      <>
      <div className=""></div>
        <footer 
          className={`py-12 fixed bottom-0 left-0 right-0  z-0 ${
            isFooterVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-full opacity-0'
          }`}
          style={{
            backgroundImage: 'url(/Footer-BG.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* mx-auto px-8 lg:px-12 max-w-7xl relative z-10 mt-[150px] */}
          <div className="container mx-auto px-8 lg:px-12 max-w-7xl relative z-10">
            {/* Section 3 - About Sol */}
            <div className="mb-8">
            
              <p className="font-satoshi text-[10px] text-text-secondary leading-relaxed xl:pl-25">
               3. about Sol. equal parts thinker, feeler, doer. Potent when in best. Mixed / of still waters and fiery drumming. I dance<br />to thin the air I breathe. known to move mountains when on mission.
              </p>
            </div>
              <div className="font-satoshi text-[10px] text-text-secondary leading-relaxed py-4 pl-17 sm:pl-8 md:pl-55 lg:pl-45 xl:pl-85">
                <p className="font-satoshi">
                home..is the land of possibilities. 
                </p>
              </div>
            {/* Section 4 - Take Note */}
            <div className="mb-8 justify-center items-center flex">
             
              <p className="font-satoshi text-[10px] text-text-secondary leading-relaxed px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 ">
                4. take note:. <span className="font-bold">at the moment</span>, I am not actively engaging new visions. Though if you're interested in external thoughts, feedback,<br />collaboration or embrace from a listening ear, send a brief intro. If it inspires action from me, you will hear from me. Anything<br />offered will be free of cost. For an open flow of ideas, I encourage mutual NDAs. Given, please submit with initial outreach.
              </p>
            </div>

            {/* Contact and Social Links */}
            <div className="flex  flex-col items-center my-12 gap-5 ">
              <div className="font-satoshi text-[10px] text-text-primary mb-2">
                let's move together: <a href="mailto:sol@social-light.studio" className="text-text-secondary hover:text-primary transition-colors duration-300">sol@social-light.studio</a>
              </div>
              
              <div className="flex items-center">
              <div className="flex [&>*:not(:last-child)]:after:content-['|'] [&>*:not(:last-child)]:after:mx-2 [&>*:not(:last-child)]:after:text-text-muted [&>*:not(:last-child)]:after:text-[12px] [&>*:not(:last-child)]:after:leading-[10px]">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  target="_blank"
                  href={link.href}
                  className="font-satoshi text-[10px] text-text-secondary hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              </div>
              </div>


            </div>

            {/* Copyright - Horizontal scrolling */}
            <div className="w-full overflow-hidden">
              <div className="overflow-x-auto scrollbar-hide text-center">
                <div className="font-satoshi text-[10px] text-text-muted whitespace-nowrap inline-block min-w-max ">
                  All rights reserved. <button onClick={() => openModal("privacy")} className="text-text-muted hover:text-primary transition-colors duration-300">privacy policy</button>. <button onClick={() => openModal("terms")} className="text-text-muted hover:text-primary transition-colors duration-300">terms of service</button>. <button onClick={() => openModal("cookies")} className="text-text-muted hover:text-primary transition-colors duration-300">cookies policy</button>.
                </div>
              </div>
            </div>
          </div>
        </footer>
        
        {modalState.isOpen && modalState.type && (
          <PolicyModal
            isOpen={modalState.isOpen}
            onClose={closeModal}
            type={modalState.type as "privacy" | "terms" | "cookies"}
          />
        )}
      </>
    );
  };
    
  export default SocialFooter;