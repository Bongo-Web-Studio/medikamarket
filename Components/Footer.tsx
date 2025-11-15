  "use client";

  import React from "react";
  import {
    FaInstagram,
    FaYoutube,
    FaLinkedin,
    FaXTwitter,
    FaFacebook,
    FaEnvelope,
  } from "react-icons/fa6";

  export default function Footer(): React.ReactElement {
    const heroBackground = {
      backgroundImage: [
        "linear-gradient(90deg, #fff 0%, #fff7ec 8%, #fff2c9 35%, #ffe299 52%, #ffd7b8 66%, #ffeef4 86%, #fff 100%)",
        "radial-gradient(circle at 50% 78%, rgba(255,196,71,0.22) 0%, rgba(255,196,71,0.14) 10%, rgba(255,196,71,0.06) 22%, transparent 40%)",
        "linear-gradient(90deg, transparent 70%, rgba(255,222,231,0.65) 100%)",
      ].join(", "),
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    } as React.CSSProperties;

    return (
      <footer  className=" bg-[#F5F5F5] border-t border-gray-200 text-gray-800 py-12 rounded-t-[100px]">
        <div className="max-w-7xl mx-auto p-8 lg:p-0">
          {/* Top section */}
          <div className=" lg:flex  gap-10">
            {/* Logo + Social + Newsletter */}
            <div className="">
              <div className="flex items-center gap-3">
               
                <div>
                  <h4 className="font-bold text-lg">Swipe</h4>

                </div>
              </div>

              <p className="text-sm text-gray-600">Follow us — we post tips, templates & treats!</p>

              <div className="flex items-center gap-3">
                {[
                  { Icon: FaInstagram, label: "Instagram" },
                  { Icon: FaYoutube, label: "YouTube" },
                  { Icon: FaLinkedin, label: "LinkedIn" },
                  { Icon: FaXTwitter, label: "X / Twitter" },
                  { Icon: FaFacebook, label: "Facebook" },
                ].map(({ Icon, label }, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={label}
                    className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all"
                  >
                    <Icon className="text-xl" />
                  </a>
                ))}
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-2 flex items-center gap-2 bg-white/80 p-2 rounded-2xl shadow-inner"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Your email
                </label>
                <div className="flex items-center gap-2 flex-1">
                  <FaEnvelope className="text-white" />
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm outline-none px-1"
                  />
                </div>
                <button
                  type="submit"
                  className="  text-sm font-medium  flex items-center gap-2 px-2 w-auto  justify-center  py-2 bg-[#0077ED] 
                          border border-blue-600 rounded-xl text-white  
                          shadow-inner shadow-white/40"
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </form>

           
            </div>

            <div  className="flex flex-wrap gap-10  mt-10 lg:mt-0">
                 {/* Quick Links */}
            <div className="w-[4cm] ">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Invoice Formats
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>

            {/* Features */}
          <div className="w-[4cm] ">
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Einvoices
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Ewaybills
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Swipe AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Online Store
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Register */}
            <div className="w-[4cm] ">
              <h3 className="font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Get Started
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal + Explore combined on larger screens */}
         
            <div className="w-[4cm] ">
                  <h3 className="font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Refund Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Refer your friends
                      </a>
                    </li>
                  </ul>
                </div>

              
             
            </div>

         
          </div>

        </div>
      </footer>
    );
  }
