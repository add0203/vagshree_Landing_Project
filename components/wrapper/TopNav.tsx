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
//     <div className="bg-black text-white p-3 text-center cursor-pointer border border-red-500">
//       <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
//         <span className="opacity-80 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
//           Become a Team Member and Join Us!
//         </span>

//         <button
//           onClick={handleNavigate}
//           className="flex items-center gap-1 text-white text-xs md:text-base lg:text-lg xl:text-xl"
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
    <div className="bg-black text-white p-3 text-center cursor-pointer border border-red-500 fixed inset-0 z-50 sm:relative sm:inset-auto sm:z-auto sm:border-none">
      {/* sm:relative and sm:inset-auto reset position for larger screens */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 h-full sm:h-auto">
        <span className="opacity-80 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Become a Team Member and Join Us!
        </span>
        <button
          onClick={handleNavigate}
          className="flex items-center gap-1 text-white text-xs md:text-base lg:text-lg xl:text-xl"
        >
          Let&apos;s Start Your Career
          <FaArrowRight className="inline h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      </div>
    </div>
  );
};

export default TopNav;
