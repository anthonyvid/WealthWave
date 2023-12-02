import { Typography } from "@mui/material";

type Props = {
  isMobile?: boolean;
};
const Logo = ({ isMobile = false }: Props) => {
  const display = isMobile
    ? { xs: "flex", md: "none" }
    : { xs: "none", md: "flex" };

  const variant = isMobile ? "h5" : "h6";

  return (
    <Typography
      variant={variant}
      noWrap
      component="a"
      href="#app-bar-with-responsive-menu"
      sx={{
        mr: 2,
        display: display,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
        flexGrow: isMobile ? 1 : 0,
      }}
    >
      WealthWave
    </Typography>
  );
};

export default Logo;
