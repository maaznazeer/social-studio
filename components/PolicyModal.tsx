"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms" | "cookies";
}

const PolicyModal = ({ isOpen, onClose, type }: PolicyModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
      // Small delay to ensure DOM is ready before animation
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // Start close animation
      setIsAnimating(false);
      // Delay hiding the modal to allow close animation
      const timer = setTimeout(() => {
        setIsVisible(false);
        // Restore scrolling after modal is completely hidden
        document.body.style.overflow = "unset";
      }, 1200); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle close function
  const handleClose = () => {
    onClose();
  };

  const getContent = () => {
    switch (type) {
      case "privacy":
        return (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center">PRIVACY POLICY</h1>
            <p className="text-sm text-muted-foreground mb-6">
              <strong>Effective Date:</strong> September 9, 2025
            </p>
            <p className="mb-4">
              For questions, thoughts, or collaboration inquiries, please reach out: 
              <br />
              <strong>Email:</strong> Sol@social-light.studio
            </p>
            <p className="mb-6">
              Welcome to SOCIAL-LIGHT. STUDIO. ("we," "our," "us"), owned and operated by SOCIAL-LIGHT. STUDIO. LLC, a New York Limited Liability Company. This space exists to share creative work and invite the possibility of collaboration. By engaging with our site, you agree to these Privacy Terms and terms described in our Cookies Policy and Terms of Service.
            </p>
            <div className="space-y-6 text-sm">
              <section>
                <h2 className="text-lg font-semibold mb-2">1. WHAT INFORMATION WE COLLECT</h2>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Voluntarily provided:</strong> e.g., name, email address, phone number, company name, project details.</li>
                  <li><strong>Automatically collected (if applicable):</strong> e.g., IP address, browser type, website activity (e.g., via Google Analytics).</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">2. HOW WE USE YOUR INFORMATION</h2>
                <p className="mb-1">We use the information you provide to:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Respond to your inquiries and project requests.</li>
                  <li>Provide design services and project updates.</li>
                  <li>Send relevant information or proposals, if you agree.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">3. SHARING YOUR INFORMATION</h2>
                <p>
                  We do not sell or rent your personal data. We may share information with trusted third parties (e.g., subcontractors or service providers) strictly as needed to complete your projects—and only under confidentiality obligations.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">4. DATA SECURITY</h2>
                <p>
                  We implement reasonable administrative, technical, and physical safeguards to protect your information, in line with New York's SHIELD Act requirements LegalClarity.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">5. DATA RETENTION</h2>
                <p>
                  We keep your personal information only as long as necessary for business purposes or as required by law.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">6. YOUR RIGHTS</h2>
                <p className="mb-1">You may contact us to:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Access the personal data we hold about you.</li>
                  <li>Correct, update, or delete your personal information.</li>
                  <li>Opt-out of promotional emails.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">7. CHILDREN</h2>
                <p>
                  Our services are intended for adults. We do not knowingly collect information from children under 13. If we learn we have inadvertently collected such data, we will delete it promptly.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">8. CHANGES TO THIS POLICY</h2>
                <p>
                  We may update this policy occasionally. When we do, we'll post the new version here with a revised "Effective Date." Continued use of our services after changes implies acceptance.
                </p>
              </section>
            </div>
          </>
        );
      
      case "cookies":
        return (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center">COOKIES POLICY</h1>
            <p className="text-sm text-muted-foreground mb-6">
              <strong>Effective Date:</strong> September 9, 2025
            </p>
            <div className="mb-4">
              <h2 className="text-base font-semibold mb-2">CONTACT</h2>
              <p>
                For questions, thoughts, or collaboration inquiries, please reach out:
                <br />
                <strong>Email:</strong> Sol@social-light.studio
              </p>
            </div>
            <p className="mb-6">
              Welcome to SOCIAL-LIGHT. STUDIO. ("we," "our," "us"), owned and operated by SOCIAL-LIGHT. STUDIO. LLC, a New York Limited Liability Company. This space exists to share creative work and invite the possibility of collaboration. By engaging with our site, you agree to these Cookies Terms and terms described in our Privacy Policy and Terms of Service.
            </p>
            <p className="mb-6">
              Like most websites, SOCIAL-LIGHT. STUDIO. uses cookies — small text files stored on your device — to help the site run smoothly and to understand how visitors engage with the work shared here.
            </p>
            <div className="space-y-6 text-sm">
              <section>
                <h2 className="text-lg font-semibold mb-2">1. COOKIES</h2>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Essential cookies</strong> keep the site functional and secure.</li>
                  <li><strong>Analytics cookies</strong> (if enabled, e.g., Google Analytics) may help us see how visitors find and explore the site, so we can improve the experience.</li>
                  <li><strong>No tracking for sale:</strong> We do not sell or trade your information.</li>
                  <li>We only collect essential cookies.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">2. ENGAGEMENT</h2>
                <p>
                  Cookies here are a way to keep the site flowing and to make note of what resonates.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">3. CHANGES</h2>
                <p>
                  If we adjust how cookies are used, this policy will be updated with a new "Effective Date."
                </p>
              </section>
            </div>
          </>
        );
      
      case "terms":
        return (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center">TERMS OF SERVICE</h1>
            <p className="text-sm text-muted-foreground mb-6">
              <strong>Effective Date:</strong> September 9, 2025
            </p>
            <div className="mb-4">
              <h2 className="text-base font-semibold mb-2">CONTACT</h2>
              <p>
                For questions, thoughts, or collaboration inquiries, please reach out:
                <br />
                <strong>Email:</strong> Sol@social-light.studio
              </p>
            </div>
            <p className="mb-6">
              Welcome to SOCIAL-LIGHT. STUDIO. ("we," "our," "us"), owned and operated by SOCIAL-LIGHT. STUDIO. LLC, a New York Limited Liability Company. This space exists to share creative work and invite the possibility of collaboration. By engaging with our site, you agree to these Terms of Service and terms described in our Privacy Policy and Cookies Policy.
            </p>
            <div className="space-y-6 text-sm">
              <section>
                <h2 className="text-lg font-semibold mb-2">1. ACCEPTANCE OF TERMS</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">2. USE LICENSE</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials on SOCIAL-LIGHT. STUDIO's website for personal, non-commercial transitory viewing only.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">3. DISCLAIMER</h2>
                <p>
                  The materials on SOCIAL-LIGHT. STUDIO's website are provided on an 'as is' basis. SOCIAL-LIGHT. STUDIO makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">4. LIMITATIONS</h2>
                <p>
                  In no event shall SOCIAL-LIGHT. STUDIO or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SOCIAL-LIGHT. STUDIO's website.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">5. ACCURACY OF MATERIALS</h2>
                <p>
                  The materials appearing on SOCIAL-LIGHT. STUDIO's website could include technical, typographical, or photographic errors. SOCIAL-LIGHT. STUDIO does not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">6. LINKS</h2>
                <p>
                  SOCIAL-LIGHT. STUDIO has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SOCIAL-LIGHT. STUDIO of the site.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">7. MODIFICATIONS</h2>
                <p>
                  SOCIAL-LIGHT. STUDIO may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">8. GOVERNING LAW</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of New York and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </section>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-white text-black border-t border-border rounded-t-2xl shadow-2xl transform transition-all duration-1200 ease-in-out ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        style={{ height: '50vh' }}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
        </div>
        
        {/* Content */}
        <div className="h-full overflow-y-auto px-6 pb-6">
          <div className="max-w-4xl mx-auto">
            {getContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
