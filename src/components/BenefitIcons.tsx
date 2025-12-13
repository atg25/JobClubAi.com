export const BenefitIcons = () => (
  <div className="flex flex-row justify-center items-center gap-x-12 mt-8 mb-2">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 text-blue-400 flex items-center justify-center">
        {/* Networking Icon */}
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      <span className="text-white text-base font-medium mt-2">Networking</span>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 text-blue-400 flex items-center justify-center">
        {/* Skill Development Icon */}
        <svg
          className="w-8 h-8"
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
      </div>
      <span className="text-white text-base font-medium mt-2">
        Skill Development
      </span>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 text-blue-400 flex items-center justify-center">
        {/* Career Support Icon */}
        <svg
          className="w-8 h-8"
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
      </div>
      <span className="text-white text-base font-medium mt-2">
        Career Support
      </span>
    </div>
  </div>
);
