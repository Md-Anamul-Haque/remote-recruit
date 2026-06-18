// import { ArrowRightIcon } from "lucide-react";

// export function CtaSection() {
//   return (
//     <section className="relative my-20 container max-w-7xl mx-auto block">
//       <svg className="w-full h-auto" width="1440" height="610" viewBox="0 0 1440 610" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <rect opacity="0.1" width="1440" height="610" fill="url(#paint0_linear_15_637)"/>
//       <rect opacity="0.1" width="1440" height="610" fill="url(#paint1_linear_15_637)"/>
//       <mask id="mask0_15_637" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="610">
//       <rect width="1440" height="610" fill="white"/>
//       </mask>
//       <g mask="url(#mask0_15_637)">
//       <circle cx="206.5" cy="600.5" r="43.5" fill="#19CDB8"/>
//       <circle opacity="0.3" cx="1358" cy="52" r="190" fill="white"/>
//       <circle opacity="0.3" cx="543.5" cy="545.5" r="246.5" fill="white"/>
//       <circle opacity="0.3" cx="75.5" cy="68.5" r="160.5" fill="white"/>
//       </g>
//       <circle cx="289.5" cy="57.5" r="26.5" fill="url(#paint2_linear_15_637)"/>
//       <circle cx="1134.5" cy="546.5" r="14.5" fill="url(#paint3_linear_15_637)"/>
//       <defs>
//       <linearGradient id="paint0_linear_15_637" x1="-666.895" y1="379.368" x2="-179.477" y2="1435.92" gradientUnits="userSpaceOnUse">
//       <stop stop-color="#5799EB"/>
//       <stop offset="1" stop-color="#9F74FB"/>
//       </linearGradient>
//       <linearGradient id="paint1_linear_15_637" x1="-666.895" y1="379.368" x2="-179.477" y2="1435.92" gradientUnits="userSpaceOnUse">
//       <stop stop-color="#5799EB"/>
//       <stop offset="1" stop-color="#9F74FB"/>
//       </linearGradient>
//       <linearGradient id="paint2_linear_15_637" x1="238.455" y1="63.9615" x2="293.921" y2="114.893" gradientUnits="userSpaceOnUse">
//       <stop stop-color="#FFED43"/>
//       <stop offset="1" stop-color="#F29939"/>
//       </linearGradient>
//       <linearGradient id="paint3_linear_15_637" x1="1106.57" y1="550.036" x2="1136.92" y2="577.904" gradientUnits="userSpaceOnUse">
//       <stop stop-color="#52B4DA"/>
//       <stop offset="1" stop-color="#1E3E85"/>
//       </linearGradient>
//       </defs>
//       </svg>
//       <div className="absolute w-full h-full inset-0  grid md:grid-cols-2 md:space-x-12 items-center justify-center">
//         <div className="order-2 md:h-full overflow-hidden md:order-1">
//           <div className="translate-y-24 rounded-tl-none rounded-tr-2xl border-r-8 border-t-8 border-background ">
//             <img src="/welcome-max.png" alt="Illustration of a person sitting at a desk with a laptop, looking at a screen with job listings" 
//           className="w-full rounded-tl-none h-auto rounded-tr-2xl" />
//           </div>
//         </div>
//         <div className="order-1 md:order-2 h-full grid justify-center md:justify-start">
//           <p className="text-[16px] font-medium text-[#1E3E85]">Are you ready?</p>
//           <h2 className="font-['Poppins'] text-2xl md:text-[32px] lg:text-[44px] leading-tight font-semibold">
//             Help is only a few
//             <br /> clicks away!
//           </h2>
//           <p className="mt-3 md:mt-6 text-lg text-slate-600">
//             Click Below to get set up super
//             <br />
//              quickly and find help now!
//           </p>
//           <button className="mt-8 p-2 flex items-center space-x-3 rounded-full bg-[#52B4DA30] text-[#1E3E85]">
//            <span className="bg-[#52B4DA] rounded-full h-10 w-10 p-2 mr-2 inline-flex items-center justify-center">
//               <ArrowRightIcon className="text-white w-7 h-7" />
//            </span>
//             <span className="font-[16px] px-3">Get Started</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
import { ArrowRightIcon } from "lucide-react";

