import { useState } from "react";
import type { FC } from "react";
import type { Account } from "../../types/types";

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
        <div>
            <h2>{isRegistered ? 'Registrera konto' : 'Logga in'}</h2>
            <input
                type="text"
                placeholder="Användarnamn"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="Lösenord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button onClick={handleSubmit}>
                {isRegistered ? 'Registrera' : 'Logga in'}
            </button>
            <p style={{ color: 'red' }}>{error}</p>
            <p>
                {isRegistered ? 'Har du redan ett konto?' : 'Inget konto?'}{' '}
                <button onClick={() => setIsRegistered(!isRegistered)}>
                    {isRegistered ? 'Logga in här' : 'Registrera dig'}
                </button>
            </p>
        </div>
    )
}

export default Form;