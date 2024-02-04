import { Potta_One } from 'next/font/google';
import Image from 'next/image';
import cx from 'classnames';

import useUserStore from '@/stores/user';
import Card from '@/components/Card';
import styles from './GoodWorstCard.module.scss';
import { synergy } from '@/constants/mbti';

const pottaOne = Potta_One({ weight: '400', subsets: ['latin'] });

const GoodWorstCard = () => {
  const { mbti } = useUserStore();
  const mbtiInfo = synergy[mbti];
  return (
    <Card className={cx(styles.GoodWorstCard)}>
      <p className={styles.GoodWorstCard__desc}>{mbtiInfo.desc}</p>
      <div className={styles.GoodWorstCard__types}>
        <div
          className={cx(
            styles.GoodWorstCard__group,
            styles['GoodWorstCard__group--good'],
          )}
        >
          <span className={styles.GoodWorstCard__group__type}>
            <Image
              src="/detail_good_mbti.svg"
              alt="good_mbti"
              width={28}
              height={25}
            />
            잘 맞는 유형
          </span>
          <p
            className={cx(
              styles.GoodWorstCard__group__mbti,
              pottaOne.className,
            )}
          >
            {mbtiInfo.good}
          </p>
        </div>
        <div
          className={cx(
            styles.GoodWorstCard__group,
            styles['GoodWorstCard__group--bad'],
          )}
        >
          <span className={styles.GoodWorstCard__group__type}>
            <Image
              src="/detail_bad_mbti.svg"
              alt="bad_mbti"
              width={28}
              height={25}
            />
            잘 맞지 않는 유형
          </span>
          <p
            className={cx(
              styles.GoodWorstCard__group__mbti,
              pottaOne.className,
            )}
          >
            {mbtiInfo.bad}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default GoodWorstCard;
