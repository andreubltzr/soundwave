import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import landingPageImg from "../assets/landing-page-girl.png";

export const Hero = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          bgcolor: "#2F303A",
          height: "90vh",
          display: "flex",
          justifyContent: { md: "center" },
          px: { xs: "1.5rem" },
        }}
      >
        <Box className="circle circle-red"></Box>
        <Box className="circle circle-blue"></Box>
        <Box className="circle circle-green"></Box>
        <Box
          component="img"
          src={landingPageImg}
          sx={{
            display: { xs: "none", sm: "block" },
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center" },
            gap: "1rem",
            zIndex: 1,
          }}
        >
          <Typography variant="h1" fontSize={50}>
            Feel the music
          </Typography>
          <Typography>Stream over 20 thousand songs with one click</Typography>
          <Button
            variant="contained"
            sx={{
              width: 100,
              fontSize: "0.8rem",
              textTransform: "none",
            }}
          >
            Join Now
          </Button>
        </Box>
      </Container>
    </>
  );
};
