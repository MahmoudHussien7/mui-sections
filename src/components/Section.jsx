// src/components/FullWidthSection.jsx

import React from "react";
import { Container, Grid, Typography, Paper, Button, Box } from "@mui/material";

const templates = [
  {
    title: "ProDJ - Creative DJ / Producer Site Template",
    category: "Graphic Templates",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVybyUyMGltYWdlfGVufDB8fDB8fHww",
    author: "vinyljunkie",
    type: "Graphic Templates",
  },
  {
    title: "Wiggo - Multi-Concept HTML Template",
    category: "Web Templates",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1682124799433-2dd0967abd03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlcm8lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    author: "shtheme",
    type: "Web Templates",
  },
  {
    title: "RE - Multi-purpose Responsive Muse Template",
    category: "CMS Templates",
    imageUrl:
      "data:image/jpeg;base64,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",
    author: "Romtheme",
    type: "CMS Templates",
  },
  {
    title: "EVERY - Creative Onepage PSD Template",
    category: "Graphic Templates",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg",
    author: "Fami_Themes",
    type: "Graphic Templates",
  },
  {
    title: "Digital Agency - SEO / Marketing HTML Template",
    category: "Web Templates",
    imageUrl:
      "https://img.freepik.com/premium-photo/texture-beautiful-clouds-sky-during-sunset-generative-ai_666746-4311.jpg",
    author: "suniljoshi",
    type: "Web Templates",
  },
  {
    title: "Materialart Powerful Material Admin Template",
    category: "Admin Templates",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18acd369-ea44-471b-aeeb-9e6e8e3ed9d5/dfnxak0-a0a19958-0048-4def-b585-a3c605c9ee85.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE4YWNkMzY5LWVhNDQtNDcxYi1hZWViLTllNmU4ZTNlZDlkNVwvZGZueGFrMC1hMGExOTk1OC0wMDQ4LTRkZWYtYjU4NS1hM2M2MDVjOWVlODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nPi0fe6A8EDILpB7k3RPUfWaNIxqQJi_NdkinPfQ1eM",
    author: "MARUTI",
    type: "Admin Templates",
  },
];

const FullWidthSection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        py: 6,
        backgroundColor: "#f0f0f0",
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Discover Our Templates
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Explore a wide range of templates with{" "}
          <a href="#" style={{ color: "#007bf" }}>
            exceptional quality
          </a>
          ,{" "}
          <a href="#" style={{ color: "#007b" }}>
            beautiful designs
          </a>
          , and{" "}
          <a href="#" style={{ color: "#007b" }}>
            amazing features
          </a>
          . All templates are crafted to meet your needs.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "#007b", mt: 2 }}>
          View All Templates
        </Button>
      </Box>
      <Grid container spacing={4}>
        {templates.map((template, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 3,
                backgroundColor: "#ffffff",
                borderRadius: 2,
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Box sx={{ mb: 2, position: "relative" }}>
                <img
                  src={template.imageUrl}
                  alt={template.title}
                  style={{ width: "100%", borderRadius: 8 }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    backgroundColor: "#333",
                    color: "#fff",
                    padding: "4px 12px",
                    borderRadius: 4,
                    fontSize: "0.85rem",
                  }}
                >
                  {template.type}
                </Box>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ mt: 2 }}
                  gutterBottom
                >
                  {template.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                  gutterBottom
                >
                  By {template.author} in {template.category}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#007b",
                  color: "#007bff",
                  mt: 2,
                  "&:hover": {
                    backgroundColor: "#007b",
                    color: "#fff",
                  },
                }}
                fullWidth
              >
                View Details
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FullWidthSection;
