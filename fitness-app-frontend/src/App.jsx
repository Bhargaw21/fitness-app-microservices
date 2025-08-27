import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { useDispatch } from "react-redux";
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ActivityDetail from "./components/ActivityDetail";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import { setCredentials } from "./store/authSlice";

const ActivitiesPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <ActivityForm onActivitiesAdded={() => window.location.reload()} />
      <ActivityList />
    </Container>
  );
};

function App() {
  const { token, tokenData, logIn, logOut } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(setCredentials({ token, user: tokenData }));
      setAuthReady(true);
    }
  }, [token, tokenData, dispatch]);

  return (
    <Router>
      {!token ? (
        // 🌟 Login Page (Centered Hero Style)
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: "linear-gradient(135deg, #42a5f5 0%, #478ed1 100%)",
            color: "white",
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Fitness Tracker App
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Track your workouts and stay motivated 💪
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => logIn()}
            sx={{
              borderRadius: "12px",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1.1rem",
              background: "linear-gradient(135deg, #1e88e5 0%, #42a5f5 100%)",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
              "&:hover": { background: "linear-gradient(135deg, #1565c0 0%, #1e88e5 100%)" },
            }}
          >
            🚀 LOGIN
          </Button>
        </Box>
      ) : (
        <>
          {/* 🌟 AppBar Navigation */}
          <AppBar
            position="sticky"
            sx={{
              background: "linear-gradient(135deg, #1e88e5 0%, #42a5f5 100%)",
              mb: 4,
            }}
          >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Fitness Tracker
              </Typography>
              <Box display="flex" gap={2}>
                <Button
                  component={Link}
                  to="/activities"
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  Activities
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={logOut}
                  sx={{
                    borderRadius: "8px",
                    fontWeight: 600,
                    borderColor: "white",
                    "&:hover": { background: "rgba(255,255,255,0.1)" },
                  }}
                >
                  Logout
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          {/* 🌟 Main Content */}
          <Box sx={{ p: 2, minHeight: "90vh", backgroundColor: "#f5f7fa" }}>
            <Routes>
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/activities/:id" element={<ActivityDetail />} />
              <Route
                path="/"
                element={<Navigate to="/activities" replace />}
              />
            </Routes>
          </Box>
        </>
      )}
    </Router>
  );
}

export default App;
