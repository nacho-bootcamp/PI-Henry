import React from "react";
import image from "../../assets/img/Lading.png";
import banner from "../../assets/img/chef.png";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Ignacio Cardozo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dolores
          asperiores excepturi eius. Necessitatibus itaque earum distinctio ad,
          ipsa voluptatem facilis suscipit. Magnam quibusdam consequuntur earum
          optio dolorum nulla ducimus?
        </p>
        <Link to="/home" className={styles.containerBoton}>
          <button className={styles.boton}>Siguiente</button>
        </Link>
      </div>
      <div className={styles.containerImg}>
        <img src={image} alt="" className={styles.image} />
        <img src={banner} alt="" className={styles.banner} />
      </div>
    </div>
  );
};

export default Landing;
