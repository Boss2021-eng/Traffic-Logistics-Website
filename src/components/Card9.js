import React from 'react';
import Logo from '../assets/img/Logo.png';
import call from '../assets/img/card5/call.png';
import email from '../assets/img/card5/email.png';
import clock from '../assets/img/clock.png';

const Card9 = () => {
  return (
    <div className=" flex items-center px-8 bg-[rgb(9,18,66)] justify-between gap-4 w-[85%] text-white">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex py-4 text-xs gap-16">
        <div className="flex items-center gap-2 ">
          <div>
            <img src={clock} alt="clock" />
          </div>
          <p>
            {' '}
            Mon - Sat 9.00 - 18.00 <br />
            Sunday Closed{' '}
          </p>
        </div>

        <div className="flex items-center gap-2 py-4">
          <div>
            <img src={email} alt="email" />
          </div>
          <p>
            {' '}
            Email <br />
            contact@logistics.com{' '}
          </p>
        </div>

        <div className="flex  items-center gap-2 py-4">
          <div>
            <img src={call} alt="call" />
          </div>
          <p>
            {' '}
            Call Us <br />
            (00) 112 365 489
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card9;
