import React from 'react';
import Card14 from './Card14';
import Card15 from './Card15';

const Card13 = () => {
  return (
    <div className="p-8 ">
      <p className="text-xs">Why Choose</p>
      <h1 className="text-2xl py-4 font-bold">
        {' '}
        We create opportunity to <br />
        reach potential
      </h1>
      <p className="text-sm">
        {' '}
        Leverage agile frameworks to provide a robust synopsis for <br />
        strategy foster collaborative thinking to further the overall value{' '}
        <br />
        proposition.{' '}
      </p>
      <div className="flex py-4 gap-8">
        <Card14 />
        <Card15 />
      </div>
    </div>
  );
};

export default Card13;
