import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
//import promo1 from '../img/promo1.png';


const items = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/sodimac-fe7fd.appspot.com/o/imagen.png?alt=media&token=d80f7931-242f-4ed8-ac17-3feb2d8f969f',
   
  },
  {
    src:'https://firebasestorage.googleapis.com/v0/b/sodimac-fe7fd.appspot.com/o/imagen1.png?alt=media&token=27185f25-a556-4c76-9208-d804a1b42e52',
   
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/sodimac-fe7fd.appspot.com/o/imagen2.png?alt=media&token=c3e31d31-020a-43c6-8da4-d96cf8f28113',
    
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