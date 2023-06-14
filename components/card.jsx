import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
const productCard = ({ ImageURl, title }) => {
  return (
    <>
      <div className="  py-9 grid place-items-center  ">
        <div className="bg-lightBlue  sm:h-[360px] sm:w-64 w-[152px] h-[270px] rounded-md relative ">
          <div className=" card flex justify-center items-center leading-none  ">
            <Link href={`/product/1`}>
              <img
                alt="df"
                src={ImageURl}
                className="  w-56 rounded-md shadow-2xl sm:mt-6 mt-5 pl-1 pr-1 sm:pl-0 sm:pr-0 transform -translate-y-10 hover:-translate-y-9 -translate-y-4 transition duration-700 border-1 border-gray-100"
              />
            </Link>
          </div>
          <div className="p-3">
            <div>
              <p className="block mb-1 font-extralight">{title}</p>
              <h1 className="text-xs tracking-tighter text-gray-600">1200$</h1>
            </div>
            <div className="absolute bottom-0 right-0 pr-1 pb-1">
              <div className="mt-auto ">
                <Link href={`/`}>
                  <Button
                    text={"show"}
                    color={"custom-blue"}
                    textColor={"white"}
                    size={"medium"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default productCard;
