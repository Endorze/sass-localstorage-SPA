import type { FC } from "react";

type Props = {
  onLogout: () => void;
}

const Dashboard:FC<Props> = ({ onLogout }) => {
  const stored = localStorage.getItem('account');
  const username = stored ? JSON.parse(stored).username : 'okänd';

  return (
    <div>
      <h2>Välkommen, {username}!</h2>
      <button onClick={() => {
        localStorage.setItem('isLoggedIn', 'false');
        onLogout();
      }}>
        Logga ut
      </button>
    </div>
  );
};

export default Dashboard;
