import Link from "next/link";

export const metadata = {
  title: "Legal — OPIC",
  description: "Legal documents and policies for OPIC services and platform.",
};

export default function LegalPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 leading-7 text-white/90">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Legal Documents</h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          We believe in transparency. Below you'll find all our legal documents 
          explained in plain language, so you know exactly how we operate and 
          protect your rights.
        </p>
      </div>

      {/* Key Highlights */}
      <section className="mb-16 bg-white/5 rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-6">Key Things You Should Know</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="text-2xl">🔒</div>
            <div>
              <h3 className="font-semibold text-white mb-1">Your data is protected</h3>
              <p className="text-white/70 text-sm">We use industry-standard security measures and never sell your personal information to third parties.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl">✅</div>
            <div>
              <h3 className="font-semibold text-white mb-1">You're in control</h3>
              <p className="text-white/70 text-sm">Access, update, or delete your personal information at any time through your account settings.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl">🍪</div>
            <div>
              <h3 className="font-semibold text-white mb-1">Cookies for better experience</h3>
              <p className="text-white/70 text-sm">We use cookies to improve functionality and analyze usage, but you can control them in your browser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Documents Cards */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-white mb-8">Our Legal Documents</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Privacy Policy Card */}
          <Link href="/privacy" className="group block">
            <div className="h-full bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-opic-gradient transition-all">
                Privacy Policy
              </h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                Learn how we collect, use, protect, and share your personal information. 
                Understand your privacy rights and how to exercise them.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">Updated: Oct 19, 2025</span>
                <span className="text-white/50">~8 min read</span>
              </div>
              <div className="mt-4 text-white/80 group-hover:text-white flex items-center gap-2 transition-colors">
                Read full policy
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Terms of Use Card */}
          <Link href="/terms" className="group block">
            <div className="h-full bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-opic-gradient transition-all">
                Terms of Use
              </h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                The rules and guidelines for using OPIC services. Covers user obligations, 
                acceptable use, and our service guarantees.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">Updated: Oct 19, 2025</span>
                <span className="text-white/50">~10 min read</span>
              </div>
              <div className="mt-4 text-white/80 group-hover:text-white flex items-center gap-2 transition-colors">
                Read full terms
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Cookie Policy Card */}
          <Link href="/cookies" className="group block">
            <div className="h-full bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl mb-4">🍪</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-opic-gradient transition-all">
                Cookie Policy
              </h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                Understand what cookies we use, why we use them, and how you can 
                manage your cookie preferences.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">Updated: Oct 19, 2025</span>
                <span className="text-white/50">~5 min read</span>
              </div>
              <div className="mt-4 text-white/80 group-hover:text-white flex items-center gap-2 transition-colors">
                Read cookie policy
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Master Table of Contents */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-white mb-8">Complete Document Index</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Privacy Policy TOC */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">📋 Privacy Policy</h3>
            <ol className="space-y-2 text-sm text-white/70">
              <li><a href="/privacy#introduction" className="hover:text-white transition-colors">1. Introduction</a></li>
              <li><a href="/privacy#information-about-us" className="hover:text-white transition-colors">2. Information About Us</a></li>
              <li><a href="/privacy#information-collection" className="hover:text-white transition-colors">3. Information Collection</a></li>
              <li><a href="/privacy#information-use" className="hover:text-white transition-colors">4. Information Use</a></li>
              <li><a href="/privacy#information-sharing" className="hover:text-white transition-colors">5. Information Sharing & Retention</a></li>
              <li><a href="/privacy#data-storage" className="hover:text-white transition-colors">6. Data Storage</a></li>
              <li><a href="/privacy#third-party-links" className="hover:text-white transition-colors">7. Links To Third Party Sites</a></li>
              <li><a href="/privacy#security" className="hover:text-white transition-colors">8. Confidentiality & Security</a></li>
              <li><a href="/privacy#accessing-data" className="hover:text-white transition-colors">9. Accessing Your Information</a></li>
              <li><a href="/privacy#user-rights" className="hover:text-white transition-colors">10. Your Rights</a></li>
              <li><a href="/privacy#policy-changes" className="hover:text-white transition-colors">11. Changes To This Policy</a></li>
              <li><a href="/privacy#cookies" className="hover:text-white transition-colors">12. Cookies</a></li>
              <li><a href="/privacy#law-venue" className="hover:text-white transition-colors">13. Law & Venue</a></li>
              <li><a href="/privacy#contact" className="hover:text-white transition-colors">14. Contact</a></li>
              <li><a href="/privacy#consent" className="hover:text-white transition-colors">15. Your Consent</a></li>
            </ol>
          </div>

          {/* Terms of Use TOC */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">⚖️ Terms of Use</h3>
            <ol className="space-y-2 text-sm text-white/70">
              <li><a href="/terms#acceptance" className="hover:text-white transition-colors">1. Acceptance of Use</a></li>
              <li><a href="/terms#definitions" className="hover:text-white transition-colors">2. Definitions</a></li>
              <li><a href="/terms#the-service" className="hover:text-white transition-colors">3. The Service</a></li>
              <li><a href="/terms#grant-to-use" className="hover:text-white transition-colors">4. Grant to Use</a></li>
              <li><a href="/terms#user-obligations" className="hover:text-white transition-colors">5. User's Obligations</a></li>
              <li><a href="/terms#fees-payments" className="hover:text-white transition-colors">6. Fees & Payment Terms</a></li>
              <li><a href="/terms#purchases" className="hover:text-white transition-colors">7. Purchase of Products/Services</a></li>
              <li><a href="/terms#data-ownership" className="hover:text-white transition-colors">8. Ownership of Data</a></li>
              <li><a href="/terms#support" className="hover:text-white transition-colors">9. Support</a></li>
              <li><a href="/terms#monitoring" className="hover:text-white transition-colors">10. Monitoring</a></li>
              <li><a href="/terms#changes" className="hover:text-white transition-colors">11. Changes to the Service</a></li>
              <li><a href="/terms#intellectual-property" className="hover:text-white transition-colors">12. Intellectual Property Rights</a></li>
              <li><a href="/terms#transfer" className="hover:text-white transition-colors">13. Transfer & Assignment</a></li>
              <li><a href="/terms#termination" className="hover:text-white transition-colors">14. Termination</a></li>
              <li><a href="/terms#disputes" className="hover:text-white transition-colors">15. Disputes & Choice of Law</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">How do I delete my account and data?</h3>
            <p className="text-white/70 text-sm">
              You can request account deletion by emailing <a href="mailto:support@opic-app.com" className="text-white hover:underline">support@opic-app.com</a> from 
              your registered email address, or through your account settings. We'll process your request within 30 days. 
              In some cases, we may need to retain certain information for legal compliance (see our Privacy Policy for details).
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Do you share my information with third parties?</h3>
            <p className="text-white/70 text-sm">
              We do not sell your personal information. We only share your data with trusted service providers who help us 
              operate our services (like payment processors), with venues or event organizers when you interact with them 
              through our platform, or when required by law. All data sharing is described in our Privacy Policy.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Can I get a refund for tickets or memberships?</h3>
            <p className="text-white/70 text-sm">
              Refund policies vary by venue and event organizer. When you purchase tickets or memberships, you're buying 
              from the venue/organizer directly (OPIC acts as a platform facilitator). Please contact the venue or check 
              the refund policy shown at the time of purchase. For assistance, contact <a href="mailto:support@opic-app.com" className="text-white hover:underline">support@opic-app.com</a>.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">What happens if I violate the Terms of Use?</h3>
            <p className="text-white/70 text-sm">
              Violations may result in warnings, suspension, or termination of your account, depending on the severity. 
              We reserve the right to remove content, suspend access, or take legal action if necessary. Serious violations 
              (fraud, illegal activity) may be reported to law enforcement.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">How do I manage my cookie preferences?</h3>
            <p className="text-white/70 text-sm">
              You can manage cookies through your browser settings. Most browsers allow you to block or delete cookies. 
              However, some features of our service may not work properly if you disable cookies. See our Cookie Policy 
              for detailed instructions for different browsers.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Will I be notified of changes to these policies?</h3>
            <p className="text-white/70 text-sm">
              Yes. We'll notify you of material changes through the service or via email. The "Last updated" date at the 
              top of each document will always reflect the most recent changes. We encourage you to review our policies 
              periodically to stay informed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-white mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-2xl mb-3">📧</div>
            <h3 className="text-lg font-semibold text-white mb-2">Legal Inquiries</h3>
            <p className="text-white/70 text-sm mb-3">For questions about our legal documents or policies</p>
            <a href="mailto:support@opic-app.com" className="text-white hover:underline">support@opic-app.com</a>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-2xl mb-3">🔒</div>
            <h3 className="text-lg font-semibold text-white mb-2">Privacy Matters</h3>
            <p className="text-white/70 text-sm mb-3">Data requests, privacy concerns, or GDPR inquiries</p>
            <a href="mailto:support@opic-app.com" className="text-white hover:underline">support@opic-app.com</a>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-2xl mb-3">💬</div>
            <h3 className="text-lg font-semibold text-white mb-2">General Support</h3>
            <p className="text-white/70 text-sm mb-3">Account help, technical issues, or general questions</p>
            <a href="mailto:support@opic-app.com" className="text-white hover:underline">support@opic-app.com</a>
          </div>
        </div>
        <p className="text-center text-white/60 text-sm mt-8">
          We typically respond to inquiries within 2-3 business days. For urgent privacy matters, 
          please indicate "URGENT" in your email subject line.
        </p>
      </section>

      {/* Footer Note */}
      <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10">
        <p className="text-white/70 text-sm leading-relaxed">
          These legal documents are provided for transparency and to help you understand your rights and 
          obligations when using OPIC. If you have any questions or concerns, please don't hesitate to 
          reach out to us. We're here to help.
        </p>
        <p className="text-white/60 text-xs mt-4">
          Last updated: October 19, 2025
        </p>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-12">
        <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}

