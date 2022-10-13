import React from "react";
import spinner from "../../assets/img/loading.gif";
import style from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={style.spinner}>
      <img src={spinner} alt="spinner" />
    </div>
  );
};
