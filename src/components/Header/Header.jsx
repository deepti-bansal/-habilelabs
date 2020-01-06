import React from "react";
import { useSelector } from "react-redux";
import styles from "../../assets/jss/HeaderStyle";
import useStyles from "../../customHooks/useStyles";
import useSideBarOpen from "../../customHooks/useSideBarOpen";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTranslation } from "react-i18next";

const Header = props => {
  const { changeTheme } = props;
  const classes = useStyles(styles)();
  let isSideBarOpen = useSideBarOpen();
  const { t } = useTranslation("translation");

  return (
    <div
      className={`${classes.headerBar} ${
        isSideBarOpen ? "" : classes.shrinkHeaderBar
      }`}
    >
      <ThemeSwitcher changeTheme={changeTheme} />
    </div>
  );
};

export default Header;
