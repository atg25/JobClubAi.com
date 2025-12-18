import { Container } from "../components/Container";

export default function PrivacyPage() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-white px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-6 page-h1">Privacy Policy</h1>
          <p className="mb-4">
            We value your privacy. This page explains how we collect, use, and
            protect your data in compliance with GDPR.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">What We Collect</h2>
          <ul className="list-disc ml-6 mb-4 text-slate-300">
            <li>Essential cookies for site functionality</li>
            <li>Optional analytics cookies (with your consent)</li>
            <li>
              Information you provide via forms (e.g., membership application)
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">
            How We Use Your Data
          </h2>
          <ul className="list-disc ml-6 mb-4 text-slate-300">
            <li>To provide and improve our services</li>
            <li>To analyze site usage (if you consent to analytics)</li>
            <li>To communicate with you about your membership</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
          <ul className="list-disc ml-6 mb-4 text-slate-300">
            <li>Access, correct, or delete your data</li>
            <li>Withdraw consent at any time</li>
            <li>
              Contact us at{" "}
              <a
                href="mailto:club@njit.edu"
                className="underline text-blue-400"
              >
                club@njit.edu
              </a>{" "}
              for privacy requests
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
          <p className="mb-4">
            For any privacy-related questions, email{" "}
            <a href="mailto:club@njit.edu" className="underline text-blue-400">
              club@njit.edu
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
