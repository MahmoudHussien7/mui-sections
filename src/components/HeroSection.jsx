import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeroBackground = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "80vh",
  background: `url('https://images.unsplash.com/photo-1678282514430-1350ec121314?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    height: "50vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "40vh",
  },
}));

const HeroSection = () => {
  return (
    <HeroBackground>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            px: 2,
            py: 4,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Elevate Your Project with Our Stunning Templates
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Discover a range of high-quality templates that will take your
            project to the next level. Easy to use and customize, crafted with
            precision.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#007b", mx: 2 }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              sx={{ borderColor: "#fff", color: "#fff", mx: 1 }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </HeroBackground>
  );
};

export default HeroSection;
