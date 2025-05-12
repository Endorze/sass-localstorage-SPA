import type { FC } from "react";
import styles from "./Button.module.scss";

type Props = {
    text: string,
    onClick: () => void;
}

const Button:FC<Props> = ({text, onClick}) => {
    return (
        <button type="button" onClick={onClick} className={styles.button}>{text}</button>
    )
}

export default Button;