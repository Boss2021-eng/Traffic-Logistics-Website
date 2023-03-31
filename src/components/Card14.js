import React from 'react';
import image1 from '../assets/img/card13/image1.png';
import image2 from '../assets/img/card13/image2.png';
import image3 from '../assets/img/card13/image3.png';
import image4 from '../assets/img/card13/image4.png';
import image5 from '../assets/img/card13/image5.png';
import image6 from '../assets/img/card13/image6.png';

const Card14 = () => {
  return (
    <div className="">
      <div className=" flex items-center text-lg py-2 gap-4">
        <div className="image">
          <img src={image1} alt="image1" />
        </div>

        <p>Safe Package</p>
      </div>

      <div className=" flex items-center text-lg py-2 gap-4">
        <div className="image">
          <img src={image3} alt="image3" />
        </div>

        <p>Global Tracking</p>
      </div>

      <div className=" flex items-center text-lg py-2 gap-4">
        <div className="image">
          <img src={image5} alt="image5" />
        </div>

        <p>In Time Delivery</p>
      </div>
    </div>
  );
};

export default Card14;
