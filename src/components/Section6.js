import React from 'react';
import Image1 from '../assets/img/section8/Image1.png';
import Card13 from './Card13';

const Section6 = () => {
  return (
    <section className="flex h-[900px]  items-center justify-center">
      <div className="bg-blue-900">
        <div className="h-[610px] w-[800px]">
          <img src={Image1} alt="Image1" />
        </div>
      </div>

      <div className="">
        <Card13 />
      </div>
    </section>
  );
};

export default Section6;
