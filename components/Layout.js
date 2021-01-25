import { useState } from "react";
import CustomLink from './CustomLink';

export default function Layout({ links, children }) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleMenu = () => {
    console.log('clicked')
    setCollapsed(!collapsed)
  };

  const overlayClasses = "fixed inset-0 transition-opacity ease-linear duration-300 " + (collapsed ? "opacity-0" : "opacity-100");
  const menuClasses = "relative flex-1 flex flex-col max-w-xs w-full bg-gray-800 transition ease-in-out duration-300 transform " + (collapsed ? "-translate-x-full" : "translate-x-0");
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. --> */}
      <div className="md:hidden">
        <div className={"fixed inset-0 flex z-40 " + (collapsed ? "pointer-events-none" : "")}>
          <div className={overlayClasses}>
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          <div className={menuClasses}>
            {!collapsed && (
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button onClick={toggleMenu} className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Close sidebar</span>
                  {/* <!-- Heroicon name: x --> */}
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                {links.map(link => (
                  <CustomLink {...link} />
                ))}
              </nav>
            </div>
          </div>
          <div className="flex-shrink-0 w-14">
            {/* <!-- Force sidebar to shrink to fit close icon --> */}
          </div>
        </div>
      </div>

      {/* <!-- Static sidebar for desktop --> */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div className="flex flex-col h-0 flex-1 bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
                {links.map(link => (
                  <CustomLink {...link} />
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button onClick={toggleMenu} className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open sidebar</span>
            {/* <!-- Heroicon name: menu --> */}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* <!-- Replace with your content --> */}
              <div className="py-4">
                {children}
              </div>
              {/* <!-- /End replace --> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}