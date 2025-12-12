import { Container } from "./Container";
import { pageContent } from "../data/pageContent";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-12 lg:py-16 px-6 sm:px-8 lg:px-4">
      <Container>
        <div className="mb-8 lg:mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-3 italic font-serif">
            {pageContent.portfolio.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {pageContent.portfolio.subtitle}
          </p>
        </div>

        {/* Interactive Portfolio Window */}
        <div className="portfolio-window">
          <div className="bg-slate-800/50 px-4 py-3 border-b border-white/20 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-xs text-white/60 ml-4">
              portfolio.alexchen.dev
            </span>
          </div>
          <div className="bg-slate-900/50 h-[50vh] min-h-[400px]">
            <iframe
              src="https://kaw393939.github.io/117_final_fall_2025/portfolio/"
              className="w-full h-full"
              title="Professional portfolio example"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
