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
      <div className="parent h-full bg-gray-100">
        <div>
          <div className="product">
            <DropDown DropName={"Products"} arr={products} />
            <DropDown DropName={"price"} arr={price} />
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
