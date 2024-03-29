import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { openInNewTab } from "utils/onClickUrl";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const pages = ["ABOUT", "EXPERIENCE", "EDUCATION"];

const Appbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);

    if (typeof page !== "string") return;
    const target = page.toLowerCase();
    if (target === "ABOUT") return navigate("/");
    return navigate(`/${target}`);
  };

  return (
    <CustomAppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={process.env.REACT_APP_BASE_URL}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
            className="appbar-icon"
          >
            ☀️H²
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem
                aria-label="LinkedIn"
                onClick={() =>
                  openInNewTab("https://www.linkedin.com/in/haileyharrykim")
                }
                className="appbar-iconbutton"
              >
                LINKEDIN
                {/* <LinkedInIcon fontSize="larmediumge" /> */}
              </MenuItem>
              <MenuItem
                aria-label="Github"
                onClick={() => openInNewTab("https://github.com/haileykr")}
                className="appbar-iconbutton"
              >
                GITHUB
                {/* <GitHubIcon fontSize="medium" /> */}
              </MenuItem>
            </Menu>
          </Box>

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={process.env.REACT_APP_BASE_URL}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              height: "68.5px",
              alignItems: 'center'
            }}
            className="appbar-icon"
          >
            ☀️H²
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
            <Button
              aria-label="LinkedIn"
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/haileyharrykim")
              }
              sx={{ color: "white", display: "block" }}
              className="appbar-iconbutton"
            >
              <LinkedInIcon fontSize="medium" />
            </Button>
            <Button
              aria-label="Github"
              onClick={() => openInNewTab("https://github.com/haileykr")}
              sx={{ color: "white", display: "block" }}
              className="appbar-iconbutton"
            >
              <GitHubIcon fontSize="medium" />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
};
export default Appbar;

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100vw",
  height: "68.5px",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  color: theme.palette.text.secondary,
  "& button": {
    color: theme.palette.text.secondary,
  },

  "& .appbar-icon": {
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },

  "& .appbar-iconbutton": {
    display: "flex",
    alignItems: "center",
  },
}));
