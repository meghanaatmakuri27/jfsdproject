import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import Layout from "../components/Layout";

const JobProfiles = () => {
  // Mock job post data
  const [jobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      company: "TechCorp",
      location: "Hyderabad, India",
      description:
        "Join us as a Software Engineer to develop cutting-edge solutions for modern software needs.",
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "DataMax",
      location: "Bangalore, India",
      description:
        "We're looking for a Data Scientist with strong analytical and machine learning skills.",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Web Innovators",
      location: "Pune, India",
      description:
        "A talented Frontend Developer is needed to design and implement beautiful web applications.",
    },
  ]);

  // Handle Apply button click
  const handleApply = (jobTitle) => {
    alert(`Applied for the ${jobTitle} position!`);
  };

  return (
    <Layout>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Job Listings
        </Typography>

        <Grid container spacing={3}>
          {jobs.map((job) => (
            <Grid item xs={12} md={6} lg={4} key={job.id}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6">{job.title}</Typography>
                  <Typography color="textSecondary">
                    {job.company} - {job.location}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {job.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleApply(job.title)}
                    fullWidth
                  >
                    Apply
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

export default JobProfiles;
