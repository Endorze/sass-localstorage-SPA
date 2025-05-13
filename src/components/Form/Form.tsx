import { useState } from "react";
import type { FC } from "react";
import type { Account } from "../../types/types";
import Button from "../Button/Button";
import styles from "./Form.module.scss"
import Input from "../Input/Input";
import peopleLogo from "/images/people.png"

type Props = {
    onLogin: () => void;
}

const Form: FC<Props> = ({ onLogin }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState("");


    const handleSubmit = () => {
        if (isRegistered) {
            const newAccount: Account = { username, password };
            localStorage.setItem("account", JSON.stringify(newAccount));
            localStorage.setItem("isLoggedIn", "true");
            onLogin();
        } else {
            const stored = localStorage.getItem("account");
            if (stored) {
                const account: Account = JSON.parse(stored);
                if (account.username === username && account.password === password) {
                    localStorage.setItem("isLoggedIn", "true");
                    onLogin();
                }
            } else {
                setError("Please try again")
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <div className={styles.container1}>
                    <h1 className="gradientText">Get started Today</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit?</p>
                    <h3>It's easier than it seems</h3>
                </div>
                <div className={styles.container2}>
                    <h2>{isRegistered ? 'Register Account' : 'Login Account'}</h2>
                    <div className={styles.inputButtonContainer}>
                        <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <br />
                        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <Button onClick={handleSubmit} text={isRegistered ? 'Register' : 'Login'} />
                        <p style={{ color: 'red' }}>{error}</p>
                    </div>
                    <div className={styles.registerDiv}>
                        <button onClick={() => setIsRegistered(!isRegistered)}>{isRegistered ? "Login" : "Register Account"}</button>
                        <p>Forgot Password?</p>
                    </div>
                    <div className={styles.imageDiv}>
                        <img src={peopleLogo} alt="image of people"/>
                        <p>More than 1.600 users signed up the past 24 Hours</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;