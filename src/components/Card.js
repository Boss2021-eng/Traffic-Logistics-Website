import React from 'react';
import LiquidTransportation from '../assets/img/section4/LiquidTransportation.png';
import PackagingSolutions from '../assets/img/section4/PackagingSolutions.png';
import ContractLogistics from '../assets/img/section4/ContractLogistics.png';
import WarehouseDistribution from '../assets/img/section4/WarehouseDistribution.png';
import SpecializedTransport from '../assets/img/section4/SpecializedTransport.png';

const Card = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-[80%]">
        <h2 className=" flex justify-center text-2xl py-4">
          Transporting Across The World
        </h2>
        <div className="flex">
          <div className="image">
            <img src={LiquidTransportation} alt="LiquidTransportation" />
          </div>

          <div className="image">
            <img src={PackagingSolutions} alt="PackagingSolutionse" />
          </div>

          <div className="image">
            <img src={ContractLogistics} alt="ContractLogistics" />
          </div>

          <div className="image">
            <img src={WarehouseDistribution} alt="WarehouseDistribution" />
          </div>

          <div className="image">
            <img src={SpecializedTransport} alt="SpecializedTransport" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
