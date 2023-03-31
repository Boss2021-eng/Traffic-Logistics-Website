import React from 'react';
import Card1 from './Card1';

const Section5 = () => {
  return (
    <section className="flex justify-center  ">
      <div className="w-[75%]">
        <p className="text-xs">Testimonial</p>
        <div>
          <h1 className="text-xl">What Our Customer Say</h1>
          <div></div>
        </div>

        <div className="flex items-center justify-center">
          <Card1 />
        </div>
      </div>
    </section>
  );
};

export default Section5;
