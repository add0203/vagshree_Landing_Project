"use client";

import React from "react";
import Image from "next/image";
import { companies } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading lg:mb-10 sm:mb-2"></h1>
      <h1 className="heading text-center pb-10">
        Our <span className="text-purple">Clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                {/* <Image
                  src={company.img}
                  alt={company.name}
                  width={40}
                  height={40}
                  className="md:w-10 w-5"
                  unoptimized={company.img.endsWith(".gif")} // Add unoptimized for GIFs
                /> */}
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={30}
                  className="md:w-24 w-20"
                  unoptimized={company.nameImg.endsWith(".gif")} // Add unoptimized for GIFs
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
