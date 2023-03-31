import React from 'react';
import background1 from '../assets/img/background1.png';

const Section1 = () => {
  return (
    <section
      className="bg-my-image h-screen bg-cover bg-center px-36 py-24 h-[550px]"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <div className="py-4">
        <div className=" inline-block bg-[#091242] text-xl text-white px-2">
          <p> Logistics & Supply Chain Solutions</p>
        </div>

        <h1 className="text-white text-4xl py-4 font-bold">
          Your Gateway <br />
          to any Destination <br />
          in the World
        </h1>

        <p className="text-white text-xl py-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
          Suspendisse sagittis nulla eget massa eleifend euismod. Sed nec <br />
          mauris nisl. Pellentesque habitant morbi tristique senectus et <br />
          netus et malesuada fames ac turpis egestas
        </p>

        <div>
          <button className="px-6 py-3 bg-[#FFBE34] border-2 my-2">
            Explore More{' '}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
