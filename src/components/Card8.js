import React from 'react';
import Facebook from '../assets/img/card8/Facebook.png';
import LinkedIn from '../assets/img/card8/LinkedIn.png';
import Twitter from '../assets/img/card8/Twitter.png';

const Card8 = () => {
  return (
    <div className="text-white p-4">
      <h1 className="py-4 bg-[#091242] text-center font-bold text-2xl">
        Subscribe
      </h1>
      <div className="py-4 text-xs">
        <div className="border-black border-2 flex items-center px-4 py-4">
          <p>Email here</p>
        </div>

        <div className="flex gap-4 p-4 items-center">
          <div className="px-6 py-3 bg-[#FFBE34] border-black text-black font-bold border-1 my-2">
            <button className=""> Send Now </button>
          </div>

          <div className="flex gap-4">
            <div>
              <img src={LinkedIn} alt="LinkedIn" />
            </div>
            <div>
              <img src={Twitter} alt="Twitter" />
            </div>

            <div>
              <img src={Facebook} alt="Facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card8;
