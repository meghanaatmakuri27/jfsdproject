// components/MyProfile.js
import React from "react";
import {
  Typography,
  Box,
  Avatar,
  Paper,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import Layout from "./Layout";

const MyProfile = () => {
  return (
    <Layout>
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* Profile Picture */}
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Avatar
              alt="Profile Picture"
              src="https://via.placeholder.com/150"
              sx={{ width: 150, height: 150, margin: "0 auto" }}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Meghana Atmakuri
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              B.Tech 3rd Year, Computer Science
            </Typography>
          </Grid>

          {/* Profile Information */}
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" gutterBottom>
              I am a 3rd-year Computer Science student at K L University,
              passionate about software development, AI, and cloud computing. I
              have completed projects in full-stack development and participated
              in multiple hackathons, including winning the JP Morgan Hackathon.
              Currently, I am working on Skill Development Project-3, focusing
              on Java Full Stack Development.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Email" secondary="meghana@example.com" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone" secondary="+91 9876543210" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Location"
                  secondary="Vijayawada, Andhra Pradesh, India"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Skills Section */}
        <Typography variant="h6" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4}>
            <Button variant="contained" color="primary" fullWidth>
              Java
            </Button>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Button variant="contained" color="primary" fullWidth>
              Spring Boot
            </Button>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Button variant="contained" color="primary" fullWidth>
              ReactJS
            </Button>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Button variant="contained" color="primary" fullWidth>
              AWS
            </Button>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Button variant="contained" color="primary" fullWidth>
              Python
            </Button>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Button variant="contained" color="primary" fullWidth>
              Hibernate
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Certifications Section */}
        <Typography variant="h6" gutterBottom>
          Certifications
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Oracle Certified Java SE 11 Developer"
              secondary="July 2024"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="AWS Certified Cloud Practitioner"
              secondary="September 2024"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Red Hat Certified Enterprise Application Developer"
              secondary="October 2024"
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
    </Layout>
  );
};

export default MyProfile;
