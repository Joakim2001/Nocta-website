export const metadata = {
  title: "Privacy Policy — Nocta",
  description: "Comprehensive privacy policy for Nocta services and platform.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 leading-7 text-white/90">
      <h1 className="text-4xl font-serif text-white mb-2">Privacy Policy</h1>
      <p className="text-white/60 mb-8">Last updated: October 19, 2025</p>
      
      {/* Table of Contents */}
      <nav className="mb-12 p-6 bg-white/5 rounded-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Table of Contents</h2>
        <ol className="space-y-2 text-white/80">
          <li><a href="#introduction" className="hover:text-white transition-colors">1. Introduction</a></li>
          <li><a href="#information-about-us" className="hover:text-white transition-colors">2. Information About Us</a></li>
          <li><a href="#information-collection" className="hover:text-white transition-colors">3. Information Collection</a></li>
          <li><a href="#information-use" className="hover:text-white transition-colors">4. Information Use</a></li>
          <li><a href="#information-sharing" className="hover:text-white transition-colors">5. Information Sharing, Retention & Disclosure</a></li>
          <li><a href="#data-storage" className="hover:text-white transition-colors">6. Data Storage</a></li>
          <li><a href="#third-party-links" className="hover:text-white transition-colors">7. Links To Third Party Sites</a></li>
          <li><a href="#security" className="hover:text-white transition-colors">8. Confidentiality & Security</a></li>
          <li><a href="#accessing-data" className="hover:text-white transition-colors">9. Accessing, Reviewing And Changing Your Personal Information</a></li>
          <li><a href="#user-rights" className="hover:text-white transition-colors">10. Your Rights</a></li>
          <li><a href="#policy-changes" className="hover:text-white transition-colors">11. Changes To This Privacy Policy</a></li>
          <li><a href="#cookies" className="hover:text-white transition-colors">12. Cookies</a></li>
          <li><a href="#law-venue" className="hover:text-white transition-colors">13. Law & Venue</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">14. Contact</a></li>
          <li><a href="#consent" className="hover:text-white transition-colors">15. Your Consent</a></li>
        </ol>
      </nav>

      <div className="space-y-12">
        {/* Section 1: Introduction */}
        <section id="introduction">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
          <div className="space-y-4">
            <p>
              Welcome to Nocta. We are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how 
              we collect, use, disclose, and safeguard your information when you use our 
              services, website, and applications.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms 
              of this Privacy Policy, please do not access or use our services. By accessing 
              or using our services, you acknowledge that you have read, understood, and 
              agree to be bound by this Privacy Policy.
            </p>
          </div>
        </section>

        {/* Section 2: Information About Us */}
        <section id="information-about-us">
          <h2 className="text-2xl font-semibold text-white mb-4">2. Information About Us</h2>
          <div className="space-y-4">
            <p>
              Nocta is a platform designed to provide innovative solutions for the nightlife 
              and events industry. We operate as the data controller for the personal 
              information we collect through our services.
            </p>
            <p>
              For the purposes of data protection legislation, Nocta is the entity responsible 
              for processing your personal data as described in this Privacy Policy.
            </p>
          </div>
        </section>

        {/* Section 3: Information Collection */}
        <section id="information-collection">
          <h2 className="text-2xl font-semibold text-white mb-4">3. Information Collection</h2>
          <div className="space-y-4">
            <p>
              We collect information that you provide directly to us, information we obtain 
              automatically when you use our services, and information from third-party sources.
            </p>
            
            <h3 className="text-lg font-semibold text-white mt-6">3.1 Information You Provide</h3>
            <p>We collect the following information when you use our services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Account information: name, email address, phone number, date of birth</li>
              <li>Profile information: photos, preferences, and other optional details</li>
              <li>Communication data: messages, feedback, and support inquiries</li>
              <li>Payment information: billing details and transaction history (processed securely through third-party payment processors)</li>
              <li>Identity verification data: when required, such as government-issued ID information</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">3.2 Automatically Collected Information</h3>
            <p>When you access our services, we automatically collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Device information: IP address, browser type, operating system, device identifiers</li>
              <li>Usage data: pages viewed, features used, time spent, click patterns</li>
              <li>Location data: with your permission, approximate or precise location information</li>
              <li>Cookies and similar technologies: see our Cookie Policy for more details</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">3.3 Third-Party Information</h3>
            <p>
              We may receive information about you from third parties, such as social media 
              platforms when you connect your account, or from our business partners and service providers.
            </p>
          </div>
        </section>

        {/* Section 4: Information Use */}
        <section id="information-use">
          <h2 className="text-2xl font-semibold text-white mb-4">4. Information Use</h2>
          <div className="space-y-4">
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Provision:</strong> To provide, maintain, and improve our services</li>
              <li><strong>Account Management:</strong> To create and manage your account</li>
              <li><strong>Communications:</strong> To send you updates, security alerts, and support messages</li>
              <li><strong>Personalization:</strong> To customize your experience and provide relevant content</li>
              <li><strong>Marketing:</strong> With your consent, to send promotional materials about our services</li>
              <li><strong>Analytics:</strong> To understand how users interact with our services and improve functionality</li>
              <li><strong>Security:</strong> To detect, prevent, and address fraud, abuse, and security issues</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our legal rights</li>
              <li><strong>Transactions:</strong> To process payments and fulfill orders</li>
            </ul>
          </div>
        </section>

        {/* Section 5: Information Sharing */}
        <section id="information-sharing">
          <h2 className="text-2xl font-semibold text-white mb-4">5. Information Sharing, Retention & Disclosure</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mt-6">5.1 Information Sharing</h3>
            <p>We do not sell your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our services (e.g., hosting, analytics, payment processing)</li>
              <li><strong>Business Partners:</strong> With venues, event organizers, or other partners when you use our services to interact with them</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or legal process</li>
              <li><strong>Safety & Rights Protection:</strong> To protect the rights, property, and safety of Nocta, our users, or others</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">5.2 Data Retention</h3>
            <p>
              We retain your personal information only for as long as necessary to fulfill the 
              purposes outlined in this Privacy Policy, unless a longer retention period is 
              required or permitted by law. When determining retention periods, we consider:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The nature and sensitivity of the information</li>
              <li>The purposes for which we process the information</li>
              <li>Legal, regulatory, and accounting requirements</li>
              <li>Our legitimate business interests</li>
            </ul>
            <p className="mt-4">
              We automatically delete inactive accounts after 3 years of no activity. You may 
              request earlier deletion of your account at any time (subject to certain legal 
              exceptions).
            </p>
          </div>
        </section>

        {/* Section 6: Data Storage */}
        <section id="data-storage">
          <h2 className="text-2xl font-semibold text-white mb-4">6. Data Storage</h2>
          <div className="space-y-4">
            <p>
              Your personal information is stored on secure servers provided by reputable 
              third-party service providers. We use industry-standard security measures to 
              protect your data, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure data storage with encryption at rest</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security assessments and updates</li>
              <li>Data backup and disaster recovery procedures</li>
            </ul>
            <p className="mt-4">
              Please note that data may be stored in multiple geographic locations to ensure 
              service reliability and performance. We ensure that all data transfers comply 
              with applicable data protection laws.
            </p>
          </div>
        </section>

        {/* Section 7: Third Party Links */}
        <section id="third-party-links">
          <h2 className="text-2xl font-semibold text-white mb-4">7. Links To Third Party Sites</h2>
          <div className="space-y-4">
            <p>
              Our services may contain links to third-party websites, applications, or services 
              that are not operated by us. This Privacy Policy does not apply to third-party 
              sites, and we are not responsible for their privacy practices.
            </p>
            <p>
              We encourage you to review the privacy policies of any third-party sites you visit. 
              Your interactions with third-party sites are governed by their respective privacy 
              policies and terms of service.
            </p>
          </div>
        </section>

        {/* Section 8: Security */}
        <section id="security">
          <h2 className="text-2xl font-semibold text-white mb-4">8. Confidentiality & Security</h2>
          <div className="space-y-4">
            <p>
              We take the security of your personal information seriously and implement 
              appropriate technical and organizational measures to protect it against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p>
              However, no method of transmission over the internet or electronic storage is 
              100% secure. While we strive to use commercially acceptable means to protect 
              your information, we cannot guarantee its absolute security.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your account 
              credentials. Please notify us immediately if you become aware of any unauthorized 
              access to your account.
            </p>
          </div>
        </section>

        {/* Section 9: Accessing Data */}
        <section id="accessing-data">
          <h2 className="text-2xl font-semibold text-white mb-4">9. Accessing, Reviewing And Changing Your Personal Information</h2>
          <div className="space-y-4">
            <p>
              You have the right to access, review, and update your personal information at 
              any time. You can do this by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Logging into your account and accessing your profile settings</li>
              <li>Contacting us directly at <a href="mailto:privacy@nocta.app" className="text-white hover:underline">privacy@nocta.app</a></li>
            </ul>
            <p className="mt-4">
              We will respond to your request within a reasonable timeframe and in accordance 
              with applicable data protection laws. We may need to verify your identity before 
              processing your request.
            </p>
          </div>
        </section>

        {/* Section 10: User Rights */}
        <section id="user-rights">
          <h2 className="text-2xl font-semibold text-white mb-4">10. Your Rights</h2>
          <div className="space-y-4">
            <p>
              Depending on your location and applicable laws, you may have the following rights 
              regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Right of Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal information (subject to legal exceptions)</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of how we process your information</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your information to another service provider</li>
              <li><strong>Right to Object:</strong> Object to processing of your information for certain purposes</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing based on consent</li>
              <li><strong>Right to Lodge a Complaint:</strong> File a complaint with a data protection authority</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:privacy@nocta.app" className="text-white hover:underline">privacy@nocta.app</a>. 
              We will respond to your request in accordance with applicable data protection laws.
            </p>
            <p>
              Please note that certain legal exceptions may apply, such as when we need to 
              retain information to comply with legal obligations or to establish, exercise, 
              or defend legal claims.
            </p>
          </div>
        </section>

        {/* Section 11: Policy Changes */}
        <section id="policy-changes">
          <h2 className="text-2xl font-semibold text-white mb-4">11. Changes To This Privacy Policy</h2>
          <div className="space-y-4">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our 
              practices, technology, legal requirements, or other factors. When we make 
              material changes, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Update the "Last updated" date at the top of this page</li>
              <li>Notify you through our services or via email</li>
              <li>Obtain your consent if required by applicable law</li>
            </ul>
            <p className="mt-4">
              We encourage you to review this Privacy Policy periodically to stay informed 
              about how we protect your information. Your continued use of our services after 
              changes are posted constitutes your acceptance of the updated Privacy Policy.
            </p>
          </div>
        </section>

        {/* Section 12: Cookies */}
        <section id="cookies">
          <h2 className="text-2xl font-semibold text-white mb-4">12. Cookies</h2>
          <div className="space-y-4">
            <p>
              We use cookies and similar tracking technologies to enhance your experience, 
              analyze usage patterns, and deliver personalized content. Cookies are small 
              text files stored on your device that help us recognize you and remember your 
              preferences.
            </p>
            
            <h3 className="text-lg font-semibold text-white mt-6">Types of Cookies We Use:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our services</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and personalize your experience</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
            </ul>

            <p className="mt-4">
              You can control cookies through your browser settings. However, disabling certain 
              cookies may limit your ability to use some features of our services. For more 
              detailed information, please see our <a href="/cookies" className="text-white hover:underline">Cookie Policy</a>.
            </p>
          </div>
        </section>

        {/* Section 13: Law & Venue */}
        <section id="law-venue">
          <h2 className="text-2xl font-semibold text-white mb-4">13. Law & Venue</h2>
          <div className="space-y-4">
            <p>
              This Privacy Policy and any disputes arising from it shall be governed by and 
              construed in accordance with applicable data protection laws and regulations, 
              including but not limited to the General Data Protection Regulation (GDPR) where 
              applicable.
            </p>
            <p>
              Any disputes relating to this Privacy Policy shall be subject to the exclusive 
              jurisdiction of the courts in the relevant jurisdiction, as determined by applicable law.
            </p>
          </div>
        </section>

        {/* Section 14: Contact */}
        <section id="contact">
          <h2 className="text-2xl font-semibold text-white mb-4">14. Contact</h2>
          <div className="space-y-4">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy 
              or our data practices, please contact us:
            </p>
            <div className="bg-white/5 p-6 rounded-lg mt-4">
              <p><strong className="text-white">Email:</strong> <a href="mailto:privacy@nocta.app" className="text-white hover:underline">privacy@nocta.app</a></p>
              <p className="mt-2"><strong className="text-white">Support:</strong> <a href="mailto:support@nocta.app" className="text-white hover:underline">support@nocta.app</a></p>
            </div>
            <p className="mt-4">
              We will respond to your inquiry as soon as possible, typically within 30 days. 
              For urgent privacy matters, please indicate this in your message subject line.
            </p>
          </div>
        </section>

        {/* Section 15: Consent */}
        <section id="consent">
          <h2 className="text-2xl font-semibold text-white mb-4">15. Your Consent</h2>
          <div className="space-y-4">
            <p>
              By using our services, you acknowledge that you have read and understood this 
              Privacy Policy and consent to the collection, use, and disclosure of your 
              personal information as described herein.
            </p>
            <p>
              If you do not agree with any part of this Privacy Policy, you should not use 
              our services. You may withdraw your consent at any time by contacting us, 
              subject to legal or contractual restrictions.
            </p>
            <p className="mt-6 p-4 bg-white/5 rounded-lg border-l-4 border-white/20">
              <strong className="text-white">Note:</strong> For certain processing activities, 
              we may rely on legal bases other than consent, such as contractual necessity, 
              legal obligations, or legitimate interests. In such cases, withdrawal of consent 
              may not affect the lawfulness of processing based on these other legal grounds.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© {new Date().getFullYear()} Nocta. All rights reserved.</p>
          <p className="mt-2">
            <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
            {' · '}
            <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            {' · '}
            <a href="/support" className="hover:text-white transition-colors">Support</a>
          </p>
        </div>
      </div>
    </main>
  );
}




