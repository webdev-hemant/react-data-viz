import { useState } from "react";
import { Outlet } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import OutsideClickHandler from "../OutsideClickHandler";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(true);
  // const location = useLocation();

  return (
    <>
      <nav className={styles.navWrapper}>
        <div className={`${styles.mobileNav} `}>
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
              {/* {sidebarState
                .filter((item) => item.path !== "*")
                .map((item, index) => (
                  <li key={index} className={styles.titleName}>
                    <CollapsableComponent routeDetail={item} />
                  </li>
                ))} */}
            </ul>
          </div>
        </OutsideClickHandler>
      </nav>
      <main>
        {/* {location.pathname !== "/" ? <Breadcrumbs /> : null} */}
        <Outlet />
      </main>
    </>
  );
};

export default Sidebar;
