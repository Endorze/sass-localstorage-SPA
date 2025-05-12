import styles from "./Input.module.scss";
import type { FC } from "react";

type Props = {
    placeholder: string,
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
    value: string,
    type: string,
}

const Input:FC<Props> = ({placeholder, onChange, value, type}) => {
    return (
        <input className={styles.input} type={type} value={value} placeholder={placeholder} onChange={onChange}></input>
    )
}

export default Input;