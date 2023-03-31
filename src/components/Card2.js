import React from 'react';
import KathleenSmith from '../assets/img/card2/KathleenSmith.png';
import logo from '../assets/img/card2/logo.png';

const Card2 = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-4">
          <div className="border-black b-1 ">
            <img src={KathleenSmith} alt="KathleenSmith" />
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

export default Card2;
