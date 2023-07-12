import {
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import logo from "../assets/logo.png";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const navItems = ["Discover", "Join"];

export const Header = () => {
  const navLinks = (
    <List sx={{ display: "flex" }}>
      {navItems.map((item) => (
        <ListItem key={item} sx={{ p: 0.5 }}>
          <ListItemButton
            disableRipple
            sx={{
              p: 0.5,
              borderRadius: 1,
              ":hover": { bgcolor: "#202027" },
            }}
          >
            <Link
              to={`/${item}`}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              {item}
            </Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#2F303A",
          height: "10vh",
          px: "1.5rem",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "white", cursor: "pointer" }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box
              component="img"
              src={logo}
              sx={{ height: 35, width: 35 }}
            ></Box>
            <Typography variant="h6">Soundwave</Typography>
          </Box>
        </Link>
        <Box component="nav">{navLinks}</Box>
      </Toolbar>
    </>
  );
};
