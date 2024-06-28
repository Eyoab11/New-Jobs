import React from 'react';
import jobslogo from '../assets/images/job.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive })=> isActive ? 'text-white bg-gray-900 hover:bg-gray-700 rounded-full px-3 py-2': 'text-white hover:bg-gray-700 rounded-full px-3 py-2';
  return (
    <>
    <nav className="bg-green-900 border-b border-green-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto rounded-full"
                src={ jobslogo }
                alt="New Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >NewJobs</span
              >
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  >Home</NavLink
                >
                <NavLink
                  to="/jobs"
                  className={linkClass} >Jobs</NavLink
                >
                <NavLink
                  to="/add-job"
                  className={linkClass} >Add Job</NavLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar