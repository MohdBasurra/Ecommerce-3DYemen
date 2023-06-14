import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Navbar";
import MyCarousel from "../components/MyCarousel";
import Introduction from "../components/Introduction";
import React, { useState } from "react";
import ImageCarousel from "../components/slider";
import Banner from "../components/Banner";
import BannerCreality from "../images/bannerCrality.jpg";
import BannerEsun from "../images/BannerEsun.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="">
        <Header />
        <div className=" justify-center items-center  ">
          <div className=" pt-8 justify-center items-center flex">
            <MyCarousel />
          </div>

          <div>
            <Introduction />{" "}
          </div>

          <div className=" w-full justify-center items-center">
            <div className="pt-8 justify-center items-center">
              {" "}
              <ImageCarousel />
            </div>
            <div className="pt-8 w-1/2">
              <Banner imgSrc={BannerEsun} />
            </div>

            <div className="pt-8">
              {" "}
              <ImageCarousel />
            </div>

            <div className="pt-8 w-1/2">
              <Banner imgSrc={BannerCreality} />
            </div>

            <div className="pt-8">
              {" "}
              <ImageCarousel />
            </div>

            <div className="pt-8">
              {" "}
              <ImageCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
