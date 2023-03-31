import React from 'react';
import JohnMartin from '../assets/img/card2/JohnMartin.png';
import logo from '../assets/img/card2/logo.png';

const Card3 = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-4">
          <div className="border-black b-1 ">
            <img src={JohnMartin} alt="JohnMartin" />
          </div>

          <p>
            Kathleen Smith <br />
            Fuel Company
          </p>
        </div>

        <div className="border-black b-1">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Card3;
