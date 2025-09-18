import { Stack, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SkillCard from "./SkillCard";
export default function AboutCard() {
  return (
    <Stack
      direction={{ lg: "row", xs: "column" }}
      sx={{ justifyContent: "space-evenly" }}
    >
      <Stack>
        <Typography
          variant="h4"
          sx={{ marginLeft: "60px", marginRight: "60px" }}
        >
          About Me
        </Typography>

        <List sx={{ marginLeft: "60px", marginRight: "30px" }}>
          <ListItem>
            <Typography variant="body1">
              👨‍💻 Software Engineer with{" "}
              <Typography fontWeight="600" variant="button">
                2.5+ years
              </Typography>{" "}
              of experience in designing and developing scalable applications.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              ☁️ Proficient in{" "}
              <Typography fontWeight="600" variant="button">
                Google Cloud Platform (GCP)
              </Typography>{" "}
              with hands-on experience in cloud integration and optimization.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              ⚡ Skilled in{" "}
              <Typography fontWeight="600" variant="button">
                full-stack development, cloud integration, and performance
                optimization.
              </Typography>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              🚀 Passionate about building{" "}
              <Typography fontWeight="600" variant="button">
                clean, maintainable, and impactful{" "}
              </Typography>
              solutions.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              🌐 Strong foundation in{" "}
              <Typography fontWeight="600" variant="button">
                modern web technologies and backend systems.
              </Typography>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              📚 Constant learner, always exploring{" "}
              <Typography fontWeight="600" variant="button">
                new tools, frameworks, and best practices.
              </Typography>
            </Typography>
          </ListItem>
        </List>
      </Stack>
      <SkillCard />
    </Stack>
  );
}
