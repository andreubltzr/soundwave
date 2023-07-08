import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Hero = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#2F303A",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          px: "1.5rem",
        }}
      >
        <Typography variant="h1" fontSize={50}>
          Feel the music
        </Typography>
        <Typography>Stream over 20 thousand songs with one click</Typography>
        <Button
          variant="contained"
          sx={{
            alignSelf: "flex-start",
            fontSize: "0.8rem",
            textTransform: "none",
          }}
        >
          Join Now
        </Button>
      </Box>
    </>
  );
};