export function CtaSection() {
  return (
    // 'overflow-hidden' যোগ করা হয়েছে যাতে ভেতরের ইমেজ বা SVG কন্টেইনারের বাইরে না যায়
    <section className="relative overflow-x-auto my-20 w-full max-w-7xl mx-auto rounded-3xl overflow-hidden bg-slate-50">
      
      {/* Background SVG - Responsive height handled */}
      <svg 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0" 
        viewBox="0 0 1440 610" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice" // এটি মোবাইলে SVG-কে সুন্দরভাবে ক্রপ করবে, চ্যাপ্টা করবে না
      >
        <rect opacity="0.1" width="1440" height="610" fill="url(#paint0_linear_15_637)"/>
        <rect opacity="0.1" width="1440" height="610" fill="url(#paint1_linear_15_637)"/>
        <mask id="mask0_15_637" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="610">
          <rect width="1440" height="610" fill="white"/>
        </mask>
        <g mask="url(#mask0_15_637)">
          <circle cx="206.5" cy="600.5" r="43.5" fill="#19CDB8"/>
          <circle opacity="0.3" cx="1358" cy="52" r="190" fill="white"/>
          <circle opacity="0.3" cx="543.5" cy="545.5" r="246.5" fill="white"/>
          <circle opacity="0.3" cx="75.5" cy="68.5" r="160.5" fill="white"/>
        </g>
        <circle cx="289.5" cy="57.5" r="26.5" fill="url(#paint2_linear_15_637)"/>
        <circle cx="1134.5" cy="546.5" r="14.5" fill="url(#paint3_linear_15_637)"/>
        <defs>
          <linearGradient id="paint0_linear_15_637" x1="-666.895" y1="379.368" x2="-179.477" y2="1435.92" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5799EB"/>
            <stop offset="1" stopColor="#9F74FB"/>
          </linearGradient>
          <linearGradient id="paint1_linear_15_637" x1="-666.895" y1="379.368" x2="-179.477" y2="1435.92" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5799EB"/>
            <stop offset="1" stopColor="#9F74FB"/>
          </linearGradient>
          <linearGradient id="paint2_linear_15_637" x1="238.455" y1="63.9615" x2="293.921" y2="114.893" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFED43"/>
            <stop offset="1" stopColor="#F29939"/>
          </linearGradient>
          <linearGradient id="paint3_linear_15_637" x1="1106.57" y1="550.036" x2="1136.92" y2="577.904" gradientUnits="userSpaceOnUse">
            <stop stopColor="#52B4DA"/>
            <stop offset="1" stopColor="#1E3E85"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Foreground Content Wrapper */}
      <div className="relative z-10 w-full min-h-125 grid md:grid-cols-2 items-center gap-8 md:gap-12 px-6 py-12 md:p-16 lg:p-20">
        
        {/* Left Side: Image / Illustration */}
        <div className="order-2 md:order-1 flex justify-center items-end h-full mt-8 md:mt-0 pt-10">
          <div className="w-full max-w-md md:max-w-full rounded-tl-none rounded-tr-3xl border-r-8 border-t-8 border-white shadow-2xl translate-y-12 md:translate-y-20">
            <img 
              src="/welcome-max.png" 
              alt="Dashboard preview showing job search features" 
              className="w-full h-auto rounded-tl-none rounded-tr-[20px] block" 
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Side: Text & CTA */}
        <div className="order-1 md:order-2 flex flex-col justify-center items-center md:items-start text-center md:text-left h-full">
          <span className="text-base font-semibold tracking-wider uppercase text-[#1E3E85] mb-2">
            Are you ready?
          </span>
          
          <h2 className="font-['Poppins'] text-3xl md:text-4xl lg:text-[44px] leading-[1.2] font-bold text-slate-900 mb-4 md:mb-6">
            Help is only a few <br className="hidden md:block" /> clicks away!
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 max-w-md">
            Click below to get set up super quickly and find help now!
          </p>
          
          <button className="group flex items-center p-1.5 pr-6 rounded-full bg-[#52B4DA]/10 hover:bg-[#52B4DA]/20 transition-all duration-300 ease-in-out">
            <span className="bg-[#52B4DA] group-hover:bg-[#1E3E85] transition-colors duration-300 rounded-full h-12 w-12 flex items-center justify-center shadow-md">
              <ArrowRightIcon className="text-white w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="font-medium text-[#1E3E85] text-lg ml-4">
              Get Started
            </span>
          </button>
        </div>
        
      </div>
    </section>
  );
}