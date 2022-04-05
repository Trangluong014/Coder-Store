import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Logo from "../components/Logo";
import { Button, Link } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

function MainHeader() {
  const isLogin = useAuth();
  const location = useLocation();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            CoderStore
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="body2"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {isLogin.isAuthenticated === false
              ? ""
              : `${isLogin.user.username}`}
          </Typography>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => {
              return isLogin.isAuthenticated === false
                ? null
                : isLogin.logout();
            }}
          >
            {isLogin.isAuthenticated === false ? (
              <Link to={`/login`} state={{ backgroundLocation: location }}>
                <LoginIcon />{" "}
              </Link>
            ) : (
              <LogoutIcon />
            )}
          </IconButton>
          <Typography
            variant="body2"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {isLogin.isAuthenticated === false ? "Sign In" : `Sign Out`}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
