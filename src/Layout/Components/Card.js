import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../Redux/Actions/Action";
import imgAvatar from "../Assets/Img/img3.jpg";
import imgTwitter from "../Assets/Img/twitter.png";
import imgFB from "../Assets/Img/facebook.png";
import imgGoogle from "../Assets/Img/google-plus.png";
import imgLinkedin from "../Assets/Img/linkedin.png";

//import material UI
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardHeader,
  IconButton,
  Button
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";

const UserCard = () => {
  const classes = useStyles();
  const [spacing] = useState(3);
  const dispatch = useDispatch();
  const UserList = useSelector(state => state.Data.userList);
  console.log(UserList);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Grid container className={classes.root} spacing={11}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {UserList &&
            UserList.length > 0 &&
            UserList.map((e, i) => {
              return (
                <Card className={classes.card}>
                  <CardHeader
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  />
                  <CardContent style={{ marginTop: -20 }}>
                    {/* Avatar */}
                    <img className={classes.imgAvatar} src={imgAvatar} alt="" />

                    {/* name user */}
                    <Typography
                      className={classes.nameUsers}
                      variant="h6"
                      color="textSecondary"
                      component="h6"
                    >
                      <strong>{e.name}</strong>
                    </Typography>

                    {/* location user */}
                    <Typography
                      style={{
                        fontSize: 13,
                        textAlign: "center"
                      }}
                      variant="h6"
                      color="textSecondary"
                      component="h6"
                    >
                      <LocationOnTwoToneIcon
                        style={{ height: 15, marginBottom: -3 }}
                      />
                      {e.address.city}
                    </Typography>

                    {/* description */}
                    <div style={{ marginTop: 20 }}>
                      <Typography
                        style={{
                          fontSize: 13,
                          textAlign: "center"
                        }}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Typography>
                    </div>

                    {/* social media */}
                    <div style={{ marginLeft: 30, marginTop: 20 }}>
                      <IconButton style={{widht: 40}} size="small" color="primary">
                        <img
                          className={classes.imgSocial}
                          src={imgTwitter}
                          alt="twitter"
                        />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <img
                          className={classes.imgSocial}
                          src={imgFB}
                          alt="facebook"
                        />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <img
                          className={classes.imgSocial}
                          src={imgGoogle}
                          alt="google +"
                        />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <img
                          className={classes.imgSocial}
                          src={imgLinkedin}
                          alt="linkedin"
                        />
                      </IconButton>
                    </div>

                    {/* button view profil */}
                    <div style={{marginLeft: 80, marginTop: 20}}>
                      <Button style={{borderRadius: 50}} variant="contained" color="default" >
                        View Profil
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserCard;

//styling
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  card: {
    width: 300,
    borderRadius: 10,
    margin: 25
  },
  media: {
    height: 140
  },
  imgAvatar: {
    display: "block",
    margin: "-30px auto 5px auto",
    width: 100,
    height: 100,
    borderRadius: 50,
    border: "5px solid #eceff1"
  },
  nameUsers: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10
  },
  imgSocial: {
    marginLeft: 10,
    width: 30,
    height: 30,
    border: "3px solid #eceff1",
    borderRadius: 50
  }
});
