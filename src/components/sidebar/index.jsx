import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import OutsideClickHandler from "../OutsideClickHandler";
import { Routes } from "../../constants/Routes";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const [activePath, setactivePath] = useState(location.pathname);
  console.log(activePath);
  useEffect(() => {
    setactivePath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav className={styles.navWrapper}>
        <div className={`${styles.navContainer} `}>
          <div className={styles.imgWrapper}></div>
          {showNav ? (
            <GiHamburgerMenu
              onClick={() => {
                setShowNav(false);
              }}
              style={{ width: "40px", height: "40px" }}
              className={styles.hamBurger}
            />
          ) : null}
          <ul className={styles.routesWrapper}>
            {Routes.map((item) => {
              console.log(activePath === item.path);
              return (
                <li
                  onClick={() => navigate(item.path)}
                  key={item}
                  className={`${
                    activePath === item.path ? styles.activeRoute : ""
                  }`}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <OutsideClickHandler onOutsideClick={() => setShowNav(true)}>
          <div
            className={`${styles.hiddenNavbarContainer} ${
              showNav && styles.width_0
            }`}
          >
            <ul className={styles.navListContainer}>
              <RxCross2
                onClick={() => {
                  setShowNav(true);
                }}
                style={{ width: "40px", height: "40px", stroke: "white" }}
                className={styles.crossIcon}
              />
              {Routes.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => navigate(item.path)}
                    className={styles.titleWrapper}
                  >
                    <h4
                      className={`${styles.title} ${
                        activePath === item.path ? styles.acitveRoute : ""
                      }`}
                    >
                      {item.name}
                    </h4>
                    {/* <CollapsableComponent routeDetail={item} />/ */}
                  </li>
                );
              })}
            </ul>
          </div>
        </OutsideClickHandler>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Sidebar;
