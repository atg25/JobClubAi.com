import { Container } from "./Container";
import { Button } from "./Button";

const WhyJoinSection = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Build Your Network",
      description:
        "Connect with fellow NJIT students and industry professionals who share your passion for AI and technology careers.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      title: "Develop AI Skills",
      description:
        "Hands-on workshops covering AI tools, prompt engineering, automation, and emerging technologies in the job market.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      title: "Launch Your Career",
      description:
        "Get expert guidance on portfolios, resumes, interviews, and landing your dream role in tech with AI expertise.",
    },
  ];

  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 px-6 sm:px-8 lg:px-4 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>

      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Why Join AInspire?
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            We're building a community where NJIT students grow into
            future-ready professionals through AI education, networking, and
            career support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 text-center hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/join" variant="primary" className="text-lg px-8 py-3">
            Join the Club Today
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default WhyJoinSection;
