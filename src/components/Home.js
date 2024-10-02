import React from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import {
  Home as HomeIcon,
  Work as WorkIcon,
  Person as PersonIcon,
  Assessment as AssessmentIcon,
  Event as EventIcon,
  Description as DescriptionIcon,
  Help as HelpIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Define drawer width
const drawerWidth = 240;

// Define Home component
const Home = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Navigation items with respective paths
  const navItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Job Profiles", icon: <WorkIcon />, path: "/job-profiles" },
    { text: "My Profile", icon: <PersonIcon />, path: "/my-profile" },
    { text: "Interviews", icon: <AssessmentIcon />, path: "/interviews" },
    { text: "Assessments", icon: <AssessmentIcon />, path: "/assessments" },
    { text: "Events", icon: <EventIcon />, path: "/events" },
    { text: "Resume", icon: <DescriptionIcon />, path: "/resume" },
    { text: "Help", icon: <HelpIcon />, path: "/help" },
  ];

  // Dummy blog posts
  const blogs = [
    {
      title:
        "Empower Your Job Search: Sign Up Now for Resume Prep, Practice Tests, and More",
      time: "6 Mins Read",
    },
    {
      title:
        "Student’s Ultimate Guide to Balancing Academics and Placement Preparation",
      time: "7 Mins Read",
    },
    {
      title: "Ace Your Job Assessment: 10+ Tips To Help You Pass",
      time: "5 Mins Read",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#ffffff", color: "#000000" }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Welcome to PlacerX
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#6a0dad", // Set the purple color
            color: "#fff", // Make the text white for better contrast
          },
        }}
      >
        <Toolbar />
        <List sx={{ padding: 2 }}>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.text}
              sx={{
                marginY: 1, // Adds vertical space between items
                paddingX: 2, // Adds horizontal padding inside items
                borderRadius: 1, // Rounded corners for a modern look
                "&:hover": {
                  backgroundColor: "#5a009d", // Darker purple on hover
                },
              }}
              onClick={() => navigate(item.path)} // Navigate to the path on click
            >
              {item.icon}
              <ListItemText primary={item.text} sx={{ marginLeft: 2 }} />{" "}
              {/* Add space between icon and text */}
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {/* Main Content Area */}
        <Grid container spacing={3}>
          {/* Left Section */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                CourseVita - Hyderabad - 2025 Batch || Registration deadline -
                4.30 PM today i.e 23-09-2024
              </Typography>
              <Typography variant="body1" gutterBottom>
                Dear Academic Partner,
                <br />
                We are thrilled to share the launch of TCS CodeVita Season 12 -
                where the young coders from all corners of the world compete to
                prove their mettle.
                <br />
                TCS CodeVita is a 24-hour global online programming challenge
                designed to promote the notion of 'Programming as a Sport'. The
                ultimate platform encourages budding coders to participate
                through a series of real-life challenges across a stretch of 3
                rounds to bag the coveted ‘World’s Best Coder’ title.
              </Typography>
            </Paper>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Latest Blogs
              </Typography>
              <List>
                {blogs.map((blog, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={blog.title}
                      secondary={blog.time}
                      primaryTypographyProps={{ variant: "body1" }}
                      secondaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
