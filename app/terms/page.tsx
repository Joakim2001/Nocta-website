export const metadata = {
  title: "Terms of Use — Nocta",
  description: "Comprehensive terms and conditions for using Nocta services and platform.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 leading-7 text-white/90">
      <h1 className="text-4xl font-serif text-white mb-2">Terms of Use</h1>
      <p className="text-white/60 mb-8">Last updated: October 19, 2025</p>
      
      {/* Table of Contents */}
      <nav className="mb-12 p-6 bg-white/5 rounded-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Table of Contents</h2>
        <ol className="space-y-2 text-white/80">
          <li><a href="#acceptance" className="hover:text-white transition-colors">1. Acceptance of Use</a></li>
          <li><a href="#definitions" className="hover:text-white transition-colors">2. Definitions</a></li>
          <li><a href="#the-service" className="hover:text-white transition-colors">3. The Service</a></li>
          <li><a href="#grant-to-use" className="hover:text-white transition-colors">4. Grant to Use</a></li>
          <li><a href="#user-obligations" className="hover:text-white transition-colors">5. User's Obligations</a></li>
          <li><a href="#fees-payments" className="hover:text-white transition-colors">6. Fees & Payment Terms</a></li>
          <li><a href="#purchases" className="hover:text-white transition-colors">7. Purchase of Products or Services</a></li>
          <li><a href="#data-ownership" className="hover:text-white transition-colors">8. Ownership of Data</a></li>
          <li><a href="#support" className="hover:text-white transition-colors">9. Support</a></li>
          <li><a href="#monitoring" className="hover:text-white transition-colors">10. Monitoring</a></li>
          <li><a href="#changes" className="hover:text-white transition-colors">11. Changes to the Service</a></li>
          <li><a href="#intellectual-property" className="hover:text-white transition-colors">12. Intellectual Property Rights</a></li>
          <li><a href="#transfer" className="hover:text-white transition-colors">13. Transfer, Novation & Assignment</a></li>
          <li><a href="#termination" className="hover:text-white transition-colors">14. Termination</a></li>
          <li><a href="#disputes" className="hover:text-white transition-colors">15. Disputes & Choice of Law</a></li>
        </ol>
      </nav>

      <div className="space-y-12">
        {/* Section 1: Acceptance */}
        <section id="acceptance">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Use</h2>
          <div className="space-y-4">
            <p>
              Welcome to Nocta. These Terms of Use ("Terms") constitute a legally binding 
              agreement between you ("User," "you," or "your") and Nocta regarding your 
              access to and use of the Nocta website, applications, and services 
              (collectively, the "Service").
            </p>
            <p>
              By accessing, browsing, or using the Service, you acknowledge that you have 
              read, understood, and agree to be bound by these Terms, as well as our 
              <a href="/privacy" className="text-white hover:underline"> Privacy Policy</a> and 
              <a href="/cookies" className="text-white hover:underline"> Cookie Policy</a>, 
              which are incorporated herein by reference.
            </p>
            <p>
              <strong className="text-white">If you do not agree to these Terms, you must not 
              access or use the Service.</strong>
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access or use the Service. 
              By using the Service, you represent and warrant that you have the legal capacity 
              to enter into these Terms. If you are using the Service on behalf of an organization, 
              you represent that you have the authority to bind that organization to these Terms.
            </p>
          </div>
        </section>

        {/* Section 2: Definitions */}
        <section id="definitions">
          <h2 className="text-2xl font-semibold text-white mb-4">2. Definitions</h2>
          <div className="space-y-4">
            <p>For the purposes of these Terms, the following definitions apply:</p>
            <div className="bg-white/5 p-6 rounded-lg space-y-3">
              <p><strong className="text-white">"Service"</strong> means the Nocta website, mobile applications, 
              web applications, APIs, and all related services provided by Nocta.</p>
              
              <p><strong className="text-white">"User" or "You"</strong> means any individual or entity that 
              accesses or uses the Service.</p>
              
              <p><strong className="text-white">"Account"</strong> means the user account created to access 
              certain features of the Service.</p>
              
              <p><strong className="text-white">"Content"</strong> means any information, data, text, software, 
              music, sound, photographs, graphics, video, messages, or other materials.</p>
              
              <p><strong className="text-white">"User Content"</strong> means any Content that you submit, 
              upload, post, or otherwise make available through the Service.</p>
              
              <p><strong className="text-white">"Third-Party Services"</strong> means services, content, or 
              applications provided by third parties that may be accessed through the Service.</p>
              
              <p><strong className="text-white">"Intellectual Property Rights"</strong> means all patents, 
              copyrights, trademarks, trade secrets, and other intellectual property rights.</p>
            </div>
          </div>
        </section>

        {/* Section 3: The Service */}
        <section id="the-service">
          <h2 className="text-2xl font-semibold text-white mb-4">3. The Service</h2>
          <div className="space-y-4">
            <p>
              Nocta provides a platform designed for the nightlife and events industry, 
              offering tools and services that connect users with venues, events, and 
              entertainment experiences.
            </p>
            
            <h3 className="text-lg font-semibold text-white mt-6">3.1 Service Features</h3>
            <p>The Service may include, but is not limited to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Event discovery and information</li>
              <li>Venue information and reviews</li>
              <li>Ticket purchasing and management</li>
              <li>Membership applications and management</li>
              <li>User profiles and social features</li>
              <li>Booking and reservation services</li>
              <li>Communication tools between users and venues</li>
              <li>Payment processing services</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">3.2 Service Availability</h3>
            <p>
              We strive to provide continuous access to the Service, but we do not guarantee 
              that the Service will be available at all times or that it will be uninterrupted, 
              secure, or error-free. The Service may be subject to limitations, delays, and 
              other problems inherent in the use of the internet and electronic communications.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">3.3 Service Modifications</h3>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of the Service 
              at any time, with or without notice. We will not be liable to you or any third 
              party for any modification, suspension, or discontinuation of the Service.
            </p>
          </div>
        </section>

        {/* Section 4: Grant to Use */}
        <section id="grant-to-use">
          <h2 className="text-2xl font-semibold text-white mb-4">4. Grant to Use</h2>
          <div className="space-y-4">
            <p>
              Subject to your compliance with these Terms, Nocta grants you a limited, 
              non-exclusive, non-transferable, non-sublicensable, revocable license to access 
              and use the Service for your personal, non-commercial use.
            </p>
            
            <h3 className="text-lg font-semibold text-white mt-6">4.1 License Restrictions</h3>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Copy, modify, or create derivative works of the Service</li>
              <li>Reverse engineer, decompile, or disassemble any portion of the Service</li>
              <li>Rent, lease, lend, sell, sublicense, assign, distribute, or transfer the Service</li>
              <li>Remove, alter, or obscure any proprietary notices on the Service</li>
              <li>Use the Service for any commercial purpose without our prior written consent</li>
              <li>Access the Service through automated means (bots, scrapers, etc.) without authorization</li>
              <li>Circumvent any security measures or access restrictions</li>
              <li>Use the Service in any way that violates applicable laws or regulations</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">4.2 Commercial Use</h3>
            <p>
              If you wish to use the Service for commercial purposes, you must obtain our 
              prior written consent and may be required to enter into a separate commercial 
              agreement with us.
            </p>
          </div>
        </section>

        {/* Section 5: User Obligations */}
        <section id="user-obligations">
          <h2 className="text-2xl font-semibold text-white mb-4">5. User's Obligations</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">5.1 Account Registration</h3>
            <p>
              To access certain features of the Service, you may be required to create an 
              Account. When creating an Account, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your Account information</li>
              <li>Maintain the security and confidentiality of your login credentials</li>
              <li>Notify us immediately of any unauthorized use of your Account</li>
              <li>Accept responsibility for all activities that occur under your Account</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">5.2 Prohibited Conduct</h3>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violating any applicable laws, regulations, or third-party rights</li>
              <li>Impersonating any person or entity, or falsely stating or misrepresenting your affiliation</li>
              <li>Interfering with or disrupting the Service or servers or networks connected to the Service</li>
              <li>Attempting to gain unauthorized access to any portion of the Service</li>
              <li>Uploading or transmitting viruses, malware, or any other malicious code</li>
              <li>Collecting or harvesting any information from the Service without permission</li>
              <li>Harassing, threatening, or defaming any person or entity</li>
              <li>Posting or transmitting any unlawful, harmful, threatening, abusive, harassing, defamatory, 
              vulgar, obscene, or otherwise objectionable content</li>
              <li>Engaging in any activity that could damage, disable, or impair the Service</li>
              <li>Using the Service to transmit spam, chain letters, or other unsolicited communications</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">5.3 Compliance with Venue Rules</h3>
            <p>
              When attending events or venues accessed through the Service, you agree to 
              comply with all rules, regulations, and policies of the venue or event organizer. 
              Nocta is not responsible for enforcing venue rules or for any consequences 
              arising from your failure to comply with such rules.
            </p>
          </div>
        </section>

        {/* Section 6: Fees & Payments */}
        <section id="fees-payments">
          <h2 className="text-2xl font-semibold text-white mb-4">6. Fees & Payment Terms</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">6.1 Service Fees</h3>
            <p>
              Certain features of the Service may require payment of fees. All fees are 
              stated in the applicable currency and are non-refundable unless otherwise 
              specified in these Terms or required by law.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">6.2 Payment Authorization</h3>
            <p>
              By providing payment information, you authorize us (or our third-party payment 
              processors) to charge the applicable fees to your designated payment method. 
              You represent and warrant that you have the legal right to use any payment 
              method you provide.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">6.3 Payment Processing</h3>
            <p>
              Payment processing services are provided by third-party payment processors, 
              such as Stripe. By using these payment services, you agree to be bound by 
              their terms of service and privacy policies. We do not store your complete 
              payment card information on our servers.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">6.4 Service Fees and Charges</h3>
            <p>
              In addition to the price of products or services, you may be required to pay 
              service fees, processing fees, or other charges. All applicable fees will be 
              clearly disclosed before you complete a transaction.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">6.5 Price Changes</h3>
            <p>
              We reserve the right to change our fees at any time. If we change our fees, 
              we will provide notice of such changes through the Service or via email. 
              Your continued use of the Service after such notice constitutes your acceptance 
              of the new fees.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">6.6 Taxes</h3>
            <p>
              You are responsible for paying all taxes, duties, and other governmental 
              charges associated with your use of the Service. All fees stated are exclusive 
              of applicable taxes unless otherwise specified.
            </p>
          </div>
        </section>

        {/* Section 7: Purchases */}
        <section id="purchases">
          <h2 className="text-2xl font-semibold text-white mb-4">7. Purchase of Products or Services</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">7.1 Third-Party Transactions</h3>
            <p>
              When you purchase tickets, memberships, or other products or services through 
              the Service, you may be purchasing from third-party venues, event organizers, 
              or service providers ("Sellers"). In such cases, Nocta acts as a platform 
              facilitator and is not a party to the transaction between you and the Seller.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">7.2 Order Confirmation</h3>
            <p>
              After placing an order, you will receive a confirmation email. This confirmation 
              does not constitute our acceptance of your order. We reserve the right to refuse 
              or cancel any order for any reason, including but not limited to product or 
              service availability, errors in pricing or product information, or suspected 
              fraud or unauthorized transactions.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">7.3 Refunds and Cancellations</h3>
            <p>
              Refund and cancellation policies vary by Seller and product/service type. 
              All refund policies will be clearly stated at the time of purchase. Unless 
              otherwise required by law, all sales are final and non-refundable.
            </p>
            <p>
              For refund requests, you must contact the Seller directly or use the refund 
              request process provided through the Service. Nocta does not guarantee refunds 
              for third-party purchases.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">7.4 Ticket Terms</h3>
            <p>
              When purchasing tickets through the Service:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Tickets are valid only for the specified event, date, and venue</li>
              <li>Tickets may not be transferable or resalable depending on Seller policies</li>
              <li>Lost or stolen tickets may not be replaced</li>
              <li>You may be required to present valid identification at the venue</li>
              <li>Events may be subject to change, cancellation, or rescheduling</li>
              <li>Age restrictions and other venue rules apply</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">7.5 Delivery</h3>
            <p>
              Digital tickets and confirmations will be delivered electronically to your 
              Account and/or email address. You are responsible for ensuring that your 
              contact information is accurate and for checking your email (including spam 
              folders) for ticket delivery.
            </p>
          </div>
        </section>

        {/* Section 8: Data Ownership */}
        <section id="data-ownership">
          <h2 className="text-2xl font-semibold text-white mb-4">8. Ownership of Data</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">8.1 Your Data</h3>
            <p>
              You retain ownership of any User Content you submit to the Service. However, 
              by submitting User Content, you grant Nocta a worldwide, non-exclusive, 
              royalty-free, sublicensable, and transferable license to use, reproduce, 
              distribute, prepare derivative works of, display, and perform the User Content 
              in connection with the Service and Nocta's business operations.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">8.2 Data Sharing</h3>
            <p>
              When you use the Service to interact with venues, event organizers, or other 
              third parties, you acknowledge that your information may be shared with those 
              parties as necessary to provide the Service. Please refer to our 
              <a href="/privacy" className="text-white hover:underline"> Privacy Policy</a> for 
              more information about how we collect, use, and share your information.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">8.3 User Content Responsibilities</h3>
            <p>
              You are solely responsible for your User Content and the consequences of 
              posting or publishing it. You represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You own or have the necessary rights to your User Content</li>
              <li>Your User Content does not violate any third-party rights</li>
              <li>Your User Content complies with these Terms and applicable laws</li>
              <li>Your User Content does not contain any viruses or malicious code</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">8.4 Content Removal</h3>
            <p>
              We reserve the right, but are not obligated, to remove, edit, or disable 
              access to any User Content at any time and for any reason, including if we 
              determine that the User Content violates these Terms or applicable law, or 
              is otherwise objectionable.
            </p>
          </div>
        </section>

        {/* Section 9: Support */}
        <section id="support">
          <h2 className="text-2xl font-semibold text-white mb-4">9. Support</h2>
          <div className="space-y-4">
            <p>
              Nocta provides customer support through various channels, including email 
              and in-app support features. Support is provided on a reasonable-efforts 
              basis and we do not guarantee specific response times or resolutions.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">9.1 Contact Information</h3>
            <p>
              For support inquiries, please contact us at:
            </p>
            <div className="bg-white/5 p-6 rounded-lg mt-4">
              <p><strong className="text-white">Email:</strong> <a href="mailto:support@nocta.app" className="text-white hover:underline">support@nocta.app</a></p>
              <p className="mt-2"><strong className="text-white">Support Page:</strong> <a href="/support" className="text-white hover:underline">nocta.app/support</a></p>
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">9.2 Third-Party Support</h3>
            <p>
              For issues related to specific venues, events, or purchases, you may need 
              to contact the relevant third-party Seller directly. Nocta is not responsible 
              for providing support for third-party products or services.
            </p>
          </div>
        </section>

        {/* Section 10: Monitoring */}
        <section id="monitoring">
          <h2 className="text-2xl font-semibold text-white mb-4">10. Monitoring</h2>
          <div className="space-y-4">
            <p>
              We reserve the right, but are not obligated, to monitor use of the Service 
              and User Content for compliance with these Terms and applicable laws. We 
              may investigate any reported violation of these Terms and take any action 
              we deem appropriate, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Removing or disabling access to User Content</li>
              <li>Suspending or terminating user Accounts</li>
              <li>Reporting suspected illegal activity to law enforcement</li>
              <li>Taking legal action against users who violate these Terms</li>
            </ul>
            <p className="mt-4">
              However, we do not pre-screen User Content and cannot guarantee that all 
              content on the Service complies with these Terms. You use the Service at 
              your own risk.
            </p>
          </div>
        </section>

        {/* Section 11: Changes */}
        <section id="changes">
          <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to the Service</h2>
          <div className="space-y-4">
            <p>
              We reserve the right to modify, update, or discontinue the Service (or any 
              part thereof) at any time, with or without notice. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Adding or removing features or functionalities</li>
              <li>Changing the design, layout, or user interface</li>
              <li>Modifying technical requirements or supported platforms</li>
              <li>Updating pricing or fee structures</li>
              <li>Discontinuing support for certain devices or operating systems</li>
            </ul>
            <p className="mt-4">
              We will not be liable to you or any third party for any modification, 
              suspension, or discontinuation of the Service. Your continued use of the 
              Service after any such changes constitutes your acceptance of the new terms.
            </p>
          </div>
        </section>

        {/* Section 12: Intellectual Property */}
        <section id="intellectual-property">
          <h2 className="text-2xl font-semibold text-white mb-4">12. Intellectual Property Rights</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">12.1 Nocta's Intellectual Property</h3>
            <p>
              The Service and all materials included therein, including but not limited to 
              text, graphics, logos, icons, images, audio clips, video clips, data compilations, 
              software, and the compilation thereof (collectively, "Nocta Content"), are the 
              property of Nocta or its licensors and are protected by copyright, trademark, 
              patent, trade secret, and other intellectual property laws.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">12.2 Trademarks</h3>
            <p>
              "Nocta" and all related logos, product and service names, designs, and slogans 
              are trademarks of Nocta or its affiliates. You may not use such marks without 
              our prior written permission. Other trademarks, service marks, graphics, and 
              logos used in connection with the Service may be the trademarks of their 
              respective owners.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">12.3 Copyright Infringement</h3>
            <p>
              We respect the intellectual property rights of others and expect users to do 
              the same. If you believe that any content on the Service infringes your copyright, 
              please contact us at:
            </p>
            <div className="bg-white/5 p-6 rounded-lg mt-4">
              <p><strong className="text-white">Email:</strong> <a href="mailto:legal@nocta.app" className="text-white hover:underline">legal@nocta.app</a></p>
            </div>
            <p className="mt-4">
              Please include in your notice: (a) identification of the copyrighted work; 
              (b) identification of the allegedly infringing material; (c) your contact 
              information; (d) a statement of good faith belief that the use is not authorized; 
              and (e) a statement that the information is accurate and you are authorized to 
              act on behalf of the copyright owner.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">12.4 License to Use Feedback</h3>
            <p>
              If you provide us with any feedback, suggestions, or ideas about the Service 
              ("Feedback"), you grant us a worldwide, perpetual, irrevocable, royalty-free 
              license to use, modify, and incorporate such Feedback into the Service without 
              any obligation to you.
            </p>
          </div>
        </section>

        {/* Section 13: Transfer */}
        <section id="transfer">
          <h2 className="text-2xl font-semibold text-white mb-4">13. Transfer, Novation & Assignment</h2>
          <div className="space-y-4">
            <p>
              You may not assign, transfer, or sublicense these Terms or any of your rights 
              or obligations hereunder without our prior written consent. Any attempted 
              assignment in violation of this provision shall be null and void.
            </p>
            <p>
              We may assign, transfer, or delegate these Terms and our rights and obligations 
              hereunder at any time without your consent and without notice to you, including 
              in connection with a merger, acquisition, reorganization, sale of assets, or 
              by operation of law.
            </p>
            <p>
              These Terms will be binding upon and inure to the benefit of the parties and 
              their respective successors and permitted assigns.
            </p>
          </div>
        </section>

        {/* Section 14: Termination */}
        <section id="termination">
          <h2 className="text-2xl font-semibold text-white mb-4">14. Termination</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">14.1 Termination by You</h3>
            <p>
              You may terminate your Account and stop using the Service at any time by 
              contacting us at <a href="mailto:support@nocta.app" className="text-white hover:underline">support@nocta.app</a> or 
              through the Account settings in the Service.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">14.2 Termination by Us</h3>
            <p>
              We may suspend or terminate your access to the Service at any time, with or 
              without cause, with or without notice, including if:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You breach any provision of these Terms</li>
              <li>You engage in fraudulent or illegal activity</li>
              <li>Your Account has been inactive for an extended period</li>
              <li>We are required to do so by law</li>
              <li>We decide to discontinue the Service</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">14.3 Effect of Termination</h3>
            <p>
              Upon termination of your Account:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your right to use the Service will immediately cease</li>
              <li>We may delete your Account and User Content</li>
              <li>You will remain liable for all obligations incurred prior to termination</li>
              <li>Provisions that by their nature should survive termination will remain in effect</li>
            </ul>
            <p className="mt-4">
              Termination of your Account does not relieve you of any obligations to pay 
              outstanding fees or charges incurred prior to termination.
            </p>
          </div>
        </section>

        {/* Section 15: Disputes */}
        <section id="disputes">
          <h2 className="text-2xl font-semibold text-white mb-4">15. Disputes & Choice of Law</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">15.1 Governing Law</h3>
            <p>
              These Terms and any disputes arising out of or related to these Terms or the 
              Service shall be governed by and construed in accordance with the laws of the 
              applicable jurisdiction, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">15.2 Dispute Resolution</h3>
            <p>
              In the event of any dispute, claim, or controversy arising out of or relating 
              to these Terms or the Service, the parties agree to first attempt to resolve 
              the dispute through good faith negotiations.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">15.3 Jurisdiction and Venue</h3>
            <p>
              You agree that any legal action or proceeding arising out of or relating to 
              these Terms or the Service shall be brought exclusively in the courts of 
              competent jurisdiction in the applicable venue. You hereby consent to the 
              personal jurisdiction and venue of such courts.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">15.4 Limitation of Time to File Claims</h3>
            <p>
              Any claim or cause of action arising out of or related to the Service or these 
              Terms must be filed within one (1) year after such claim or cause of action 
              arose, or it shall be forever barred, notwithstanding any statute of limitations 
              or other law to the contrary.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">15.5 Class Action Waiver</h3>
            <p>
              To the extent permitted by law, you agree that any dispute resolution proceedings 
              will be conducted only on an individual basis and not in a class, consolidated, 
              or representative action. You waive any right to participate in a class action 
              lawsuit or class-wide arbitration.
            </p>
          </div>
        </section>

        {/* Disclaimers & Liability */}
        <section id="disclaimers" className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Disclaimers and Limitation of Liability</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Disclaimer of Warranties</h3>
            <p>
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES 
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES 
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE 
              OF PERFORMANCE.
            </p>
            <p>
              NOCTA DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, 
              THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICE OR THE SERVERS THAT MAKE IT 
              AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL NOCTA, ITS AFFILIATES, 
              DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF 
              PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED 
              TO YOUR USE OF THE SERVICE.
            </p>
            <p>
              IN NO EVENT SHALL NOCTA'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT 
              YOU PAID TO NOCTA IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE 
              LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless Nocta and its affiliates, 
              officers, directors, employees, agents, and licensors from and against any claims, 
              liabilities, damages, losses, costs, expenses, or fees (including reasonable 
              attorneys' fees) arising out of or relating to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your User Content</li>
            </ul>
          </div>
        </section>

        {/* General Provisions */}
        <section id="general" className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">General Provisions</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy and Cookie Policy, constitute 
              the entire agreement between you and Nocta regarding the Service and supersede 
              all prior agreements and understandings.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Severability</h3>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, that 
              provision shall be enforced to the maximum extent permissible, and the remaining 
              provisions shall remain in full force and effect.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Waiver</h3>
            <p>
              No waiver of any term of these Terms shall be deemed a further or continuing 
              waiver of such term or any other term. Our failure to enforce any right or 
              provision of these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Force Majeure</h3>
            <p>
              We shall not be liable for any failure or delay in performance due to causes 
              beyond our reasonable control, including acts of God, war, terrorism, riots, 
              embargoes, acts of civil or military authorities, fire, floods, accidents, 
              pandemics, strikes, or shortages of transportation facilities, fuel, energy, 
              labor, or materials.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6">Contact Information</h3>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-white/5 p-6 rounded-lg mt-4">
              <p><strong className="text-white">Email:</strong> <a href="mailto:legal@nocta.app" className="text-white hover:underline">legal@nocta.app</a></p>
              <p className="mt-2"><strong className="text-white">Support:</strong> <a href="mailto:support@nocta.app" className="text-white hover:underline">support@nocta.app</a></p>
            </div>
          </div>
      </section>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© {new Date().getFullYear()} Nocta. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
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




