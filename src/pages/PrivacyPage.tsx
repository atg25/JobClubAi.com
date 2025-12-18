import { Container } from "../components/Container";

export default function PrivacyPage() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="glass-card rounded-2xl p-8 lg:p-12 text-white">
            <h1 className="text-4xl font-bold mb-6 page-h1">Privacy Policy</h1>

            <p className="text-slate-300 mb-6">
              <strong>Last Updated:</strong> December 17, 2025
            </p>

            <p className="mb-6 leading-relaxed">
              AInspire Job Club ("we," "us," or "our") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website and use our services. This policy complies with
              the General Data Protection Regulation (GDPR) and other applicable
              privacy laws.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-400">
              1.1 Information You Provide
            </h3>
            <p className="mb-4 leading-relaxed">
              When you interact with our website or services, you may provide:
            </p>
            <ul className="list-disc ml-6 mb-4 text-slate-300 space-y-2">
              <li>
                <strong>Registration Information:</strong> Name, email address,
                NJIT student ID, graduation year, and major when joining the
                club
              </li>
              <li>
                <strong>Event Registration Data:</strong> Information submitted
                when registering for workshops and events
              </li>
              <li>
                <strong>Communication Data:</strong> Messages sent to us via
                email or contact forms
              </li>
              <li>
                <strong>Profile Information:</strong> Any additional information
                you choose to provide in your member profile
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-400">
              1.2 Automatically Collected Information
            </h3>
            <ul className="list-disc ml-6 mb-4 text-slate-300 space-y-2">
              <li>
                <strong>Analytics Data:</strong> Page views, session duration,
                referring URLs, device type, and browser information (only with
                your consent via Google Analytics)
              </li>
              <li>
                <strong>Cookies:</strong> Essential cookies for site
                functionality and optional cookies for analytics (see Cookie
                Policy below)
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                operating system, and access times
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 mb-6 text-slate-300 space-y-2">
              <li>
                <strong>Service Delivery:</strong> Process membership
                applications, manage event registrations, and provide club
                services
              </li>
              <li>
                <strong>Communication:</strong> Send event notifications, club
                updates, and respond to your inquiries
              </li>
              <li>
                <strong>Improvement:</strong> Analyze usage patterns to improve
                our website and services (only with analytics consent)
              </li>
              <li>
                <strong>Compliance:</strong> Maintain records as required by
                NJIT policies and applicable laws
              </li>
              <li>
                <strong>Automation:</strong> Send automated notifications via
                Zapier webhooks for event registrations and updates
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              3. Legal Basis for Processing (GDPR)
            </h2>
            <p className="mb-4 leading-relaxed">
              We process your personal data based on:
            </p>
            <ul className="list-disc ml-6 mb-6 text-slate-300 space-y-2">
              <li>
                <strong>Consent:</strong> When you provide explicit consent
                (e.g., analytics cookies)
              </li>
              <li>
                <strong>Contractual Necessity:</strong> To fulfill our
                membership services
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To improve our services
                and communicate about club activities
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              4. Data Sharing and Disclosure
            </h2>
            <p className="mb-4 leading-relaxed">
              We may share your information with:
            </p>
            <ul className="list-disc ml-6 mb-6 text-slate-300 space-y-2">
              <li>
                <strong>Service Providers:</strong> Sanity.io (content
                management), Google Analytics (analytics), Zapier (automation),
                Vercel (hosting)
              </li>
              <li>
                <strong>NJIT:</strong> As required for student organization
                compliance
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
            </ul>
            <p className="mb-6 leading-relaxed">
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              5. Cookie Policy
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-400">
              5.1 Essential Cookies
            </h3>
            <p className="mb-4 leading-relaxed text-slate-300">
              Required for basic website functionality and cannot be disabled:
            </p>
            <ul className="list-disc ml-6 mb-4 text-slate-300">
              <li>Cookie consent preferences (cookie_consent_v1)</li>
              <li>Session management</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-400">
              5.2 Analytics Cookies (Optional)
            </h3>
            <p className="mb-4 leading-relaxed text-slate-300">
              Only set with your explicit consent:
            </p>
            <ul className="list-disc ml-6 mb-4 text-slate-300">
              <li>
                Google Analytics (_ga, _gid, _gat) - Track page views and user
                behavior
              </li>
              <li>
                You can withdraw consent at any time via our cookie consent
                modal
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              6. Data Retention
            </h2>
            <ul className="list-disc ml-6 mb-6 text-slate-300 space-y-2">
              <li>
                <strong>Member Data:</strong> Retained while you are an active
                member and for 1 year after graduation or membership termination
              </li>
              <li>
                <strong>Event Registration:</strong> Retained for the academic
                year in which the event occurs
              </li>
              <li>
                <strong>Analytics Data:</strong> Retained by Google Analytics
                for 26 months (standard retention period)
              </li>
              <li>
                <strong>Communications:</strong> Retained as needed for
                operational purposes
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              7. Your Rights Under GDPR
            </h2>
            <p className="mb-4 leading-relaxed">You have the right to:</p>
            <ul className="list-disc ml-6 mb-6 text-slate-300 space-y-2">
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Rectification:</strong> Correct inaccurate or incomplete
                data
              </li>
              <li>
                <strong>Erasure:</strong> Request deletion of your data ("right
                to be forgotten")
              </li>
              <li>
                <strong>Restriction:</strong> Limit how we process your data
              </li>
              <li>
                <strong>Portability:</strong> Receive your data in a structured,
                machine-readable format
              </li>
              <li>
                <strong>Objection:</strong> Object to processing based on
                legitimate interests
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Revoke consent for analytics
                or marketing at any time
              </li>
            </ul>
            <p className="mb-6 leading-relaxed">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:ainspireteam@gmail.com"
                className="underline text-blue-400 hover:text-blue-300"
              >
                ainspireteam@gmail.com
              </a>
              . We will respond within 30 days.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              8. Data Security
            </h2>
            <p className="mb-6 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal data, including:
            </p>
            <ul className="list-disc ml-6 mb-6 text-slate-300 space-y-2">
              <li>HTTPS encryption for all data transmission</li>
              <li>
                Secure hosting on Vercel with industry-standard security
                practices
              </li>
              <li>
                Access controls and authentication for content management
                systems
              </li>
              <li>Regular security updates and monitoring</li>
            </ul>
            <p className="mb-6 leading-relaxed text-slate-300">
              However, no method of transmission over the internet is 100%
              secure. We cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              9. International Data Transfers
            </h2>
            <p className="mb-6 leading-relaxed">
              Your data may be transferred to and processed in countries outside
              the European Economic Area (EEA), including the United States
              where our service providers are located. We ensure appropriate
              safeguards are in place through standard contractual clauses and
              Privacy Shield frameworks where applicable.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              10. Children's Privacy
            </h2>
            <p className="mb-6 leading-relaxed">
              Our services are intended for NJIT students who are 18 years or
              older. We do not knowingly collect information from individuals
              under 18. If you believe we have collected data from a minor,
              please contact us immediately.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              11. Changes to This Policy
            </h2>
            <p className="mb-6 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you
              of significant changes by posting the new policy on this page with
              an updated "Last Updated" date. Your continued use of our services
              after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              12. Contact Information
            </h2>
            <p className="mb-4 leading-relaxed">
              For questions, concerns, or requests regarding this Privacy Policy
              or your personal data, please contact:
            </p>
            <div className="bg-slate-800/50 rounded-lg p-6 mb-6">
              <p className="mb-2">
                <strong>AInspire Job Club</strong>
              </p>
              <p className="mb-2">New Jersey Institute of Technology</p>
              <p className="mb-2">
                Email:{" "}
                <a
                  href="mailto:ainspireteam@gmail.com"
                  className="underline text-blue-400 hover:text-blue-300"
                >
                  ainspireteam@gmail.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://ainspire-smoky.vercel.app/"
                  className="underline text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ainspire-smoky.vercel.app/
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              13. Supervisory Authority
            </h2>
            <p className="mb-6 leading-relaxed">
              If you are located in the EEA and believe we have not adequately
              addressed your privacy concerns, you have the right to lodge a
              complaint with your local data protection supervisory authority.
            </p>

            <div className="mt-12 pt-6 border-t border-white/20">
              <p className="text-slate-400 text-sm">
                By using our website and services, you acknowledge that you have
                read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
