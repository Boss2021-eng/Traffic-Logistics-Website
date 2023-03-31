import React from 'react';
import background2 from '../assets/img/section3/background2.png';
import delivery from '../assets/img/section3/delivery.png';
import cost from '../assets/img/section3/cost.png';
import Image1 from '../assets/img/section3/Image1.jpg';
import Image2 from '../assets/img/section3/Image2.png';
import box from '../assets/img/section3/box.png';

const Section3 = () => {
  return (
    <section className="fixed">
      <div
        className="bg-my-image h-[400px] bg-cover bg-center  "
        style={{ backgroundImage: `url(${background2})` }}
      ></div>

      <div className=" flex justify-center p-8">
        <div className=" p-16 flex gap-2">
          <div>
            <div>
              <p className="border-l  inline-block max-w-xs p-0.5 text-xs">
                Why Us
              </p>
              <h1 className="font-bold text-2xl py-2">
                We provide full range global <br />
                logistics solution
              </h1>

              <p className="text-xs">
                Leverage agile frameworks to provide a robust synopsis for{' '}
                <br />
                strategy foster collaborative thinking to further the overall
                value proposition
              </p>

              <p className="text-xs py-2 ">
                Organically grow the holistic world view of disruptive <br />
                information via workplace diversity and empowerment
              </p>
            </div>

            <div className=" flex items-center text-lg py-2 gap-4">
              <div className="image">
                <img src={delivery} alt="delivery" />
              </div>

              <p>Delivery on Time</p>
            </div>

            <div className=" flex items-center text-lg py-2 gap-4">
              <div className="image">
                <img src={cost} alt="cost" />
              </div>

              <p>Optimized Travel Cost</p>
            </div>

            <div className="flex gap-8 py-16 items-center justify-center">
              <div className="flex gap-2">
                <p>1294</p>
                <div className="flex items-center justify-center">
                  <img className="h-3" src={box} alt="box" />
                </div>

                <p>Delivered packages </p>
              </div>

              <div className="flex gap-2">
                <p>3594</p>
                <div className="flex items-center justify-center">
                  <img className="h-3" src={box} alt="box" />
                </div>
                <p>Satisfied Clients </p>
              </div>
            </div>
          </div>
          <div></div>
          <div className="">
            <div className="">
              <img src={Image1} alt="Image1" />
            </div>
            <div className="">
              <img src={Image2} alt="Image2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
