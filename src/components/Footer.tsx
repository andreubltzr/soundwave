import { Box, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          bgcolor: "#202027",
          px: { xs: "1.5rem", lg: "15rem" },
          display: "flex",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography>About Us</Typography>
          <Typography>Contact</Typography>
        </Box>
        <Grid container sx={{ textAlign: "center", width: 200 }}>
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
