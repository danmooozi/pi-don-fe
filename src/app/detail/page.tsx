'use client';
import { Potta_One } from 'next/font/google';
import cx from 'classnames';
import useUserStore from '@/stores/user';
import Card from '@/components/Card';
import styles from './detail.module.scss';

const pottaOne = Potta_One({ weight: '400', subsets: ['latin'] });

export default function Page() {
  const { userId, mbti } = useUserStore();
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
    </div>
  );
}
