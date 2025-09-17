import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import WhatshotTwoToneIcon from "@mui/icons-material/WhatshotTwoTone";
import WorkHistoryTwoToneIcon from "@mui/icons-material/WorkHistoryTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { Typography } from "@mui/material";
export default function NavBarBreadcrumbs() {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "20px",
        fontSize: "18px",
      }}
    >
      <Link
        underline="none"
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: "inherit",
          "&:hover": {
            color: "green",
          },
        }}
        color="inherit"
        href="/"
      >
        <PermIdentityTwoToneIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        <Typography variant="button">About</Typography>
      </Link>
      <Link
        underline="none"
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": {
            color: "green",
          },
        }}
        color="inherit"
        href=""
      >
        <WhatshotTwoToneIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        <Typography variant="button">Skills</Typography>
      </Link>
      <Link
        underline="none"
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": {
            color: "green",
          },
        }}
        color="inherit"
        href=""
      >
        <WorkHistoryTwoToneIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        <Typography variant="button">Projects</Typography>
      </Link>
      <Link
        underline="none"
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": {
            color: "green",
          },
        }}
        color="inherit"
        href=""
      >
        <EmailTwoToneIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        <Typography variant="button">Contact</Typography>
      </Link>
    </Breadcrumbs>
  );
}
