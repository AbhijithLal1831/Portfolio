import { useState } from "react";
import "./App.css";
import { Box, Container } from "@mui/material";
import NavBar from "./Components/navbar";
import NavBarBreadcrumbs from "./Components/navbar";

function App() {
  const [count, setCount] = useState(0);

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
