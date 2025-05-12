import { useState } from "react";
import type { FC } from "react";
import type { Account } from "../../types/types";

type Props = {
    onLogin: () => void;
}

const Form:FC<Props> = ({onLogin}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState("");
    

    const createAccount = () => {
        if (isRegistered) {
            const newAccount: Account = {username, password};
            localStorage.setItem("account", JSON.stringify(newAccount));
            localStorage.setItem("isLoggedIn", "true");
            onLogin();
        } else {
            const stored = localStorage.getItem("account");
            if (stored) {
                const account: Account = JSON.parse(stored);
                if(account.username === username && account.password === password) {
                    localStorage.setItem("isLoggedIn", "true");
                    onLogin();
                }
            }
        }
    }

    return (
        <div>

        </div>
    )
}

export default Form;