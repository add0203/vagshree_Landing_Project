import React from "react";

import Footer from "@/components/wrapper/Footer"; // Example for including Footer
import { navItems } from "@/data"; // Ensure the correct path to navItems
import { FloatingNav } from "@/components/wrapper/FloatingNavbar";
import TeamMember from "@/components/ui/TeamMember";

const teamMembers = [
  { name: "Emmy Rosum", position: "Co-Founder and CEO", image: "/member1.jpg" },
  {
    name: "Orlando Diggs",
    position: "Co-Founder and COO",
    image: "/member2.jpg",
  },
];

const Mentors = [
  { name: "Emmy Rosum", position: "Co-Founder and CEO", image: "/mentor.jpeg" },
];

const About = () => {
  return (
    <main className="pt-20 relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5  dark:bg-black-100 bg-gray-50 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03]">
      <FloatingNav navItems={navItems} />

      <div className="container mt-5 sm:mt-10 md:mt-12 px-4">
        {/* Meet Our Team Section */}
        <section className="text-center py-6 sm:py-8 md:py-12">
          <h1 className="heading text-center pb-10">
            Meet our <span className="text-purple">team</span>
          </h1>

          <p className="text-gray-600 mb-6 sm:mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            ex.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 md:p-4"
              >
                <TeamMember {...member} />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
            {Mentors.map((member, index) => (
              <div
                key={index}
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 md:p-4"
              >
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </section>

        {/* Mission and Vision Section */}
        <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 lg:p-8 max-w-screen-lg mx-auto">
          {/* Mission Section */}
          <section className="bg-gray-200 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-60 py-8 md:py-10 lg:py-12 rounded-lg w-full transition duration-300">
            <div className="text-center px-4 sm:px-6 md:px-8 lg:px-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg">
                Our mission is to create innovative solutions that empower
                businesses to achieve success and drive growth.
              </p>
            </div>
          </section>

          {/* Vision Section */}
          <section className="bg-white dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-60 py-8 md:py-10 lg:py-12 rounded-lg w-full transition duration-300">
            <div className="text-center px-4 sm:px-6 md:px-8 lg:px-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg">
                Our vision is to be a leader in the tech industry, known for our
                commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default About;
