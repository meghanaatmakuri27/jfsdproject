// components/Layout.js
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

const drawerWidth = 240;

const Layout = ({ children }) => {
  const navigate = useNavigate();
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

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar for Header */}
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

      {/* Sidebar (Drawer) */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#6a0dad", // Purple color
            color: "#fff",
          },
        }}
      >
        <Toolbar />
        <List sx={{ padding: 2 }}>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)} // Navigation on click
              sx={{
                marginY: 1,
                paddingX: 2,
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: "#5a009d", // Darker purple on hover
                },
              }}
            >
              {item.icon}
              <ListItemText primary={item.text} sx={{ marginLeft: 2 }} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* To give space for the AppBar */}
        {children} {/* This renders the page-specific content */}
      </Box>
    </Box>
  );
};

export default Layout;
