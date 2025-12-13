import { Container } from "./Container";

const navItems = [
  { id: "home", label: "Home" },
  { id: "join", label: "Join" },
  { id: "events", label: "Events" },
  { id: "resources", label: "Resources" },
  { id: "portfolio", label: "Portfolio Tips" },
];

export const Footer = () => {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="py-16 px-6 sm:px-8 lg:px-4 border-t border-white/20 backdrop-blur-md"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.05) 100%)",
      }}
    >
      <Container>
        {/* Footer Logo & Nav */}
        <div className="text-center mb-8">
          <button
            onClick={() => handleNavClick("home")}
            className="inline-block"
          >
            <h2
              className="text-white text-4xl mb-8 transition-all duration-300 cursor-pointer font-display"
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow =
                  "0 0 15px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = "none";
              }}
            >
              AInspire
            </h2>
          </button>
          <nav className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-white/90">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-base hover:text-white transition-all duration-300"
                style={{
                  textShadow: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow =
                    "0 0 15px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-white/70 text-sm">
          <span>Copyright © AInspire</span>
          <span className="hidden sm:inline">•</span>
          <a
            href="/privacy"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </Container>
    </footer>
  );
};
