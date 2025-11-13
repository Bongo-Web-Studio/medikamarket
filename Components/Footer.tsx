"use client";

import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo + Social */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="https://getswipe.in/static/media/swipe_logo.17335c63.svg"
                alt="Swipe Logo"
                className="h-10 w-auto"
              />
            </div>

            <div className="flex items-center space-x-5 mt-6 text-2xl">
              <FaInstagram className="hover:text-[#007bff] transition" />
              <FaYoutube className="hover:text-[#007bff] transition" />
              <FaLinkedin className="hover:text-[#007bff] transition" />
              <FaXTwitter className="hover:text-[#007bff] transition" />
              <FaFacebook className="hover:text-[#007bff] transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Invoice Formats</li>
              <li>Tutorials</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Einvoices</li>
              <li>Ewaybills</li>
              <li>Swipe AI</li>
              <li>Online Store</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* Register */}
          <div>
            <h3 className="font-semibold mb-4">Register</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Get Started</li>
              <li>Login</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Legal + Explore */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-10">
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Terms of Service</li>
                <li>Refer your friends</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Blog</li>
                <li>Join Community 🤝</li>
                <li>Product Updates</li>
                <li>Developers 🧑‍💻</li>
                <li>Tools</li>
                <li>We’re hiring 🚀</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-14 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span role="img" aria-label="India">
              🇮🇳
            </span>
            <span>IN</span>
            <span>▼</span>
          </div>
          <p className="mt-4 sm:mt-0">
            ©2025 Nextspeed Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
