import React from "react";
import ChessSetModel from "./ChessSetModel";
import CarModel from "./CarModel";
import { FaMouse, FaSearchPlus, FaSearchMinus } from 'react-icons/fa'; // Importing icons for instructions
import BMWM4Model from "./CarModels/BMWM4";
import NisanR33 from "./CarModels/NisanR33";
import Lamborghini from "./CarModels/lamborghini";
import SportsBike from "./CarModels/SportsBike";
import Raider from "./CarModels/Raider";


function Hobbies() {
  return (
    <div >
      {/* Instructions Section  It is Fixed */}
      {/* <div className="fixed top-5 right-5 bg-white p-4 shadow-lg rounded-md z-10">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Instructions</h2>
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center">
            <FaMouse className="text-2xl mr-2" />
            <span className="text-sm">Click and Drag to Rotate</span>
          </div>
          <div className="flex items-center">
            <FaSearchPlus className="text-2xl mr-2" />
            <span className="text-sm">Scroll to Zoom In</span>
          </div>
          <div className="flex items-center">
            <FaSearchMinus className="text-2xl mr-2" />
            <span className="text-sm">Scroll to Zoom Out</span>
          </div>
        </div> */}
      {/* </div> */}

      <ChessSetModel />
      {/* <CarModel /> */}
      <BMWM4Model/>
      <NisanR33/>
      <Lamborghini/>
      <SportsBike/>
      <Raider/>
    </div>
  );
}

export default Hobbies;
