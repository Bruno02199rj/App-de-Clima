import { data } from "autoprefixer";
import React, { useState, StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import Carousel from "react-simply-carousel";

function ReactSimplyCarouselExample({data}) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none"
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "blue"
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={4}
        speed={400}
        centerMode
      >
        {Array.from({ length: 10 }).map((item, index) => (
          <div className="bg-red-800 h-12 w-12"
           
            key={index}
          >
            {index}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;