import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import Logo from "../components/Logo";

import { Link } from "@mui/material";
import useAuth from "../hooks/useAuth";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

function MainHeader() {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Logo />
            </IconButton>
          </Box>

          <Box display="inline-flex" alignItems="center">
            <Typography
              variant="body2"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {isAuthenticated ? `${user?.username}` : ""}
            </Typography>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => {
                return isAuthenticated ? logout() : null;
              }}
            >
              {isAuthenticated ? (
                <LogoutIcon />
              ) : (
                <Link to={`/login`}>
                  <LoginIcon />{" "}
                </Link>
              )}
            </IconButton>
            <Typography
              variant="body2"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {isAuthenticated ? "Sign Out" : `Sign In`}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
