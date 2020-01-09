import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
//import promo1 from '../img/promo1.png';


const items = [
  {
    src:"https://firebasestorage.googleapis.com/v0/b/sodimac-fe7fd.appspot.com/o/promo.png?alt=media&token=c2768450-89b9-45db-841f-ec08be36f88f"
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/sodimac-fe7fd.appspot.com/o/promo2.png?alt=media&token=5de0b2b3-cda9-4afa-8544-be7dfe84f868',
   
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/sodimac-fe7fd.appspot.com/o/promo1.png?alt=media&token=311ba655-efcf-4021-aeaa-e13263bf9ca3',
    
  }
];

const CarouselOfImages = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselOfImages;