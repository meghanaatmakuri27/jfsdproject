import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import Layout from "./Layout";

const Events = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Tech Conference 2024",
      date: "October 10, 2024",
      location: "Hyderabad, India",
      description:
        "Join us for the annual Tech Conference 2024, featuring speakers from around the world discussing the latest trends in technology.",
      image: "https://via.placeholder.com/400x200", // Placeholder image URL
    },
    {
      id: 2,
      title: "AI & ML Workshop",
      date: "November 5, 2024",
      location: "Bangalore, India",
      description:
        "A hands-on workshop focused on Artificial Intelligence and Machine Learning, with real-world applications and case studies.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 3,
      title: "Startup Expo 2024",
      date: "December 12, 2024",
      location: "Mumbai, India",
      description:
        "An exciting event showcasing innovative startups from various industries, offering networking opportunities and panel discussions.",
      image: "https://via.placeholder.com/400x200",
    },
  ]);

  return (
    <Layout>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Upcoming Events
        </Typography>

        <Grid container spacing={3}>
          {events.map((event) => (
            <Grid item xs={12} md={6} lg={4} key={event.id}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={event.image}
                  alt={event.title}
                />
                <CardContent>
                  <Typography variant="h6">{event.title}</Typography>
                  <Typography color="textSecondary">
                    {event.date} - {event.location}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {event.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => alert(`Registered for ${event.title}`)}
                  >
                    Register
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Events;
