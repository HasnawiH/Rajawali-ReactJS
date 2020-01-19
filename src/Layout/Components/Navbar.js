import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import ImgUser from "../Assets/Img/avatar.png"

import { Typography, InputBase, Avatar } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Typography className={classes.title} variant="h6" noWrap></Typography>

      {/* component search */}
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search user.."
          value={search}
          onChange=""
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>

      <div style={{marginLeft: 50, marginRight: 20}}>
        <Avatar style={{ width : "40px", height: "40px" }} src={ImgUser} alt="" />
      </div>
    </Fragment>
  );
};

export default Navbar;

//styling
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  search: {
    display: "flex",
    position: "relative",
    borderRadius: 50,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    marginLeft: 10,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(10),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));
