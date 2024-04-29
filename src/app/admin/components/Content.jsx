import React from 'react'
import { FaUsers, FaRegNewspaper, FaGlobe } from "react-icons/fa6";
function Content() {
  return (
    <div className="px-10 rounded-lg">
      <div className="flex">
        <div className="stats shadow-xl">
          <div className="stat">
            <div className="stat-title">
              <h3 className="flex items-center">
                <FaGlobe className="mr-2" /> Total Views
              </h3>
            </div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">eiei</div>
          </div>
          <div className="stat">
            <div className="stat-title">
              <h3 className="flex items-center">
                <FaUsers className="mr-2" /> Total Users
              </h3>
            </div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">eiei</div>
          </div>
          <div className="stat">
            <div className="stat-title">
              <h3 className="flex items-center">
                <FaGlobe className="mr-2" /> Total Views
              </h3>
            </div>
            <div className="stat-value">40</div>
            <div className="stat-desc">users</div>
          </div>
        </div>
      </div>
      <p className="text-4xl font-bold my-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="inline-block w-8 h-8 stroke-current fill-[#ff0000] me-4"
        >
          <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
        </svg>
        My Youtube: Tonnamwarineiei
      </p>
      <div className="stats shadow-xl">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Subscribers</div>
          <div className="stat-value text-primary">580 subscribers</div>
          <div className="stat-desc">Thank you very much</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Views</div>
          <div className="stat-value text-secondary">270,932 views</div>
          <div className="stat-desc">vlog - travel</div>
        </div>

        <div className="stat">
          <div className="stat-value">Joined</div>
          <div className="stat-title">Jul 18, 2015</div>
          <div className="stat-desc text-secondary">Thailand</div>
        </div>
      </div>
      <p className="text-xl font-bold my-3">Someone Someday by gboy</p>
      <p>
        โตไปฉันจะเป็น Someone ของเธอ Someday ไม่ว่านานเท่าไร โตไปฉันจะเป็น
        Someone ของเธอ Someday แม้ว่ายากเท่าไร โตไปฉันจะเป็น Someone ของเธอ
        Someday
      </p>
    </div>
  );
}

export default Content