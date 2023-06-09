import React from "react";
 import Button from './Button';
import Image from "next/image";
 



function Banner({imgSrc}) {
  return (

    
    <div className="w-screen    flex  justify-center items-center ">
    <div className="child1 bg-custom-blue w-full sm:w-1/2 sm:text-2xl  text-2xl justify-center items-center text-white font-bold p-1">
         <Image src={imgSrc} height={400}  width={10000} objectFit="cover" alt={imgSrc} />
         <div className="flex  justify-center items-center p-2">
      <Button  textColor={"gray-900"} text={"Shop Now"} color={"white"} /> 
    </div></div></div>
  );
}

export default Banner;