import {useState} from "react";
import themeObj from "../assets/jss/theme";
import {createMuiTheme} from "@material-ui/core";

/**
 * Custom hook to set multi theme.
 * @returns {{theme: any, muiTheme: Theme, changeTheme: React.Dispatch<React.SetStateAction<any>> | React.Dispatch<React.SetStateAction<undefined>>}}
 */
export default function useMultiTheme(){
    const [theme, changeTheme] = useState(themeObj[sessionStorage['_theme']] || themeObj.dark);
    const muiTheme = createMuiTheme(theme);
    return {
        theme,
        muiTheme,
        changeTheme
    };
}