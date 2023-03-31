import React from 'react';
import Card2 from './Card2';
import Card3 from './Card3';
import Star from './Star';

const Card1 = () => {
  return (
    <div>
      <div className="flex  w-full h-[425px] p-8">
        <div className="">
          <Card2 />
          <p>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.
          </p>
          <div className="flex">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>

        <div className="bg-[#091242] text-white p-2">
          <Card3 />
          <p>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.
          </p>
          <div className="flex">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
