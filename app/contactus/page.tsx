// pages/index.js
import React from "react";

import Footer from "@/components/wrapper/Footer"; // Example for including Footer
import { navItems } from "@/data"; // Ensure the correct path to navItems
import { FloatingNav } from "@/components/wrapper/FloatingNavbar";

const ContactUs = () => {
  return (
    // <main className="mt-20 relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <main className="mt-20 relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {" "}
      <FloatingNav navItems={navItems} />
      <div className="mt-20 flex flex-col items-center justify-center py-10">
        <div className="w-full max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="heading text-center pb-10">
              Contact <span className="text-purple">&</span> Support
            </h1>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-200 shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">
                Contact our sales team
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="border p-2 rounded-md w-full"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="border p-2 rounded-md w-full"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="border p-2 rounded-md w-full"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="border p-2 rounded-md w-full"
                />
                <select className="border p-2 rounded-md w-full" required>
                  <option>Team size</option>
                  <option>1-50 people</option>
                  <option>51-100 people</option>
                  <option>101-500 people</option>
                </select>
                <select className="border p-2 rounded-md w-full" required>
                  <option>Location</option>
                  <option>Australia</option>
                  <option>United States</option>
                  <option>Europe</option>
                </select>
                <textarea
                  placeholder="Leave us a message..."
                  className="border p-2 rounded-md w-full"
                  rows={4}
                />
                <fieldset className="space-y-2">
                  <legend className="font-semibold">
                    Which products are you interested in?
                  </legend>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="mail" />
                    <label htmlFor="mail">Untitled Mail</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="vpn" />
                    <label htmlFor="vpn">Untitled VPN</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="calendar" />
                    <label htmlFor="calendar">Untitled Calendar</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="drive" />
                    <label htmlFor="drive">Untitled Drive</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="workspace" />
                    <label htmlFor="workspace">Untitled Workspace</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="other" />
                    <label htmlFor="other">Other</label>
                  </div>
                </fieldset>
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-black text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-black"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold">Chat to sales</h2>
                <p className="text-gray-600">
                  Interested in switching? Speak to our friendly team.
                </p>
                <a
                  href="mailto:sales@untitledui.com"
                  className="text-indigo-600"
                >
                  sales@untitledui.com
                </a>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Email support</h2>
                <p className="text-gray-600">
                  Email us and we'll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:support@untitledui.com"
                  className="text-indigo-600"
                >
                  support@untitledui.com
                </a>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Chat support</h2>
                <p className="text-gray-600">
                  Chat to our staff 24/7 for instant access to support.
                </p>
                <a href="#" className="text-indigo-600">
                  Start live chat{" "}
                  <span className="text-green-500 ml-2">● Online</span>
                </a>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Call us</h2>
                <p className="text-gray-600">
                  Mon - Fri, 9:00 AM - 5:00 PM (UTC/GMT +10:00)
                </p>
                <p className="text-indigo-600">1300 132 642</p>
                <p className="text-indigo-600">+61 402 002 024</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Melbourne</h2>
                <p className="text-gray-600">
                  Visit our office Mon - Fri, 9:00 AM - 5:00 PM.
                </p>
                <p>10 Gertrude Street, Fitzroy VIC 3065, Australia</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Sydney</h2>
                <p className="text-gray-600">
                  Visit our office Mon - Fri, 9:00 AM - 5:00 PM.
                </p>
                <p>40 Bridge Street, Sydney NSW 2000, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* new ui */}
      <Footer />
    </main>
  );
};

export default ContactUs;

//  <main className="flex flex-col items-center justify-center py-10 bg-gray-50">
//    <div className="w-full max-w-4xl mx-auto px-4">
//      {/* Header */}
//      <div className="text-center mb-8">
//        <h1 className="text-3xl font-semibold">Get in touch</h1>
//        <p className="text-gray-600 mt-2">
//          Want to speak to someone about your startup? We’d love to chat!
//        </p>
//      </div>

//      {/* Main Content */}
//      <div className="bg-white shadow-md rounded-lg p-6 space-y-8">
//        {/* Contact Form */}
//        <div>
//          <form className="space-y-4">
//            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//              <input
//                type="text"
//                placeholder="First name"
//                className="border p-2 rounded-md w-full"
//                required
//              />
//              <input
//                type="text"
//                placeholder="Last name"
//                className="border p-2 rounded-md w-full"
//                required
//              />
//            </div>
//            <input
//              type="email"
//              placeholder="Email"
//              className="border p-2 rounded-md w-full"
//              required
//            />
//            <input
//              type="tel"
//              placeholder="Phone number"
//              className="border p-2 rounded-md w-full"
//            />
//            <textarea
//              placeholder="Leave us a message..."
//              className="border p-2 rounded-md w-full"
//              rows={4}
//            />
//            <button
//              type="submit"
//              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700"
//            >
//              Send message
//            </button>
//          </form>
//        </div>

//        {/* Contact Information */}
//        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//          <div>
//            <h2 className="text-lg font-semibold">Call us</h2>
//            <p className="text-gray-600">Mon - Fri, 8:00 AM - 5:00 PM</p>
//            <p className="text-blue-600">+1 (555) 000-0000</p>
//          </div>
//          <div>
//            <h2 className="text-lg font-semibold">Chat with us</h2>
//            <p className="text-gray-600">
//              Speak to our friendly team via live chat.
//            </p>
//            <ul className="space-y-1">
//              <li>
//                <a href="#" className="text-blue-600">
//                  Start a live chat
//                </a>
//              </li>
//              <li>
//                <a
//                  href="mailto:support@untitledui.com"
//                  className="text-blue-600"
//                >
//                  Shoot us an email
//                </a>
//              </li>
//              <li>
//                <a href="https://twitter.com" className="text-blue-600">
//                  Message us on Twitter
//                </a>
//              </li>
//            </ul>
//          </div>
//          <div>
//            <h2 className="text-lg font-semibold">Visit us</h2>
//            <p className="text-gray-600">
//              Chat to us in person at our Melbourne HQ.
//            </p>
//            <p className="text-blue-600">
//              100 Smith Street, Collingwood VIC 3066
//            </p>
//          </div>
//        </div>
//      </div>

//      {/* Footer Section */}
//      <div className="text-center mt-12 p-6 bg-gray-100 rounded-lg">
//        <h2 className="text-lg font-semibold">Start your 30-day free trial</h2>
//        <p className="text-gray-600 mt-2">
//          Join over 4,000+ startups already growing with Untitled.
//        </p>
//        <div className="flex justify-center space-x-4 mt-4">
//          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md">
//            Chat to us
//          </button>
//          <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
//            Get started
//          </button>
//        </div>
//      </div>
//    </div>
//  </main>;
