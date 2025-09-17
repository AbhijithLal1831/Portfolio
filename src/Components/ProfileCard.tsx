import { Stack, Typography } from "@mui/material";
import NavBarBreadcrumbs from "./navbar";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Avatar from "@mui/material/Avatar";
export default function ProfileCard() {
  return (
    <Stack
      sx={{ backgroundColor: "#f3fffd" }}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      alignItems={"stretch"}
    >
      <NavBarBreadcrumbs />
      <Stack
        direction={{ sm: "row", xs: "column-reverse" }}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Stack alignItems={"center"} spacing={1}>
          <Typography variant="h2" fontWeight={"bold"}>
            Abhijith Lal
          </Typography>
          <Typography fontWeight="normal" variant="caption" fontSize={"20px"}>
            Full Stack Developer
          </Typography>
          <Button variant="contained" endIcon={<DownloadIcon />}>
            Download Resume
          </Button>
        </Stack>
        <Avatar
          alt="Abhijith"
          src="\public\ExecutiveProfile.jpg"
          sx={{ width: "300px", height: "300px" }}
        />
      </Stack>
    </Stack>
  );
}
