import { Container } from "../components/Container";
import { FilloutStandardEmbed } from "@fillout/react";

export default function JoinPage() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-display">
              Join AInspire Job Club
            </h1>
            <p className="text-lg lg:text-xl text-slate-300">
              Connect with fellow NJIT students, enhance your professional
              skills, and accelerate your career growth.
            </p>
          </div>

          {/* Fillout Form Embed */}
          <div className="glass-card rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Member Application
              </h2>
              <p className="text-slate-300">
                Fill out the form below to become a member. We'll review your
                application and get back to you soon!
              </p>
            </div>

            {/* Fillout Form */}
            <div className="rounded-xl overflow-hidden">
              <FilloutStandardEmbed
                filloutId="qqRyVub4LPus"
                inheritParameters
                dynamicResize
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Networking</h3>
              <p className="text-slate-400 text-sm">
                Connect with peers and industry professionals
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">
                Skill Development
              </h3>
              <p className="text-slate-400 text-sm">
                Learn through workshops and hands-on projects
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Career Support</h3>
              <p className="text-slate-400 text-sm">
                Get guidance on resumes, interviews, and job search
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
