import React from "react";
import clsx from "clsx";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";

import { CssBaseline, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";

const Home = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <CssBaseline />

      {/* componen Navbar */}
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick=""
            edge="start"
            className={clsx(classes.menuButton)}
          >
            <AppsIcon style={{ color: "#487eb0" }} />
          </IconButton>
          <Navbar />
        </Toolbar>
      </AppBar>

      {/* main */}
      <main className={clsx(classes.content)}>
        <div className={classes.drawerHeader} />
        <div style={{marginTop: 70}}>
          <Card />
        </div>
      </main>
    </Toolbar>
  );
};

export default Home;

//styling
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#eceff1"
  },
  appBarShift: {
    width: `calc(100%)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(3),
    marginLeft: 12
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));
