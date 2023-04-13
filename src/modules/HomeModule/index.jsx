import React from "react";
import homeSvg from "../../images/home.svg";
import styles from "./home.module.scss";

const HomeModule = () => {
  return (
    <div className={styles.homePageWrapper}>
      <h1>Welcome to data visualization project!</h1>
      <div className={styles.paraWrapper}>
        <p className={styles.paragraph}>
          Data visualization React apps are essential tools for anyone working
          with complex data sets. Whether you're in finance, healthcare,
          marketing or any other industry where data analysis is crucial, these
          apps can help you unlock insights and make better decisions. So, if
          you're looking for a tool to help you better understand and analyze
          data, this data visualization React app may be just what you need!
        </p>
      </div>

      <div className={styles.navigateHeading}>
        <h4>Navigate to Dashboard route for chart view</h4>
      </div>
      <div className={styles.imageWrapper}>
        <img src={homeSvg} loading="lazy" alt="home image svg" />
      </div>
    </div>
  );
};

export default HomeModule;
