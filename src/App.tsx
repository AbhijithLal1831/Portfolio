import "./App.css";
import { Box, Container } from "@mui/material";
import ProfileCard from "./Components/ProfileCard";
import AboutCard from "./Components/About";

function App() {
  return (
    <>
      <div>
        <Container disableGutters maxWidth="xl">
          <Box sx={{ width: "100vw", height: "100vh" }}>
            {/* <NavBarBreadcrumbs /> */}
            <ProfileCard />
            <AboutCard />
          </Box>
        </Container>
      </div>
    </>
  );
}

export default App;
