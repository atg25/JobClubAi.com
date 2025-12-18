import { Container } from "./Container";
import { pageContent } from "../data/pageContent";

const MethodologySection = () => {
  return (
    <section id="resources" className="pt-0 pb-12 lg:pb-16 px-6 sm:px-8 lg:px-4">
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          {/* DO Card */}
          <article className="bg-gradient-purple rounded-2xl p-7 border border-white/40 shadow-xl hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,111,122,0.3)] transition-all duration-300">
            <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-white/20">
              <div
                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                DO
              </h3>
            </div>
            <ul className="space-y-3 text-white/95">
              {pageContent.methodology.do.map((item, index) => (
                <li key={index} className="text-sm font-medium leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {/* DON'T Card */}
          <article className="bg-gradient-slate rounded-2xl p-7 border border-white/40 shadow-xl hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(139,111,122,0.3)] transition-all duration-300">
            <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-white/20">
              <div
                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                DON'T
              </h3>
            </div>
            <ul className="space-y-3 text-white/95">
              {pageContent.methodology.dont.map((item, index) => (
                <li key={index} className="text-sm font-medium leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default MethodologySection;
