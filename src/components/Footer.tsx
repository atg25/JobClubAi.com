import { Container } from "./Container";
import { Link } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/join", label: "Join" },
  { path: "/events", label: "Events" },
  { path: "/resources", label: "Resources" },
  { path: "/portfolio", label: "Portfolio Tips" },
];

export const Footer = () => {
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
          <Link to="/" className="inline-block">
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
          </Link>
          <nav className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-white/90">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
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
              </Link>
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
