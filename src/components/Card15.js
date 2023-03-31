import React from 'react';
import image1 from '../assets/img/card13/image1.png';
import image2 from '../assets/img/card13/image2.png';
import image3 from '../assets/img/card13/image3.png';
import image4 from '../assets/img/card13/image4.png';
import image5 from '../assets/img/card13/image5.png';
import image6 from '../assets/img/card13/image6.png';

const Card15 = () => {
  return (
    <div className="">
      <div>
        <div className=" flex items-center text-lg py-2 gap-4">
          <div className="image">
            <img src={image2} alt="image2" />
          </div>

          <p>Ship Everywhere</p>
        </div>

        <div className=" flex items-center text-lg py-2 gap-4">
          <div className="image">
            <img src={image4} alt="image4" />
          </div>

          <p>24/7 Support</p>
        </div>

        <div className=" flex items-center text-lg py-2 gap-4">
          <div className="image">
            <img src={image6} alt="image6" />
          </div>

          <p>Transparent Pricing</p>
        </div>
      </div>
    </div>
  );
};

export default Card15;
