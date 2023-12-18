'use client';
import FallingSnow from '@/components/FallingSnow';
import styles from './loading.module.scss';

export default function Page() {
  return (
    <div className={styles.loading}>
      <p>분석 중이에요!</p>
      <FallingSnow />
    </div>
  );
}
