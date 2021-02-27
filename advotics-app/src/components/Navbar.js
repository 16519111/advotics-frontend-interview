import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Avatar } from '@material-ui/core';
import AdvoticsLogo from '../images/advotics-logo.jpg';
import PoweredLogo from '../images/powered-by-advotics-logo.JPG';
import { FiLogOut } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "auto"
  },
  grow: {
    flexGrow: 4,
  },
  navbarColor: {
    backgroundColor: "white",
    boxShadow: "0px white",
  },
  navbarFlex: {
    boxShadow: "0px white",
    marginRight: "2%"
  },
  navbarTitle: {
    marginLeft: theme.spacing(3),
    '&:hover': {
        cursor: "pointer"
     },
  },
  logoContainer: {
    marginLeft: theme.spacing(3),
  },
  poweredLogoContainer: {
    marginLeft: theme.spacing(1),
    marginTop: "auto"
  },
  link: {
    textDecoration: "none"
  },
  advoticsLogo: {
    width: "180px",
    height: "auto",
    marginTop: "2%"
  },
  poweredLogo: {
    width: "140px",
    marginTop: "2%"
  },
  usernameText: {
    marginTop: "7%",
    lineHeight: 0.8
  },
  companyText: {
    lineHeight: 0.5
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navbarColor} elevation={1}>
        <Toolbar className={classes.navbarFlex}>
          <div className={classes.logoContainer}>
            <img src={AdvoticsLogo} alt="img-error" className={classes.advoticsLogo}/>
          </div>
          <div className={classes.poweredLogoContainer}>
            <img src={PoweredLogo} alt="img-error" className={classes.poweredLogo}/>
          </div>
          <div className={classes.grow}/>
          <div className={classes.navbarTitle}>
              <Typography color="textSecondary" align="center" className={classes.usernameText} variant="subtitle1">Username</Typography>
              <Typography color="textSecondary" align="center" variant="caption" className={classes.companyText}>Company Name</Typography>   
          </div>
          <Avatar className={classes.navbarTitle}/>
          <FiLogOut style={{color: "black"}} className={classes.navbarTitle}/>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Navbar;
