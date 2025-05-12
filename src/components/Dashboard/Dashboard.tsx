import type { FC } from "react";
import Button from "../Button/Button";

type Props = {
  onLogout: () => void;
}

const Dashboard:FC<Props> = ({ onLogout }) => {
  const stored = localStorage.getItem('account');
  const username = stored ? JSON.parse(stored).username : 'okänd';

  return (
    <div>
      <h2>Välkommen, {username}!</h2>
      <Button onClick={() => {
        localStorage.setItem("isLoggedIn", "false");
        onLogout();
      }} text="Log Out"/>
      
    </div>
  );
};

export default Dashboard;
