import React from "react";
import { useTheme } from "@material-ui/core/styles";
import styles from "../../assets/jss/HeaderStyle";
import lightTheme from "../../assets/images/theme-switch-light.svg";
import darkTheme from "../../assets/images/theme-switch-dark.svg";
import Button from "@material-ui/core/Button";
import useStyles from "../../customHooks/useStyles";

/**
 * Theme switcher component.
 * @param props
 * @returns {*}
 * @constructor
 */
const ThemeSwitcher = props => {
  const { changeTheme } = props;
  const theme = useTheme();
  const classes = useStyles(styles)();
  return (
    <div>
      <Button onClick={changeTheme} className={classes.removePaddingTB}>
        {theme.logo === 1 ? (
          <img height="30" src={darkTheme} alt="logo" />
        ) : (
          <img height="30" src={lightTheme} alt="logo" />
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
