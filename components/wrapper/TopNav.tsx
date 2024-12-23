// "use client";

// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// const TopNav = () => {
//   const router = useRouter();

//   const handleNavigate = () => {
//     router.push("/careers");
//   };

//   return (
//     <div className="bg-black text-white p-1 text-center cursor-pointer border border-red-500 fixed inset-0 z-50 sm:relative sm:inset-auto sm:z-auto sm:border-none">
//       {/* sm:relative and sm:inset-auto reset position for larger screens */}
//       <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 h-full sm:h-auto">
//         <span className="opacity-80 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
//           Become a Team Member and Join Us!
//         </span>
//         <button
//           onClick={handleNavigate}
//           className="flex items-center gap-1 text-white text-xs md:text-base lg:text-sm xl:text-lg"
//         >
//           Let&apos;s Start Your Career
//           <FaArrowRight className="inline h-3 w-3 sm:h-4 sm:w-4" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TopNav;

"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const TopNav = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/careers");
  };

  return (
    <div className="bg-white/30 w-[100%] p-1">
      {/* Smarter positioning reset for larger screens */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 h-full sm:h-full ">
        <button
          onClick={handleNavigate}
          className="flex items-center gap-1 text-black font-bold text-xs sm:text-sm md:text-base lg:text-sm xl:text-md opacity-90 hover:opacity-100 transition-opacity p-1/2"
        >
          Work Together Grow Together
          {/* <span className="hidden sm:block">Let&apos;s Start Your Career</span> */}
          {/* <FaArrowRight className="m-1 inline h-2 w-2 sm:h-3 sm:w-3 hidden sm:block" /> */}
        </button>
      </div>
    </div>
  );
};

export default TopNav;
