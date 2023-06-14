import ImageCarousel from "./slider";
import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import ProductCard from "./card";
// Data
import data from "./Ender.json";
const RelatedProducts = ({ descrption = true }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="sm:text-3xl  text-xl font-extrabold -mb-5 ">
          {" "}
          <p>Products you might Like :</p>
        </div>
        <div className=" flex mainCraousel ">
          <div className="parent  w-full flex flex-col sm:flex-row rounded  ">
            <div className=" w-full">
              <div className="carousel ">
                <div className="relative ">
                  <div className="flex justify-between absolute top left w-full h-full items-center">
                    <button
                      onClick={movePrev}
                      className="hover:bg-blue-900/75 text-white w-10 h-1/4 text-center opacity-75 bg-custom-blue hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                      disabled={isDisabled("prev")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-20 -ml-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      <span className="sr-only">Prev</span>
                    </button>
                    <button
                      onClick={moveNext}
                      className="hover:bg-blue-900/75 text-white w-10 h-1/4    bg-custom-blue text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-100"
                      disabled={isDisabled("next")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-20 -ml-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="sr-only">Next</span>
                    </button>
                  </div>
                  <div
                    ref={carousel}
                    className=" carousel-container relative flex gap-0 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 hide-scrollbar swipeable overflow-x-scroll"
                  >
                    {data.resources.map((resource, index) => {
                      return (
                        <div key={1} className="p-2">
                          <ProductCard
                            ImageURl={resource.imageUrl}
                            title={resource.title}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
