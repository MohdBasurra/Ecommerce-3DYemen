import { useState } from "react";
import Link from "next/link";
import DropDown from "./DropDown";
const Filltering = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const products = ["3D Printers", "Filament", "resin", "Parts"];
  const price = ["under 350$", "400$ - 700 $", "Above 1000$"];
  const BuildVol = ["220*220*250", "300*300*400", "450*450*470"];
  const materialType = [
    "PLA",
    "PLA+",
    "ABS",
    "PETG",
    "PP",
    "TPU",
    "NYLON",
    "TWINKLING",
  ];
  const Color = [
    "Black",
    "white",
    "blue",
    "red",
    "green",
    "natural",
    "purple",
    "silver",
    "Gold",
    "Navy Blue",
  ];
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="parent  ">
        <div>
          <div className="product flex flex-row sm:flex-col flex-wrap   w-full    justify-between" >
            <DropDown DropName={"Products"} arr={products} className=' '/>
            <DropDown DropName={"price"} arr={price} className='    ' />
            <DropDown DropName={"Build Volume"} arr={BuildVol} />
            <DropDown DropName={"material Type"} arr={materialType} />
            <DropDown DropName={"material Color"} arr={Color} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filltering;
