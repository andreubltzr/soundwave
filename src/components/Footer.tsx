import { Box, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <>
      <Container
        sx={{
          bgcolor: "#202027",
          px: "1.5rem",
          display: "flex",
          justifyContent: "space-around",
          gap: 5,
        }}
      >
        <Box sx={{ display: "flex", gap: 2, textAlign: "center" }}>
          <Typography>About Us</Typography>
          <Typography>Contact</Typography>
        </Box>
        <Grid container sx={{ textAlign: "center" }}>
          <Grid item xs={6}>
            <TwitterIcon sx={{ width: 20 }}></TwitterIcon>
          </Grid>
          <Grid item xs={6}>
            <FacebookIcon sx={{ width: 20 }}></FacebookIcon>
          </Grid>
          <Grid item xs={6}>
            Twitter
          </Grid>
          <Grid item xs={6}>
            Facebook
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
