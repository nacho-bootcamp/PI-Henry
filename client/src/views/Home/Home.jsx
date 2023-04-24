import React from "react";
import ContainerCard from "../../components/ContainerCard/ContainerCard";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.background}>
      <ContainerCard />
    </div>
  );
};

export default Home;
