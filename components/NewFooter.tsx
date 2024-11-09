import React from "react";
import MainButton from "@/components/ui/MainButton";

function FooterSection() {
  const data = {
    product: [
      "Changelog",
      "Customer stories",
      "Security",
      "Chrome extension",
      "iOS App",
      "Android App",
      "Zapier",
      "Integromat",
    ],
    company: ["About", "Careers", "Blog", "Startip program"],
    attioFor: ["Startups", "Dear flow"],
    support: ["Help Center", "Talk to support", "API docs", "System status"],
  };
  return (
    // <footer className="p-10 relative w-full bg-gray-100 dark:bg-gray-500 bg-opacity-30">
    //   <div>
    //     <img src="/images/footer_logo.svg" alt="footer logo" />
    //   </div>

    //   <div className="mt-[32px] pb-[50px] flex justify-between w-full gap-8 flex-col md:flex-row flex-wrap">
    //     <div>
    //       <p className="text-[#9098A0] mb-[12px]">Product</p>
    //       <div className="flex flex-col gap-3">
    //         {data.product.map((item, index) => (
    //           <p key={index} className="text-[#555E67] hover:cursor-pointer">
    //             {item}
    //           </p>
    //         ))}
    //       </div>
    //     </div>
    //     <div>
    //       <p className="text-[#9098A0] mb-[12px]">Company</p>
    //       <div className="flex flex-col gap-3">
    //         {data.company.map((item, index) => (
    //           <p key={index} className="text-[#555E67] hover:cursor-pointer">
    //             {item}
    //           </p>
    //         ))}
    //       </div>
    //     </div>
    //     <div>
    //       <p className="text-[#9098A0] mb-[12px]">Attio for</p>
    //       <div className="flex flex-col gap-3">
    //         {data.attioFor.map((item, index) => (
    //           <p key={index} className="text-[#555E67] hover:cursor-pointer">
    //             {item}
    //           </p>
    //         ))}
    //       </div>
    //     </div>
    //     <div>
    //       <p className="text-[#9098A0] mb-[12px]">Support</p>
    //       <div className="flex flex-col gap-3">
    //         {data.support.map((item, index) => (
    //           <p key={index} className="text-[#555E67] hover:cursor-pointer">
    //             {item}
    //           </p>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="min-w-[300px]">
    //       <p className="font-medium text-[#9098A0] mb-4">Ready to build?</p>
    //       <div className="flex flex-col gap-[12px] justify-start">
    //         {/* <MainButton
    //           text="Start for free"
    //           size="small"
    //           width="full_width"
    //           className="border-none bg-[#31373D] hover:bg-[#31373D] rounded-[12px]"
    //         />
    //         <MainButton
    //           text="Talk to sales"
    //           size="small"
    //           width="full_width"
    //           className="rounded-[12px] border-[1px] border-[#EDEEF0] bg-transparent hover:bg-transparent text-white"
    //         /> */}
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="p-10 relative w-full bg-white/20 dark:bg-gray-700/30 backdrop-blur-md border border-white/10 dark:border-gray-800/10 rounded-t-lg shadow-lg">
      <div>
        <img src="/images/footer_logo.svg" alt="footer logo" />
      </div>

      <div className="mt-[32px] pb-[50px] flex justify-between w-full gap-8 flex-col md:flex-row flex-wrap">
        <div>
          <p className="text-[#9098A0] mb-[12px]">Product</p>
          <div className="flex flex-col gap-3">
            {data.product.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#9098A0] mb-[12px]">Company</p>
          <div className="flex flex-col gap-3">
            {data.company.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#9098A0] mb-[12px]">Attio for</p>
          <div className="flex flex-col gap-3">
            {data.attioFor.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#9098A0] mb-[12px]">Support</p>
          <div className="flex flex-col gap-3">
            {data.support.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="min-w-[300px]">
          <p className="font-medium text-[#9098A0] mb-4">Ready to build?</p>
          <div className="flex flex-col gap-[12px] justify-start">
            <MainButton
              text="Start for free"
              size="small"
              width="full_width"
              className="border-none bg-[#31373D] hover:bg-[#31373D] rounded-[12px]"
            />
            <MainButton
              text="Talk to sales"
              size="small"
              width="full_width"
              className="rounded-[12px] border-[1px] border-[#EDEEF0] bg-transparent hover:bg-transparent text-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
