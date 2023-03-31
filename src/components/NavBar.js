import React from 'react';
import Facebook from '../assets/img/card8/Facebook.png';
import LinkedIn from '../assets/img/card8/LinkedIn.png';
import Twitter from '../assets/img/card8/Twitter.png';
import Instagram from '../assets/img/Instagram.png';
const NavBar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-36 bg-blue-600">
        <ul className="flex gap-8 text-center text-white items-center justify-center p-2 ">
          <li className=" border-r border-gray-100 px-2 ">Home</li>
          <li className="border-r border-gray-500 px-2">About</li>
          <li className="border-r border-gray-500 px-2">
            Pages <select className="bg-blue-600"></select>
          </li>
          <li className="border-r border-gray-500 px-2">Project</li>
          <li className="px-2">Contact</li>
        </ul>
        <div className=" flex items-center text-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 ">
              <div>
                <img src={Instagram} alt="Instagram" />
              </div>

              <div>
                <img src={Facebook} alt="Facebook" />
              </div>

              <div>
                <img src={Twitter} alt="Twitter" />
              </div>

              <div>
                <img src={LinkedIn} alt="LinkedIn" />
              </div>
            </div>

            <div className="bg-white text-black px-6 py-2 border-2 ">
              <p className="text-center">Request Quote</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
