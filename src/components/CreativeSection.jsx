import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";

const features = [
  {
    title: "Innovative Design",
    description:
      "Crafted with the latest design trends to make your project stand out.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp79yEkp52xCcPHrgCkkscYvq-Unnix6weHrFuGTe67WJWBbjv8kd7jd66eA&s",
  },
  {
    title: "High Performance",
    description:
      "Optimized for speed and efficiency to deliver a seamless experience.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmFTW0J54NGUAwRbKB_5htB0MjKU3Rucy2T93SckCSN1POmPsmqr2m2vXXw&s",
  },
  {
    title: "User-Friendly",
    description:
      "Intuitive interfaces and user experiences designed for ease of use.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHV83HBLkyKBhQSiU4olXn8We0W6WIJ1FHdcckgBn7Mgtu-fHXh-vbo2YFA&s",
  },
  {
    title: "Responsive Layout",
    description:
      "Fully responsive design to ensure a perfect fit on any device.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLaHhiNOoXzATHObEempkUqhj_s5JX4iWnuA&s",
  },
  {
    title: "Customizable",
    description:
      "Easily customizable to fit your specific needs and preferences.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EepMEEBFFFhIPDnhkXnfr4q3wC880VZ1H3SCAcqHp8MCmURzriXh8EBvFA&s",
  },
  {
    title: "Secure and Reliable",
    description:
      "Built with security in mind to protect your data and maintain reliability.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDn_q5LGpVIEfPqHkb2dP7jJ1RIWl2igOS0HzPPF11iPXrWZ8OCF9W2k5CVQ&s",
  },
];

const CreativeSection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        py: 6,
        backgroundColor: "#ffffff",
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: 6,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Explore Our Features
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Discover the exceptional features that make our templates unique and
          powerful. Each feature is designed to enhance your experience and meet
          your needs.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={feature.imageUrl}
                alt={feature.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button variant="contained" sx={{ backgroundColor: "#007b" }}>
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default CreativeSection;
