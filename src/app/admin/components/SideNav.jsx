"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import tonnam from "../../../../public/hong.jpg";
import { usePathname } from "next/navigation";
function SideNav() {
  const imageStyle = {
    borderRadius: "50%",
    border: "8px solid #fff",
  };
  const pathname = usePathname();
  return (
    <div className="]">
      <aside
        id="cta-button-sidebar"
        className="fixed top-0 h-screen transition-transform -translate-x-full sm:translate-x-0 w-[240px"
        aria-label="Sidebar"
      >
        <nav className="h-full px-2 py-4 overflow-y-auto bg-[#FF9398]">
          <div className="flex justify-center">
            <Image
              src={tonnam}
              width={200}
              height={200}
              alt="profile image"
              style={imageStyle}
              className="mx-8 my-4"
            />
          </div>
          <ul className="space-y-2 font-medium mt-8">
            <li>
              <Link
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                  !pathname.includes("/users") && !pathname.includes("/posts")
                    ? "bg-primary text-white"
                    : ""
                }`}
                href="/admin"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                  pathname.includes("/users") ? "bg-primary text-white" : ""
                }`}
                href="/admin/users"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                  pathname.includes("/posts") ? "bg-primary text-white" : ""
                }`}
                href="/admin/posts"
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default SideNav;
