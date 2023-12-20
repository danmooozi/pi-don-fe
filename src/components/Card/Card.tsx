import cx from 'classnames';
import styles from './Card.module.scss';
import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

export default function Card({
  className,
  children,
}: PropsWithChildren<Props>) {
  return <div className={cx(styles.Card, className)}>{children}</div>;
}
