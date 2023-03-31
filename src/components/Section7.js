import React from 'react';
import User from '../assets/img/section7/User.png';
import User2 from '../assets/img/section7/User2.png';
import User3 from '../assets/img/section7/User3.png';
const Section7 = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-[80%]">
        <p className=" text-xs text-center">The Transporters</p>
        <h2 className=" flex justify-center text-2xl py-4">Meet Expert Team</h2>
        <div className="flex gap-8">
          <div className="image">
            <img src={User} alt="User" />
          </div>

          <div className="image">
            <img src={User2} alt="User2" />
          </div>

          <div className="image">
            <img src={User3} alt="User3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
