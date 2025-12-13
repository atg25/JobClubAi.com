import { Container } from "./Container";
import { pageContent } from "../data/pageContent";

const guides = [
  "OPTIMIZING YOUR LINKEDIN FOR AI JOBS",
  "AI CONSULTING PORTFOLIO STARTER GUIDE",
  "A GITHUB PROFILE THAT GETS YOU INTERVIEWS",
  "SETTING UP CALENDLY & ZAPIER FOR MEETINGS",
];

const ProfessionalSection = () => {
  return (
    <section id="join" className="py-12 lg:py-16 px-6 sm:px-8 lg:px-4">
      <Container>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white text-center mb-8 lg:mb-10 italic font-serif">
          {pageContent.professional.title}
        </h2>

        <div className="space-y-6">
          {guides.map((guide, index) => (
            <article
              key={index}
              className="bg-gradient-orange border border-white/20 rounded-2xl p-8 shadow-2xl backdrop-blur hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(234,88,12,0.3)] transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white text-center mb-3 uppercase tracking-widest">
                {guide}
              </h3>
              <p className="text-white/85 text-center text-sm leading-relaxed max-w-xl mx-auto">
                Practical guides and templates to help you build a professional
                online presence that stands out to employers and clients.
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProfessionalSection;
