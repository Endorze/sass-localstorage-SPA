import type { FC } from "react";
import Button from "../Button/Button";
import styles from "./Dashboard.module.scss";
import ImageCarousel from "../Carousel/Carousel";

type Props = {
  onLogout: () => void;
}

const Dashboard:FC<Props> = ({ onLogout }) => {
  const stored = localStorage.getItem('account');
  const username = stored ? JSON.parse(stored).username : 'unknown';

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardHeader}>
        <h2>Welcome, {username}!</h2>
        <Button onClick={() => {
          localStorage.setItem("isLoggedIn", "false");
          onLogout();
        }} text="Log Out"/>
      </div>
      <div>
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Dashboard;
