import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMobileMenuStore } from "../hooks/useMobileMenuStore";

const navItems = [
  { path: "/", label: "Home", scrollTo: null },
  { path: "/join", label: "Join", scrollTo: null },
  { path: "/#events", label: "Events", scrollTo: "events" },
  { path: "/resources", label: "Resources", scrollTo: null },
  { path: "/#portfolio", label: "Portfolio Tips", scrollTo: "portfolio" },
];

export const Header = () => {
  const location = useLocation();
  const { isOpen, toggle, close } = useMobileMenuStore();

  const handleNavClick = (item: (typeof navItems)[0]) => {
    close();

    // If it's a hash link on homepage, scroll to section
    if (item.scrollTo && location.pathname === "/") {
      setTimeout(() => {
        const element = document.getElementById(item.scrollTo!);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const isActive = (item: (typeof navItems)[0]) => {
    if (item.path === "/") {
      return location.pathname === "/" && !location.hash;
    }
    if (item.scrollTo) {
      return location.pathname === "/" && location.hash === `#${item.scrollTo}`;
    }
    return location.pathname === item.path;
  };

  return (
    <>
      {/* Header Navigation */}
      <header role="banner" aria-label="Site header" className="pt-6 lg:pt-8">
        <div className="flex justify-center items-center gap-4 lg:gap-8">
          <h1 className="text-white text-3xl lg:text-5xl transition-all duration-300 cursor-default font-display hover:[text-shadow:0_0_15px_rgba(255,255,255,0.5),_0_0_30px_rgba(255,255,255,0.3)]">
            AInspire
          </h1>

          {/* Mobile Hamburger */}
          <button
            onClick={toggle}
            className="lg:hidden text-white p-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {!isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav
            className="glass-nav hidden lg:inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item)}
                className={`text-white text-xl font-medium px-6 py-2 rounded-full transition-all duration-300 border ${
                  isActive(item)
                    ? "bg-blue-500/30 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    : "bg-transparent border-transparent hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]"
                } active:bg-blue-500/40 active:border-blue-400/60 active:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-[0.98]`}
                aria-label={`Navigate to ${item.label}`}
                aria-current={isActive(item) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Menu Dialog */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={close} className="relative z-50 lg:hidden">
          <TransitionChild
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md" />
          </TransitionChild>

          <div className="fixed inset-0 flex items-center justify-center">
            <TransitionChild
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel>
                <nav className="flex flex-col items-center justify-center gap-6 px-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => handleNavClick(item)}
                      className={`text-2xl text-white font-medium px-6 py-2 rounded-full transition-all duration-300 border ${
                        isActive(item)
                          ? "bg-blue-500/30 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                          : "bg-transparent border-transparent hover:bg-white/10 hover:border-white/30"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
