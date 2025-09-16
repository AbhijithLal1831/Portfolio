import { useState } from "react";
import "./App.css";
import { Box, Container } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Container disableGutters maxWidth="xl">
          <Box
            sx={{ bgcolor: "#747bff", width: "100vw", height: "100vh" }}
          ></Box>
        </Container>
      </div>
    </>
  );
}

export default App;
