import { useState } from "react";
import FaqContent from "./FaqContent";

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState("stats"); // Initial selected tab

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <div className="w-full bg-gray-800 border border-gray-700 rounded-lg shadow">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select tab
        </label>
        <select
          id="tabs"
          className="bg-white border-0 border-b border-gray-600 text-gray-700 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          onChange={(e) => handleTabClick(e.target.value)}
          value={selectedTab}
        >
          <option value="stats">Statistics</option>
          <option value="about">Services</option>
          <option value="faq">FAQ</option>
        </select>
      </div>
      <ul
        className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex"
        id="fullWidthTab"
        data-tabs-toggle="#fullWidthTabContent"
        role="tablist"
      >
        <li className={`w-full ${selectedTab === "stats" ? "bg-gray-700" : "bg-gray-600"}`}>
          <button
            id="stats-tab"
            data-tabs-target="#stats"
            type="button"
            role="tab"
            aria-controls="stats"
            aria-selected={selectedTab === "stats"}
            className={`inline-block w-full p-4 rounded-ss-lg ${
              selectedTab === "stats" ? "bg-gray-50" : "bg-white"
            } hover:bg-gray-100 focus:outline-none`}
            onClick={() => handleTabClick("stats")}
          >
            Statistics
          </button>
        </li>
        <li className={`w-full ${selectedTab === "about" ? "bg-gray-100" : "bg-white"}`}>
          <button
            id="about-tab"
            data-tabs-target="#about"
            type="button"
            role="tab"
            aria-controls="about"
            aria-selected={selectedTab === "about"}
            className={`inline-block w-full p-4 ${
              selectedTab === "about" ? "bg-gray-50" : "bg-white"
            } hover:bg-gray-100 focus:outline-none`}
            onClick={() => handleTabClick("about")}
          >
            Services
          </button>
        </li>
        <li className={`w-full ${selectedTab === "faq" ? "bg-gray-100" : "bg-white"}`}>
          <button
            id="faq-tab"
            data-tabs-target="#faq"
            type="button"
            role="tab"
            aria-controls="faq"
            aria-selected={selectedTab === "faq"}
            className={`inline-block w-full p-4 rounded-se-lg ${
              selectedTab === "faq" ? "bg-gray-50" : "bg-white"
            } hover:bg-gray-100 focus:outline-none`}
            onClick={() => handleTabClick("faq")}
          >
            FAQ
          </button>
        </li>
      </ul>
      <div
        id="fullWidthTabContent"
        className="border-t border-gray-200"
      >
        <div
          className={`p-4 bg-white rounded-lg ${
            selectedTab === "stats" ? "block" : "hidden"
          }`}
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          {/* Statistics content */}
          <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
              <dd className="text-gray-500">Developers</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
              <dd className="text-gray-500">
                Public repositories
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
              <dd className="text-gray-500">
                Open source projects
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
              <dd className="text-gray-500">Contributors</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">90+</dt>
              <dd className="text-gray-500">
                Top Forbes companies
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
              <dd className="text-gray-500">
                Organizations
              </dd>
            </div>
          </dl>
        </div>
        <div
          className={`p-4 bg-white rounded-lg   ${
            selectedTab === "about" ? "block" : "hidden"
          }`}
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          {/* Services content */}
          <h2 className="flex justify-center mb-5 text-2xl font-extrabold tracking-tight text-gray-900">
            We invest in the world’s potential
          </h2>
          {/* Services list */}
          
          <div className="w-full flex justify-center items-center" >
              <ul className=" flex flex-col justify-center 
                space-y-4 text-gray-500 h-full w-fit"   >
                <li className="flex space-x-2 items-center">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-blue-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="leading-tight">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li className="flex space-x-2 items-center">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-blue-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="leading-tight">Templates for everyone</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-blue-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="leading-tight">Real-time data monitoring</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-blue-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="leading-tight">Global user base</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-blue-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="leading-tight">
                    Highly scalable architecture
                  </span>
                </li>
              </ul>
          </div>
        </div>
        <div
          className={`p-4 bg-white rounded-lg ${
            selectedTab === "faq" ? "block" : "hidden"
          }`}
          id="faq"
          role="tabpanel"
          aria-labelledby="faq-tab"
        >
          <FaqContent />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
