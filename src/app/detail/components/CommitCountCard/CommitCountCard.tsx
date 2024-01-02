import { ForwardedRef, forwardRef } from 'react';
import cx from 'classnames';
import Image from 'next/image';

import Card from '@/components/Card';
import styles from './CommitCount.module.scss';

interface Props {
  className: string;
  count: number;
  isMore: boolean;
}

const CommitCountCard = (
  { className, count, isMore }: Props,
  ref: ForwardedRef<HTMLDivElement | null>,
) => {
  return (
    <Card ref={ref} className={cx(className, styles.card)}>
      <p>총 커밋 갯수는</p>
      <h3>
        {count.toLocaleString('ko-KR')} <span>개</span>{' '}
      </h3>

      <Image
        src="/commits.png"
        alt="커밋 아이콘"
        width={203}
        height={140}
        className={styles.icon}
      />
      <div className={styles.description}>
        <p>다른 커밋터 분들에 비해</p>
        <p>
          <span>{isMore ? '많이' : '적게'}</span> 하신 편이에요!
        </p>
      </div>
    </Card>
  );
};

export default forwardRef(CommitCountCard);
