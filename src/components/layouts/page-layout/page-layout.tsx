import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "@/components/atoms";
import {
  AppBar,
  Avatar,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Logo } from "@/assets/images";

interface PageLayoutProps {
  children?: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { isLoading, isAuthenticated, user, logout } = useAuth0();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  if (isLoading) {
    return (
      <Grid
        container
        xs={12}
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Spinner />
      </Grid>
    );
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };
  return (
    <Grid container xs={12}>
      <AppBar position="static">
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          px={3}
          py={1}
        >
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid item xs={7} textAlign="center">
            <Typography variant="h4" fontWeight="bold">
              App Title
            </Typography>
          </Grid>
          {isAuthenticated && (
            <Grid
              container
              item
              xs={3}
              alignItems="center"
              justifyContent="flex-end"
            >
              <Grid item>
                <Tooltip title="Open User settings">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt={user?.name} src={user?.picture} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={() => setAnchorElUser(null)}
                >
                  <MenuItem onClick={handleLogout}>
                    <Typography variant="body2" textAlign="center">
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Grid>
              <Grid item>
                <Typography variant="body1" fontWeight="bold">
                  {user?.nickname}
                </Typography>
                <Typography variant="body2">{user?.email}</Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </AppBar>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          height: "calc(100vh - 64px)",
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};
