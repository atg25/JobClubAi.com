import { Button } from "./Button";
import { pageContent } from "../data/pageContent";
import { BenefitIcons } from "./BenefitIcons";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col pt-6 pb-8 px-6 sm:px-8 lg:px-4"
      style={{ minHeight: "87svh" }}
    >
      <div className="container-unified text-center mt-16 lg:mt-24 px-4 flex flex-col justify-evenly">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 lg:mb-8 leading-tight italic page-h1">
          {pageContent.hero.title}
        </h1>

        <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto mb-6 lg:mb-8 leading-relaxed">
          {pageContent.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/join" variant="primary" className="w-full sm:w-auto">
            Join the Club
          </Button>
          <Button
            href="/events"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Check out Events
          </Button>
        </div>

        <BenefitIcons />
      </div>
    </section>
  );
};

export default HeroSection;
