import { Navbar } from "@/components/landing/Navbar";

export function HeroSection() {
  return (
    <section className="relative" style={{ minHeight: "804px" }}>
      {/* Exact Figma SVG as background — fills the full section */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 704"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1289.54 446.5C1324.03 446.5 1405.79 445.053 1439 446.5V0H0V700.621C42.0688 702.804 85.7979 704 131.121 704C651.054 704 840.511 446.5 1289.54 446.5Z"
          fill="url(#paint0_linear_15_585)"
        />
        <path
          d="M1440 0V652.537C1440 652.537 1262 519.631 1034 519.631C806 519.631 685.5 704 421.5 704C157.5 704 0 546.612 0 546.612V0H1440Z"
          fill="url(#paint1_linear_15_585)"
        />
        <mask
          id="mask0_15_585"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1440"
          height="704"
        >
          <path
            d="M1440 0V652.537C1440 652.537 1262 519.631 1034 519.631C806 519.631 685.5 704 421.5 704C157.5 704 0 546.612 0 546.612V0H1440Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_15_585)">
          <circle opacity="0.05" cx="894" cy="634" r="262" fill="white" />
          <circle opacity="0.02" cx="256" cy="-105" r="262" fill="white" />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_15_585"
            x1="-666.432"
            y1="437.828"
            x2="-52.7159"
            y2="1589.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#52B4DA" />
            <stop offset="1" stopColor="#1E3E85" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_15_585"
            x1="-644.712"
            y1="457.365"
            x2="-18.1383"
            y2="1596.48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1E3E85" />
            <stop offset="1" stopColor="#336DA6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content layered on top of SVG */}
      <div className="relative z-10 flex flex-col" style={{ minHeight: "704px" }}>
        {/* Navbar sits at the very top */}
        <Navbar />

        {/* Hero text centred vertically in the remaining space */}
        <div className="flex flex-1 items-center justify-center px-6 pb-32 pt-8 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              RemoteRecruit&rsquo;s Difference
            </h1>
            <p className="mt-6 text-base leading-relaxed text-blue-100 sm:text-lg">
              RemoteRecruit is connecting the world with an easy-to-use platform
              that lets full-time, part-time, and freelance workers showcase
              their talents to businesses that need them. With no paywalls, no
              fees, and no barriers, there&rsquo;s nothing but you, your
              talents, and the next step in your career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}