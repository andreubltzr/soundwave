import { Box, Container, Typography } from "@mui/material";
import microphone from "../assets/microphone.svg";
import albums from "../assets/albums.svg";
import more from "../assets/more.svg";
import covers from "../assets/covers.jpg";

export const Discover = () => {
  const discoverItemStyle = {
    bgcolor: "#202027",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    padding: 1.5,
  };
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          bgcolor: "#2F303A",
          height: "90vh",
          px: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: { sm: "center" },
        }}
      >
        <Typography variant="h3">Discover new music</Typography>
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Box sx={discoverItemStyle}>
            <Box
              component="img"
              src={microphone}
              sx={{ height: 30, width: 30, mb: 0.6 }}
            />
            <Typography>Charts</Typography>
          </Box>
          <Box sx={discoverItemStyle}>
            <Box
              component="img"
              src={albums}
              sx={{ height: 30, width: 30, mb: 0.6 }}
            />
            <Typography>Albums</Typography>
          </Box>
          <Box sx={discoverItemStyle}>
            <Box
              component="img"
              src={more}
              sx={{ height: 30, width: 30, mb: 0.6 }}
            />
            <Typography>More</Typography>
          </Box>
        </Box>
        <Typography>
          By joining you can benefir by listening to the latest albums released.
        </Typography>
        <Box
          component="img"
          src={covers}
          sx={{ height: 250, width: 250, mx: "auto" }}
        ></Box>
      </Container>
    </>
  );
};
