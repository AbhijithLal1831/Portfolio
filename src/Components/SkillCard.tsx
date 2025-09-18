import { Stack, Typography, Chip, Box, Avatar } from "@mui/material";

export default function SkillCard() {
  return (
    <Stack maxWidth={{ lg: "700px" }}>
      <Typography
        variant={"h4"}
        sx={{ marginLeft: "60px", marginRight: "60px" }}
      >
        Behind the Code
      </Typography>
      <Box sx={{ ml: { lg: "0px", xs: "60px" } }}>
        <Chip
          sx={{ m: 1 }}
          label="React.js"
          variant="filled"
          avatar={<Avatar src="src\assets\react.svg" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Spring Boot"
          variant="filled"
          avatar={<Avatar src="src\assets\springboot.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Google Cloud Platform"
          variant="filled"
          avatar={<Avatar src="src\assets\gcp.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Object-Oriented Programming"
          variant="filled"
          avatar={<Avatar src="src\assets\oops.jpeg" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Java"
          variant="filled"
          avatar={<Avatar src="src\assets\java.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Javascript"
          variant="filled"
          avatar={<Avatar src="src\assets\js.jpeg" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Project Planning"
          variant="filled"
          avatar={<Avatar src="src\assets\projectplanning.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Project Management"
          variant="filled"
          avatar={<Avatar src="src\assets\projectmangement.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Redux.js"
          variant="filled"
          avatar={<Avatar src="src\assets\redux.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Team Coordination"
          variant="filled"
          avatar={<Avatar src="src\assets\teamcoordination.jpeg" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="SQL"
          variant="filled"
          avatar={<Avatar src="src\assets\sql.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="MUI"
          variant="filled"
          avatar={<Avatar src="src\assets\mui.jpeg" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Git"
          variant="filled"
          avatar={<Avatar src="src\assets\git.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="GitHub"
          variant="filled"
          avatar={<Avatar src="src\assets\github.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="PostgreSQL"
          variant="filled"
          avatar={<Avatar src="src\assets\postgresql.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="REST APIs"
          variant="filled"
          avatar={<Avatar src="src\assets\restapi.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="GraphQL"
          variant="filled"
          avatar={<Avatar src="src\assets\graphql.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Docker"
          variant="filled"
          avatar={<Avatar src="src\assets\docker.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="IaaS"
          variant="filled"
          avatar={<Avatar src="src\assets\iaas.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Terraform"
          variant="filled"
          avatar={<Avatar src="src\assets\terraform.png" />}
        />
        <Chip
          sx={{ m: 1 }}
          label="Zustand"
          variant="filled"
          avatar={<Avatar src="src\assets\zustand.jpeg" />}
        />
      </Box>
    </Stack>
  );
}
