import { Container } from "../components/Container";
import { FilloutStandardEmbed } from "@fillout/react";

export default function JoinPage() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 lg:mb-8 leading-tight italic page-h1">
              Join AInspire Job Club
            </h1>
            <p className="text-lg lg:text-xl text-slate-300">
              Connect with fellow NJIT students, enhance your professional
              skills, and accelerate your career growth.
            </p>
          </div>

          {/* Fillout Form Embed */}
          <div className="glass-card rounded-2xl p-8 lg:p-12 hover:scale-[1.01] hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] transition-all duration-300">
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

          {/* Benefits Section removed: now only on Home page */}
        </div>
      </Container>
    </section>
  );
}
