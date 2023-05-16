import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { images } from "../dataBase/sliderDB";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);


  const nextSlide = () => setCurrentIndex((prev) => (prev < 1 ? images.length - 1 : prev - 1));

  return (
    <section className="flex items-center justify-center">
      <div className="flex items-start relative mx-36 my-36 shadow-lg shadow-black w-full h-[700px]">
        <div>
          <div
            onClick={prevSlide}
            className="z-[50] w-14 h-14 rounded-full flex items-center justify-center bg-[#3f346c] border-4 border-white absolute -left-6 -bottom-6 cursor-pointer"
          >
            <FiChevronLeft className="w-8 h-8" />
          </div>
          {images?.map((item, index) => {
            let position = "opacity-0"
            if (index < currentIndex || index > currentIndex) {
              position = "opacity-0"
            }
            if (index === currentIndex) {
              position = "opacity-100"
            }

            return (
              <div
                className={`${position} duration-[2s] transition-[all_ease-in-out] absolute w-full h-[700px]`}
              >
                <img src={item.img} alt="" className="w-full h-full" />
              </div>
            );
          })}
          <button
            onClick={nextSlide}
            className=" w-14 h-14 rounded-full flex items-center justify-center bg-[#3f346c] border-4 border-white absolute -right-6 -bottom-6 cursor-pointer"
          >
            <FiChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
