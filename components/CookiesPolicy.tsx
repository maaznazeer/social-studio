"use client";
import Link from "next/link";


const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-10 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold mb-8 text-center">COOKIES POLICY</h1>
          
          <p className="text-sm text-muted-foreground mb-8">
            <strong>Effective Date:</strong> September 9, 2025
          </p>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">CONTACT</h2>
            <p>
              For questions, thoughts, or collaboration inquiries, please reach out:
              <br />
              <strong>Email:</strong> Sol@social-light.studio
            </p>
          </div>
          
          <p className="mb-8">
            Welcome to SOCIAL-LIGHT. STUDIO. ("we," "our," "us"), owned and operated by SOCIAL-LIGHT. STUDIO. LLC, a New York Limited Liability Company. This space exists to share creative work and invite the possibility of collaboration. By engaging with our site, you agree to these Cookies Terms and terms described in our Privacy Policy and Terms of Service.
          </p>

          <p className="mb-8">
            Like most websites, SOCIAL-LIGHT. STUDIO. uses cookies — small text files stored on your device — to help the site run smoothly and to understand how visitors engage with the work shared here.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. COOKIES</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential cookies</strong> keep the site functional and secure.</li>
                <li><strong>Analytics cookies</strong> (if enabled, e.g., Google Analytics) may help us see how visitors find and explore the site, so we can improve the experience.</li>
                <li><strong>No tracking for sale:</strong> We do not sell or trade your information.</li>
                <li>We only collect essential cookies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. ENGAGEMENT</h2>
              <p>
                Cookies here are a way to keep the site flowing and to make note of what resonates.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. CHANGES</h2>
              <p>
                If we adjust how cookies are used, this policy will be updated with a new "Effective Date."
              </p>
            </section>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CookiesPolicy;
