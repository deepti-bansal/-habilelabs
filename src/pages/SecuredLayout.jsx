import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./../components/Header/Header";
/**
 * Layout that will be used after login.
 * @param props
 * @returns {*}
 * @constructor
 */
const SecuredLayout = props => {
  let history = useHistory();
  let session = useSelector(state => state.session);
  //if user not logged in then redirect to login page.
  useEffect(() => {
    if (!(session && session.data && session.data.sessiontoken)) {
      history.push("/login");
    }
  }, [session]);

  return (
    <div>
      <Header changeTheme={props.changeTheme} />
      <h1>hello</h1>
      {/* <AutoLogout/>

            <Sidebar/>
            <Footer/> */}
    </div>
  );
};

export default SecuredLayout;
