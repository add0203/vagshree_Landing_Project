// import React from "react";
// import services from "@/data";
// import Image from "next/image";
// const ServicesDisplay = () => {
//   return (
//     <section className="py-10">
//       <div className="container mx-auto px-4 min-h-screen flex flex-col items-center py-10 w-[100%] rounded-sm mt-10">
//         <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="p-6 bg-gray-100 dark:bg-gray-700 shadow-lg rounded-lg transition-transform transform hover:scale-105"
//             >
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 width={400} // Set the desired width
//                 height={240} // Set the desired height
//                 className="w-full h-40 object-cover rounded-t-lg"
//                 priority // Use priority for images that need to load faster
//               />
//               <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
//                 {service.title}
//               </h3>
//               <p className="text-gray-700 dark:text-gray-300 mb-4">
//                 {service.description}
//               </p>
//               <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
//                 Categories:
//               </h4>
//               <ul className="list-disc ml-5">
//                 {service.categories.map((category, idx) => (
//                   <li key={idx} className="text-gray-600 dark:text-gray-400">
//                     {category}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesDisplay;

"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { CanvasRevealEffect } from "../ui/CanvasRevealEffect"; // Assuming you have this component

// Sample services data, modify as needed
const services = [
  {
    title: "Aerial Surveys",
    description: "Conducting aerial surveys for mapping and inspections.",
    image: "/R.png",
    categories: ["Mapping", "Inspection"],
  },
  {
    title: "Solar Plant Inspection",
    description: "Inspections for solar plant efficiency and maintenance.",
    image: "/R.png",
    categories: ["Solar", "Maintenance"],
  },
  {
    title: "3D Modeling",
    description: "Creating 3D models for various applications.",
    image: "/R.png",
    categories: ["Modeling", "Design"],
  },
];

// Card component that holds each service's details
const Card = ({ title, description, image, categories, colors }: any) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative max-w-sm w-full p-6 mx-auto rounded-3xl shadow-lg transition-transform transform hover:scale-105 bg-gray-100 dark:bg-gray-800`}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 z-10 rounded-3xl overflow-hidden"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="rounded-3xl overflow-hidden"
              colors={colors}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <Image
          src={image}
          alt={title}
          width={400}
          height={240}
          className="w-full h-40 object-cover rounded-t-lg mb-4"
          priority
        />
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {title}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Categories:
        </h4>
        <ul className="list-disc ml-5">
          {categories.map((category, idx) => (
            <li key={idx} className="text-gray-600 dark:text-gray-400">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main component rendering the list of services
const ServicesDisplay = () => {
  return (
    <section className="py-20">
      <h1 className="heading text-center">
        Our <span className="text-purple">Services</span>
      </h1>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              categories={service.categories}
              colors={[[125, 211, 252]]} // Example color for each card, adjust as necessary
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDisplay;
