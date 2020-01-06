const headerStyle = theme => ({
  impersonateUserIcon: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    },
    "& svg": {
      fill: "#fff",
      fontSize: 28,
      minWidth: 64
    }
  },
  headerBar: {
    width: "calc(100%)",
    // width: "calc(100% - 250px)",
    float: "right",
    background: "#355B7C",
    zIndex: "1101",
    display: "flex",
    justifyContent: "flex-end",
    boxSizing: "border-box",
    paddingRight: 15,
    "& div": {
      "& button": {
        borderRadius: 0,
        minHeight: 60,
        color: "#fff"
      }
    }
  },
  shrinkHeaderBar: {
    // width: "calc(100% - 250px)"
    width: "calc(100%)"
  }
});

export default headerStyle;
