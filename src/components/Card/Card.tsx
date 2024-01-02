import cx from 'classnames';
import styles from './Card.module.scss';
import { PropsWithChildren, ForwardedRef, forwardRef } from 'react';

interface Props {
  className?: string;
}

function Card(
  { className, children }: PropsWithChildren<Props>,
  ref: ForwardedRef<HTMLDivElement | null>,
) {
  return (
    <div className={cx(styles.Card, className)} ref={ref}>
      {children}
    </div>
  );
}

export default forwardRef(Card);
