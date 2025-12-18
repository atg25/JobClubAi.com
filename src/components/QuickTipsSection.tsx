import { Container } from "./Container";
import { Button } from "./Button";

const QuickTipsSection = () => {
  const tips = [
    {
      title: "Build a Standout Portfolio",
      description:
        "Your portfolio is your first impression. Learn what top companies look for and how to showcase your AI projects effectively.",
      icon: "✨",
      link: "/portfolio",
    },
    {
      title: "Master the Interview Process",
      description:
        "From behavioral questions to technical challenges, get prepared with our proven strategies and mock interview practice.",
      icon: "🎯",
      link: "/resources",
    },
    {
      title: "Network Like a Pro",
      description:
        "Networking opens doors. Discover how to connect with industry professionals and make meaningful career relationships.",
      icon: "🤝",
      link: "/events",
    },
  ];

  return (
    <section className="py-12 lg:py-16 px-6 sm:px-8 lg:px-4">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Career Success Tips
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Essential guidance to help you stand out in the competitive tech job
            market
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {tip.description}
              </p>
              <Button href={tip.link} variant="secondary" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default QuickTipsSection;
