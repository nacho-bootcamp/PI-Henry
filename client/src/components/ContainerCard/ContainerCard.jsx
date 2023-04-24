import React from "react";
import Card from "../Card/Card";
import styles from "./ContainerCard.module.css";
import { useSelector } from "react-redux";

const ContainerCard = () => {
  const food = useSelector((state) => state.recipes);
  return (
    <div className={styles.container}>
      {food.map((recipe) => {
        return <Card id={recipe.id} name={recipe.title} image={recipe.image} />;
      })}
    </div>
  );
};

export default ContainerCard;
