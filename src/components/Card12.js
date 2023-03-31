import React from 'react';
import WareHousing from '../assets/img/section2/WareHousing.png';
import LocalShipping from '../assets/img/section2/LocalShipping.png';
const Card12 = () => {
  return (
    <div className="card2">
      <div className="flex ">
        <table>
          <tr className="row  flex items-center ">
            <td>
              <div className="w-24 h-24 image flex items-center justify-center">
                <img src={WareHousing} alt="WareHousing" />
              </div>
            </td>

            <td>
              <div>
                <h3 className="text-lg">WareHousing</h3>
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
              <div className=" w-24 h-12 flex items-center justify-center">
                <img src={LocalShipping} alt="LocalShipping" />
              </div>
            </td>
            <td>
              <div>
                <h3 className="text-lg">LocalShipping </h3>
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

export default Card12;
