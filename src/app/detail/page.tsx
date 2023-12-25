'use client';
import { Potta_One, Poor_Story } from 'next/font/google';
import cx from 'classnames';
import useUserStore from '@/stores/user';
import Card from '@/components/Card';
import styles from './detail.module.scss';
import Button from '@/components/Button';
import { useState } from 'react';
import MBTICards from '@/components/MBTICards';

const pottaOne = Potta_One({ weight: '400', subsets: ['latin'] });
const poorStory = Poor_Story({ weight: '400', subsets: ['latin'] });

export default function Page() {
  const { userId, mbti } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <div className={styles.detail}>
      <div className={styles.detail__title}>
        <p>
          {userId}님의
          <br />
          COMMIT 엠비티아이
        </p>
        <p className={cx(styles.detail__mbti, pottaOne.className)}>{mbti}</p>
      </div>
      <Card>hi</Card>
      {!isOpen ? (
        <Button className={styles.detailButton} onClick={() => setIsOpen(true)}>
          <p className={poorStory.className}>더 자세히 살펴보기</p>
        </Button>
      ) : (
        <MBTICards slides={items} />
      )}
    </div>
  );
}
