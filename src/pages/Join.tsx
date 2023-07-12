import {
  Box,
  Button,
  Container,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

export const Join = () => {
  const formLabelStype = {
    color: "white",
  };
  const formInputStype = {
    border: "1px solid #2E3852",
    borderRadius: 1.5,
    mt: 1,
    color: "white",
    px: 1,
  };
  return (
    <>
      <Container
        sx={{
          bgcolor: "#2F303A",
          height: "90vh",
          px: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Join the <br />
          <Typography
            component="span"
            variant="h3"
            sx={{ color: "#D3017A" }}
            fontWeight="bold"
          >
            fun.
          </Typography>
        </Typography>
        <Box
          component="form"
          sx={{
            bgcolor: "#202027",
            px: 5,
            py: 3,
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          <FormGroup>
            <InputLabel sx={formLabelStype}>Name:</InputLabel>
            <Input disableUnderline sx={formInputStype}></Input>
          </FormGroup>
          <FormGroup>
            <InputLabel sx={formLabelStype}>Email:</InputLabel>
            <Input type="email" disableUnderline sx={formInputStype}></Input>
          </FormGroup>
          <FormGroup>
            <InputLabel sx={formLabelStype}>Password:</InputLabel>
            <Input type="password" disableUnderline sx={formInputStype}></Input>
          </FormGroup>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
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
