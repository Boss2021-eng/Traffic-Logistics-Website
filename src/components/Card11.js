import React from 'react';
import WareHousing from '../assets/img/section2/WareHousing.png';
import SafeTransport from '../assets/img/section2/SafeTransport.png';
import AirFreight from '../assets/img/section2/AirFreight.png';

const Card11 = () => {
  return (
    <div className="card2">
      <div className="flex ">
        <table>
          <tr className="row  flex items-center ">
            <td>
              <div className="w-24 h-24 image flex items-center justify-center">
                <img src={SafeTransport} alt="safeTransport" />
              </div>
            </td>

            <td>
              <div>
                <h3 className="text-lg">Sea Transport Services</h3>
                <p className="text-xs">
                  Following the quality of our service <br />
                  thus having gained trust <br />
                  of many clients{' '}
                </p>
              </div>
            </td>
          </tr>

          <tr className="flex items-center justify-center">
            {' '}
            <td>
              <div className=" w-24 h-24 flex items-center justify-center">
                <img src={AirFreight} alt="AirFreight" />
              </div>
            </td>
            <td>
              <div>
                <h3 className="text-lg">Air Freight Services </h3>
                <p className="text-xs">
                  Following the quality of our service <br />
                  thus having gained trust <br />
                  of many clients{' '}
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Card11;
