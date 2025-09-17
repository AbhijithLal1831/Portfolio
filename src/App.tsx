import "./App.css";
import { Box, Container } from "@mui/material";
import NavBarBreadcrumbs from "./Components/navbar";

function App() {
  return (
    <>
      <div>
        <Container disableGutters maxWidth="xl">
          <Box sx={{ width: "100vw", height: "100vh" }}>
            <NavBarBreadcrumbs />
          </Box>
        </Container>
      </div>
    </>
  );
}

export default App;
