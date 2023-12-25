import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Card from '../Card';
import styles from './MBTICards.module.scss';
import cx from 'classnames';

interface slideType {
  MBTI: string;
  description: string[];
  subDescription: {
    title: string;
    contents: string;
  }[];
}

type PropType = {
  slides: slideType[];
};

function MBTICards({ slides }: PropType) {
  const [viewportRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className={styles.embla} ref={viewportRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, idx) => {
            return (
              <Card className={cx(styles.embla__slide, styles.card)}>
                <div className={styles.topFrame}>
                  <p>{slide.MBTI}</p>
                  <ul>
                    {slide.description.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.bottomFrame}>
                  {slide.subDescription.map((item, idx) => (
                    <>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.contents}</p>
                      </div>
                      {idx === 0 && <div className={styles.divider}></div>}
                    </>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cx(
                styles.embla__dot,
                index === selectedIndex && styles['embla__dot--selected'],
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MBTICards;
