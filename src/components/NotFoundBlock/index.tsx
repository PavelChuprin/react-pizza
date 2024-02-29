import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock: React.FC = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  redirectToHome();

  return (
    <>
      <div className={styles.root}>
        <h1>
          <span>🙈</span>
          <br />
          Страница не найдена
        </h1>
        <p className={styles.description}>
          К сожалению данная страница отсутсвует в нашем интернет-магазине
        </p>
      </div>
    </>
  );
};
