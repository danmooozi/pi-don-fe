import Image from 'next/image';
import styles from './FallingSnow.module.scss';

const makeSnowFlakes = () => {
  const delayArray = [
    '1.34s',
    '4.76s',
    '3.12s',
    '2.89s',
    '1.45s',
    '2.23s',
    '3.90s',
    '4.67s',
    '6.54s',
    '2.98s',
  ];
  const sizeArray = [100, 10, 18, 76, 34, 58, 65, 21, 89, 50];
  const opacityArray = [0.4, 0.6, 1, 0.7, 1, 0.9, 0.6, 0.8, 0.9, 1];

  return sizeArray.map((size, i) => {
    const style = {
      animationDelay: delayArray[i],
      opacity: opacityArray[i],
    };
    return (
      <span className={styles.FallingSnow__snow_flake} key={size} style={style}>
        <Image src="/loading_snow.svg" alt="snow" width={size} height={size} />
      </span>
    );
  });
};

const FallingSnow: React.FC = () => {
  return <div className={styles.FallingSnow}>{makeSnowFlakes()}</div>;
};

export default FallingSnow;
