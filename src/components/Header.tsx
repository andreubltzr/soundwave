import { AppBar, Toolbar, Typography, List, ListItem } from "@mui/material";
import logo from "../assets/logo.png";
import { Box } from "@mui/system";

const navItems = ["Discover", "Join"];

export const Header = () => {
  const drawer = (
    <List sx={{ display: "flex" }}>
      {navItems.map((item) => (
        <ListItem key={item} sx={{ p: 1 }}>
          {item}
        </ListItem>
      ))}
    </List>
  );
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "#2F303A",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            {/* <img src={logo} width={35} height={35}></img> */}
            <Box
              component="img"
              src={logo}
              sx={{ height: 35, width: 35 }}
            ></Box>
            <Typography variant="h6" sx={{}}>
              Soundwave
            </Typography>
          </Box>
          <Box component="nav">{drawer}</Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
