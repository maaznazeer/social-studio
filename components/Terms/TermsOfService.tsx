import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h2 className="text-2xl font-bold mb-8 text-center">Terms of Service</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-sm text-muted-foreground mb-8 text-[10px] font-bold">
            <strong>Effective Date:</strong> September 9, 2025
          </p>

          <div className="mb-8  bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[12px]">CONTACT</h2>
            <p className="text-[10px]">
              For questions, thoughts, or collaboration inquiries, please reach out:
            </p>
            <p className="mt-2 text-[10px]">
              <strong>Email:</strong> <a href="mailto:Sol@social-light.studio" className="text-primary hover:underline">Sol@social-light.studio</a>
            </p>
          </div>

          <p className="mb-8 text-[10px]">
            Welcome to <strong>SOCIAL-LIGHT. STUDIO.</strong> ("we," "our," "us"), owned and operated by SOCIAL-LIGHT. STUDIO. LLC, a New York Limited Liability Company. This space exists to share creative work and invite the possibility of collaboration. By engaging with our site, you agree to these Terms of Service and terms described in our Privacy and Cookies Policies.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[12px]">1. PURPOSE OF THIS SITE</h2>
            <p className="text-[10px]">
              This site is first and foremost a creative showcase — a place to share ideas, designs, and artistic work. While no immediate services are offered directly here, inquiries and collaborations are welcomed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[12px]">2. INQUIRIES + COLLABORATIONS</h2>
            <p className="text-[10px]">
              You are free to reach out if the work inspires dialogue, feedback, or the potential for collaboration. Please note: an inquiry or exchange does not create a formal client relationship unless separately agreed in writing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[12px]">3. INTELLECTUAL PROPERTY</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-[10px]">
                All works displayed — images, text, designs, and creative concepts — are the property of SOCIAL-LIGHT. STUDIO. unless otherwise credited.
              </li>
              <li className="text-[10px]">
                You may enjoy and be inspired by the work, but you may not copy, reproduce, or distribute it without prior written consent.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[12px]">4. NO GUARANTEES</h2>
            <p className="text-[10px]">
              This site is offered as a living archive of creative exploration. While we strive to keep it accessible and up to date, we make no guarantees regarding availability or completeness.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[12px]">5. LIMITATION OF LIABILITY</h2>
            <p className="text-[10px]">
              By using this site, you agree that SOCIAL-LIGHT. STUDIO. is not responsible for any losses or damages, direct or indirect, that may result from your use of the site or its content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[12px]">6. GOVERNING LAW</h2>
            <p className="text-[10px]">
              These Terms are governed by the laws of the State of New York, USA.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[12px] ">7. UPDATES</h2>
            <p className="text-[10px]">
              We may revise these Terms occasionally. Updates will be posted here with a new "Effective Date."
            </p>
          </section>
        </div>

       
      </div>
      
    </div>
  );
}
