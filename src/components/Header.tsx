import {
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import logo from "../assets/logo.png";
import { Box } from "@mui/system";

const navItems = ["Discover", "Join"];

export const Header = () => {
  const drawer = (
    <List sx={{ display: "flex", gap: 1 }}>
      {navItems.map((item) => (
        <ListItem key={item} sx={{ p: 1 }}>
          <ListItemButton sx={{ p: 0 }}>{item}</ListItemButton>
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
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box component="img" src={logo} sx={{ height: 35, width: 35 }}></Box>
          <Typography variant="h6" sx={{}}>
            Soundwave
          </Typography>
        </Box>
        <Box component="nav">{drawer}</Box>
      </Toolbar>
    </>
  );
};
