"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import tonnam from "../../../public/tonnam1.jpg";
import { usePathname } from "next/navigation";

function Sidebar() {
  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
  };
  const pathname = usePathname();
  return (
    <div>
      <aside
        id="cta-button-sidebar"
        className="w-full h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#FF9398]">
          <div className="flex justify-center">
            <Image
              src={tonnam}
              width={200}
              height={200}
              alt="profile image"
              style={imageStyle}
            />
          </div>

          <ul className="space-y-2 font-medium mt-8">
            <li>
              <a
                href="/"
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                  !pathname.includes("/about") &&
                  !pathname.includes("/skills") &&
                  !pathname.includes("/education") &&
                  !pathname.includes("/contact") 
                    ? "bg-primary text-white"
                    : ""
                }`}
              >
                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                  pathname.includes("/about") ? "bg-primary text-white" : ""
                }`}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">About</span>
              </a>
            </li>
            <li>
              <a
                href="/skills"
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                  pathname.includes("/skills") ? "bg-primary text-white" : ""
                }`}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Skills</span>
              </a>
            </li>
            <li>
              <a
                href="/education"
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                  pathname.includes("/education")
                    ? "bg-primary text-white"
                    : ""
                }`}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Education</span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                  pathname.includes("/contact") ? "bg-primary text-white" : ""
                }`}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
