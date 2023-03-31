import React from 'react';
import call from '../assets/img/card5/call.png';
import email from '../assets/img/card5/email.png';

const Card5 = () => {
  return (
    <div className="text-white p-4 flex items-center justify-center ">
      <div className="">
        <h1 className="py-4 mx-4 text-center font-bold text-2xl ">
          TransitFlow
        </h1>
        <p className="py-4 text-xs">
          Leverage agile frameworks to provide a <br />
          robust synopsis for strategy collaborative <br />
          thinking to further the overall value <br />
          proposition.
        </p>

        <div className="flex items-center gap-2 py-4">
          <div>
            <img src={call} alt="call" />
          </div>
          <p>
            {' '}
            Email <br />
            contact@logistics.com{' '}
          </p>
        </div>

        <div className="flex  items-center gap-2 py-4">
          <div>
            <img src={email} alt="email" />
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

export default Card5;
