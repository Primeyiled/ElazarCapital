import Footer from "@/components/Footer";
import Heading from "@/components/Heading";

export const metadata = {
  title: "Privacy Policy - ElazarCapital",
  description:
    "Learn how ElazarCapital collects, uses, and protects your personal information. Our privacy policy is designed to keep your data safe and secure at all times.",
};
const page = () => {
  return (
    <div>
      <div>
        <Heading
          page="Privacy Policy"
          title="Explore Our Privacy Policy"
          tab="Privacy Policy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="prose prose-lg max-w-none">
          {/* <h1 className="text-3xl font-bold mb-6">ElazarCapital Privacy Policy</h1> */}
          <p className="text-gray-600 mb-8">Last Updated: 15 July 2025</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              ElazarCapital is a private equity firm committed to protecting investor interests and upholding market integrity. This Privacy Policy applies to information collected through:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>ElazarCapital websites, mobile apps, and digital platforms (collectively, "Sites")</li>
              <li>Offline interactions (e.g., phone calls, paper forms)</li>
            </ul>
            <p className="mt-4">
              By using our Sites, you consent to the practices described in this policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p>We may collect the following <strong>Personal Information</strong> (data that identifies or relates to you):</p>
            
            <h3 className="text-xl font-medium mt-4 mb-2">A. Directly Provided by You:</h3>
            <ul className="list-disc pl-6">
              <li><strong>Contact Details:</strong> Name, email, phone, business/home address</li>
              <li><strong>Professional Data:</strong> Employment history, credentials, financial account details</li>
              <li><strong>Government IDs:</strong> Social Security Number, passport (where legally required)</li>
              <li><strong>Transaction Data:</strong> Billing/payment information</li>
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">B. Automatically Collected:</h3>
            <ul className="list-disc pl-6">
              <li><strong>Device/Usage Data:</strong> IP address, browser type, cookies (see Section 7)</li>
              <li><strong>Activity Logs:</strong> Pages visited, links clicked, time spent on Sites</li>
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">C. From Third Parties:</h3>
            <p>Regulatory agencies, public databases, or partners (e.g., KYC verification)</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We process your data for:</p>
            <ul className="list-disc pl-6">
              <li><strong>Regulatory Compliance:</strong> Membership verification, fraud prevention, and legal obligations</li>
              <li><strong>Service Delivery:</strong> Processing transactions, responding to inquiries</li>
              <li><strong>Site Improvement:</strong> Personalizing user experience and analyzing trends</li>
              <li><strong>Security:</strong> Protecting against unauthorized access or cyber threats</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
            <p>We <strong>do not sell</strong> your data. Disclosures are limited to:</p>
            <ul className="list-disc pl-6">
              <li><strong>Service Providers:</strong> Vendors assisting with IT, analytics, or compliance (bound by confidentiality)</li>
              <li><strong>Legal Requirements:</strong> To comply with laws, court orders, or regulatory requests</li>
              <li><strong>Business Transfers:</strong> In mergers/acquisitions (with confidentiality safeguards)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>
              We implement <strong>technical</strong> (encryption), <strong>administrative</strong> (access controls), and <strong>physical</strong> safeguards to protect your data. Despite this, no system is 100% secure—promptly report suspicious activity to [Security Contact Email].
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p>
              We retain Personal Information only as long as necessary for:
            </p>
            <ul className="list-disc pl-6">
              <li>Fulfilling the purposes outlined in this policy</li>
              <li>Complying with legal, tax, or regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">7. Cookies & Tracking Technologies</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6">
              <li>Enhance Site functionality and performance</li>
              <li>Secure accounts (e.g., preventing fraudulent logins)</li>
              <li>Analyze aggregated usage patterns (no marketing profiling)</li>
            </ul>
            <p className="mt-4">
              <strong>Your Choices:</strong> Adjust browser settings to block cookies, but some Site features may be affected.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
            <p>
              Our Sites may link to external websites. We are not responsible for their privacy practices. Review their policies before sharing data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p>
              Our Sites are <strong>not directed</strong> at children under 13. We do not knowingly collect their data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">10. Your Rights (GDPR/CCPA Compliance)</h2>
            <p>Depending on residency, you may have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access, correct, or delete your Personal Information</li>
              <li>Opt out of data processing (where applicable)</li>
              <li>Lodge complaints with a supervisory authority</li>
            </ul>
            <p className="mt-4">
              <strong>Requests:</strong> Contact support@elazarcapital.org with proof of identity.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">11. International Data Transfers</h2>
            <p>
              Data may be transferred globally, including outside your country of residence. We ensure protections via:
            </p>
            <ul className="list-disc pl-6">
              <li>Standard contractual clauses (EU transfers)</li>
              <li>Vendor compliance with applicable laws</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">12. Policy Updates</h2>
            <p>
              We may revise this policy periodically. Changes will be posted on our Sites with an updated "Last Revised" date. Continued use constitutes acceptance.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;