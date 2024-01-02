import { ForwardedRef, forwardRef } from 'react';
import cx from 'classnames';

import Card from '@/components/Card';
import styles from './CodingLineCard.module.scss';

interface Props {
  className: string;
  lines: {
    total: number;
    plus: number;
    minus: number;
  };
}

const CodingLineCard = (
  { className, lines }: Props,
  ref: ForwardedRef<HTMLDivElement | null>,
) => {
  return (
    <Card ref={ref} className={cx(className, styles.card)}>
      <p>총 1년간 코딩한 라인 수</p>
      <h3>
        {lines.total.toLocaleString('ko-KR')} <span>개</span>{' '}
      </h3>

      <div className={styles.description}>
        <div className={styles.description_plus}>
          <p>작성한 코드</p>
          <h4>+{lines.plus.toLocaleString('ko-KR')}</h4>
        </div>

        <div className={styles.description_minus}>
          <p>지운 코드</p>
          <h4>-{lines.minus.toLocaleString('ko-KR')}</h4>
        </div>
      </div>
    </Card>
  );
};

export default forwardRef(CodingLineCard);
