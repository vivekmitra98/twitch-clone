import React, { useCallback, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import CarouselItem from "./CarouselItem";

import STREAMS from "../../../shared/data/streams";
import CATEGORIES from "../../../shared/data/categories";

import styles from "./Carousel.module.css";

const NUMBER_OF_RANDOM_STREAMS = 6;

const liveStreams = STREAMS.filter((stream) => stream.viewers > 0);

const randomStreams = liveStreams
  .sort(() => 0.5 - Math.random())
  .slice(0, NUMBER_OF_RANDOM_STREAMS);

const Carousel = () => {
  const [currentTop, setCurrentTop] = useState(0);
  const [direction, setDirection] = useState("");

  const moveLeft = () => {
    let top = currentTop;
    top--;
    setCurrentTop(top < 0 ? randomStreams.length - 1 : top);
    setDirection("left");
  };

  const moveRight = () => {
    var top = currentTop;
    setCurrentTop((top + 1) % randomStreams.length);
    setDirection("right");
  };

  const generateSlides = () => {
    let slides = [];
    let level;
    for (let i = currentTop - 1; i <= currentTop + 1; i++) {
      let index = i;
      if (i < 0) {
        index = i + randomStreams.length;
      } else if (i >= randomStreams.length) {
        index = i % randomStreams.length;
      }
      level = currentTop - i;
      slides.push({ ...randomStreams[index], level: level, index: index });
    }
    return slides;
  };

  const changeTop = useCallback((index) => {
    setCurrentTop(index);
  }, []);

  return (
    <div className={styles.carousel}>
      <div
        className={`${styles.arrow} ${styles["arrow-left"]}`}
        onClick={moveLeft}
      >
        <MdKeyboardArrowLeft size={"2rem"} />
      </div>
      <TransitionGroup component={null}>
        {generateSlides().map((slide) => (
          <CSSTransition key={slide.id} timeout={500} classNames={direction}>
            <CarouselItem
              id={slide.id}
              name={slide.name}
              category={CATEGORIES[slide.category]}
              viewers={slide.viewers}
              level={slide.level}
              index={slide.index}
              onClick={changeTop}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div
        className={`${styles.arrow} ${styles["arrow-right"]}`}
        onClick={moveRight}
      >
        <MdKeyboardArrowRight size={"2rem"} />
      </div>
    </div>
  );
};

export default Carousel;
