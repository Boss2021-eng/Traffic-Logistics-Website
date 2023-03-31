import React from 'react';
import Card from './Card';

const Section4 = () => {
  return (
    <section>
      <Card />

      <div className="h-[300px] bg-[#FFB629] flex items-center justify-center">
        <div className="py-4">
          <button className=" bg-[#091242] inline-block border text-white p-2">
            More Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
