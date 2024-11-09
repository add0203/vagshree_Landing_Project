// import React from "react";
// import Link from "next/link";
// import { FloatingNav } from "@/components/wrapper/FloatingNavbar";
// import Footer from "@/components/wrapper/Footer";
// import { navItems } from "@/data"; // Ensure the correct path to navItems

// const jobList = [
//   {
//     title: "Content Writer",
//     jdLink: "/jd-content-writer",
//     applyLink: "/apply-content-writer",
//   },
//   {
//     title: "Marketing Expert",
//     jdLink: "/jd-marketing-expert",
//     applyLink: "/apply-marketing-expert",
//   },
//   {
//     title: "SDE1 (Full Stack Developer) MERN stack",
//     jdLink: "/jd-sde1",
//     applyLink: "/apply-sde1",
//   },
//   {
//     title: "Business Development Executive Intern",
//     jdLink: "/jd-business-dev",
//     applyLink: "/apply-business-dev",
//   },
//   {
//     title: "Graphic Designer",
//     jdLink: "/jd-graphic-designer",
//     applyLink: "/apply-graphic-designer",
//   },
//   {
//     title: "Operation Intern",
//     jdLink: "/jd-operation-intern",
//     applyLink: "/apply-operation-intern",
//   },
//   {
//     title: "Aircraft Design Engineer",
//     jdLink: "/jd-aircraft-design",
//     applyLink: "/apply-aircraft-design",
//   },
// ];

// const Carrers = () => {
//   return (
//     <main className="pt-20 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:bg-black-100 bg-gray-50 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03] transition-colors duration-300">
//       <FloatingNav navItems={navItems} />
//       {/* <div className="mt-20 min-h-screen flex flex-col items-center py-10 w-full rounded-sm "> */}
//       <div className="container mt-5 sm:mt-10 md:mt-12 px-4">
//         {/* Main Title */}
//         <h2 className="text-3xl font-bold text-center mb-2 dark:text-white text-gray-800">
//           Are you open to joining us?
//         </h2>
//         <div className="h-1 bg-gray-500 dark:bg-gray-400  mb-6"></div>

//         {/* Apply Now Button */}
//         <button className="px-6 py-3 bg-gray-200 dark:bg-gray-600 text-black dark:text-white rounded-full font-semibold mb-10 hover:bg-gray-400 dark:hover:bg-gray-500 hover:text-black dark:hover:text-white transition-colors duration-200">
//           Submit your resume
//         </button>

//         {/* Job List */}
//         <div className="w-full max-w-4xl space-y-4">
//           {jobList.map((job, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-between p-4 bg-gray-200/80 dark:bg-gray-900/80 rounded-lg transition-colors duration-300"
//             >
//               <span className="text-gray-800 dark:text-gray-300 font-medium">
//                 {job.title}
//               </span>

//               <div className="flex flex-row p-4 items-center space-x-4">
//                 <Link href={job.jdLink} passHref legacyBehavior>
//                   <a
//                     className={`px-4 py-2 rounded-full font-semibold text-sm ${
//                       job.jdLink
//                         ? "bg-gray-400 dark:bg-gray-600 text-black dark:text-white"
//                         : "border border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300"
//                     } hover:bg-white dark:hover:bg-gray-500 transition-colors duration-200`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Job Description
//                   </a>
//                 </Link>

//                 <Link href={job.applyLink} passHref legacyBehavior>
//                   <a
//                     className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold text-sm hover:bg-gray-300 dark:hover:bg-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Click To Fill Form
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </main>
//   );
// };

// export default Carrers;

import React from "react";
import Link from "next/link";
import { FloatingNav } from "@/components/wrapper/FloatingNavbar";
import Footer from "@/components/wrapper/Footer";
import { navItems } from "@/data"; // Ensure the correct path to navItems

const jobList = [
  {
    title: "Content Writer",
    jdLink: "/jd-content-writer",
    applyLink: "/apply-content-writer",
  },
  {
    title: "Marketing Expert",
    jdLink: "/jd-marketing-expert",
    applyLink: "/apply-marketing-expert",
  },
  {
    title: "SDE1 (Full Stack Developer) MERN stack",
    jdLink: "/jd-sde1",
    applyLink: "/apply-sde1",
  },
  {
    title: "Business Development Executive Intern",
    jdLink: "/jd-business-dev",
    applyLink: "/apply-business-dev",
  },
  {
    title: "Graphic Designer",
    jdLink: "/jd-graphic-designer",
    applyLink: "/apply-graphic-designer",
  },
  {
    title: "Operation Intern",
    jdLink: "/jd-operation-intern",
    applyLink: "/apply-operation-intern",
  },
  {
    title: "Aircraft Design Engineer",
    jdLink: "/jd-aircraft-design",
    applyLink: "/apply-aircraft-design",
  },
];

const Careers = () => {
  return (
    <main className="pt-20 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:bg-black-100 bg-gray-50 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03] transition-colors duration-300">
      <FloatingNav navItems={navItems} />
      <div className="container pt-10 sm:mt-12 px-4">
        {/* Main Title */}

        <h1 className="heading text-center pb-10">
          Are you open to <span className="text-purple">joining</span> us?
        </h1>

        {/* Apply Now Button */}
        <div className="flex justify-center">
          <button className="px-6 py-2 sm:py-3 bg-gray-200 dark:bg-gray-600 text-black dark:text-white rounded-full font-semibold mb-10 hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200">
            Submit Your Resume
          </button>
        </div>

        {/* Job List */}
        <div className="w-full max-w-4xl space-y-4 mx-auto">
          {jobList.map((job, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-200/80 dark:bg-gray-900/80 rounded-lg transition-colors duration-300 space-y-4 sm:space-y-0"
            >
              <span className="text-gray-800 dark:text-gray-300 font-medium text-center sm:text-left">
                {job.title}
              </span>

              <div className="flex flex-col items-center space-y-2 sm:space-y-0 sm:space-x-4 p-2 gap-2">
                <Link href={job.jdLink} passHref legacyBehavior>
                  <a
                    className={`px-4 py-2 rounded-full font-semibold text-sm ${
                      job.jdLink
                        ? "bg-gray-400 dark:bg-gray-600 text-black dark:text-white"
                        : "border border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                    } hover:bg-white dark:hover:bg-gray-500 transition-colors duration-200 text-center`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Job Description
                  </a>
                </Link>

                <Link href={job.applyLink} passHref legacyBehavior>
                  <a
                    className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold text-sm hover:bg-gray-300 dark:hover:bg-gray-400 transition-colors duration-200 text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click To Fill Form
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Careers;
