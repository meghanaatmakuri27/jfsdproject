import React from "react";
import {
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import Layout from "./Layout";

const mockAssessments = [
  {
    id: 1,
    title: "Java Full Stack Developer Assessment",
    description:
      "Test your skills on Java, Spring Boot, Hibernate, and RESTful services.",
    duration: "2 hours",
  },
  {
    id: 2,
    title: "ReactJS Frontend Developer Assessment",
    description:
      "Hands-on coding tests for building user interfaces with ReactJS.",
    duration: "1.5 hours",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    description: "Coding challenges focused on algorithms and data structures.",
    duration: "1 hour",
  },
];

const Assessments = () => {
  return (
    <Layout>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Available Assessments
        </Typography>

        <Grid container spacing={3}>
          {mockAssessments.map((assessment) => (
            <Grid item xs={12} md={6} lg={4} key={assessment.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{assessment.title}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Duration: {assessment.duration}
                  </Typography>
                  <Typography variant="body2">
                    {assessment.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary" fullWidth>
                    Start Assessment
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

export default Assessments;
