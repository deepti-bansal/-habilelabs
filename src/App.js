import React from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import themeObj from "./assets/jss/theme";
import useMultiTheme from "./customHooks/useMultiTheme";
import Toaster from "./components/Utilities/Toaster";
import SecuredLayout from "./pages/SecuredLayout";

function App() {
  const { theme, muiTheme, changeTheme } = useMultiTheme();
  function toggleTheme() {
    let toggledTheme = theme === themeObj.dark ? themeObj.light : themeObj.dark;
    //store selected theme type in session storage.
    sessionStorage["_theme"] = toggledTheme.type;
    changeTheme(toggledTheme);
  }
  return (
    <div>
      <MuiThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              render={props => (
                <SecuredLayout {...props} changeTheme={toggleTheme} />
              )}
            />
          </Switch>
        </BrowserRouter>
        <Toaster />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
