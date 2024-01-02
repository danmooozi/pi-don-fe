'use client';
import { Potta_One, Poor_Story } from 'next/font/google';
import cx from 'classnames';
import useUserStore from '@/stores/user';
import styles from './detail.module.scss';
import Button from '@/components/Button';
import { useEffect, useState, useRef } from 'react';
import MBTICards from '@/components/MBTICards';
import Card from '@/components/Card';
const pottaOne = Potta_One({ weight: '400', subsets: ['latin'] });
const poorStory = Poor_Story({ weight: '400', subsets: ['latin'] });

export default function Page() {
  const { userId, mbti } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const refs = useRef<null[] | HTMLDivElement[]>([]);

  // MOCK_DATA
  const items = [
    {
      MBTI: 'E',
      description: ['Star 수 총 0000개', '팔로잉 / 팔로워 총 00000명'],
      subDescription: [
        { title: '팔로잉/팔로워', contents: '50명 ⬆' },
        { title: '작성률', contents: '30개 ⬆' },
      ],
    },
    {
      MBTI: 'N',
      description: ['Star 수 총 0000개', '팔로잉 / 팔로워 총 00000명'],
      subDescription: [
        { title: '팔로잉/팔로워', contents: '50명 ⬆' },
        { title: '작성률', contents: '30개 ⬆' },
      ],
    },
    {
      MBTI: 'F',
      description: ['Star 수 총 0000개', '팔로잉 / 팔로워 총 00000명'],
      subDescription: [
        { title: '팔로잉/팔로워', contents: '50명 ⬆' },
        { title: '작성률', contents: '30개 ⬆' },
      ],
    },
    {
      MBTI: 'P',
      description: ['Star 수 총 0000개', '팔로잉 / 팔로워 총 00000명'],
      subDescription: [
        { title: '팔로잉/팔로워', contents: '50명 ⬆' },
        { title: '작성률', contents: '30개 ⬆' },
      ],
    },
  ];

  const updateStyle = () => {
    const headerHeight = 16;
    if (refs.current && refs.current.length) {
      refs.current.map((card, i) => {
        const incValue = i * headerHeight;
        card?.setAttribute('style', `top: ${incValue}px;`);
      });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', updateStyle);
    }
  }, []);

  return (
    <div className={styles.detail} ref={containerRef}>
      <div className={styles.detail__title}>
        <p>
          {userId}님의
          <br />
          COMMIT 엠비티아이
        </p>
        <p className={cx(styles.detail__mbti, pottaOne.className)}>{mbti}</p>
      </div>
      {!isOpen ? (
        <Button className={styles.detailButton} onClick={() => setIsOpen(true)}>
          <p className={poorStory.className}>더 자세히 살펴보기</p>
        </Button>
      ) : (
        <>
          <MBTICards slides={items} />

          <section className={styles.cards_scroll}>
            {/* 팔로워/팔로잉 카드 */}
            <Card
              className={styles.card}
              ref={(element) => {
                refs.current[0] = element;
              }}
            >
              <h2>card 1</h2>
            </Card>
            {/* 총 커밋 개수 카드 */}
            <Card
              className={styles.card}
              ref={(element) => {
                refs.current[1] = element;
              }}
            >
              <h2>card 2</h2>
            </Card>
            {/* 주로 커밋한 날 카드 */}
            <Card
              className={styles.card}
              ref={(element) => {
                refs.current[2] = element;
              }}
            >
              <h2>card 3</h2>
            </Card>

            {/* 코딩 라인 수 카드 */}
            <Card
              className={styles.card}
              ref={(element) => {
                refs.current[3] = element;
              }}
            >
              <h2>card 4</h2>
            </Card>
            {/* 자주 사용하는 언어 카드 */}
            <Card
              className={styles.card}
              ref={(element) => {
                refs.current[4] = element;
              }}
            >
              <h2>card 5</h2>
            </Card>
            {/* 나와 많이 소통한 커밋터 카드 */}
            <Card
              className={styles.card}
              ref={(element) => {
                refs.current[5] = element;
              }}
            >
              <h2>card 6</h2>
            </Card>
          </section>
        </>
      )}
    </div>
  );
}
