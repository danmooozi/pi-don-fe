import cx from "classnames";
import styles from "./Button.module.scss";
import { PropsWithChildren } from "react";

interface Props {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  className,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button className={cx(styles.Button, className)} onClick={onClick}>
      {children}
    </button>
  );
}
