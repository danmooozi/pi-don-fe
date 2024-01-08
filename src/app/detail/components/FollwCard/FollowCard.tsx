import { ForwardedRef, forwardRef } from 'react';
import cx from 'classnames';
import Image from 'next/image';

import Card from '@/components/Card';
import styles from './FollowCard.module.scss';

const FollowCard = ({}, ref: ForwardedRef<HTMLDivElement | null>) => {
  return (
    <Card ref={ref} className={cx(styles.card)}>
      <p>자주 사용하는 언어</p>
      <h3>hi</h3>

      <div className={styles.description}>
        <div className={styles.ellipse1Wrapper}>
          <div className={styles.ellipse1}>
            <Image
              src="/Ellipse1.svg"
              alt="1위 언어"
              width={144}
              height={144}
            />

            <div className={styles.ellipse1_text}>
              <h5>1위</h5>
              <p>hi</p>
            </div>
          </div>
        </div>

        <div className={styles.ellipse2Wrapper}>
          <div className={styles.ellipse2}>
            <Image
              src="/Ellipse2.svg"
              alt="2위 언어"
              width={108}
              height={108}
            />

            <div className={styles.ellipse2_text}>
              <h5>2위</h5>
              <p>hi</p>
            </div>
          </div>
        </div>

        <div className={styles.ellipse3Wrapper}>
          <div className={styles.ellipse3}>
            <Image src="/Ellipse3.svg" alt="3위 언어" width={93} height={93} />

            <div className={styles.ellipse3_text}>
              <h5>3위</h5>
              <p>hi</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default forwardRef(FollowCard);
