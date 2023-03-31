import React from 'react';
import background3 from '../assets/img/Footer/background3.png';
import Card4 from './Card4';

const Footer = () => {
  return (
    <section className="bg-[#091242]">
      <div
        className="bg-my-image h-[350px] bg-cover bg-center px-36 py-24 "
        style={{ backgroundImage: `url(${background3})` }}
      ></div>
      <Card4 />
    </section>
  );
};

export default Footer;
