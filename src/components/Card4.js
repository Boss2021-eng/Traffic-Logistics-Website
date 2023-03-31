import React from 'react';
import Card5 from './Card5';
import Card6 from './Card6';
import Card7 from './Card7';
import Card8 from './Card8';

const Card4 = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="bg-[#091242] w-[80%] flex ">
        <div className="flex w-[30%]">
          <Card5 />
        </div>
        <div className=" w-[70%] flex">
          <Card6 />
          <Card7 />
          <Card8 />
        </div>
      </div>
    </div>
  );
};

export default Card4;
