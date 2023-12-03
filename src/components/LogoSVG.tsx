import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  isMobile?: boolean;
};
const LogoSVG = ({ isMobile = false }: Props) => {
  const theme = useTheme();

  const display = isMobile
    ? { xs: "flex", md: "none" }
    : { xs: "none", md: "flex" };

  const variant = isMobile ? "h5" : "h6";

  const title = (
    <Typography
      variant={variant}
      noWrap
      component="a"
      href="/dashboard"
      sx={{
        mr: 2,
        display: display,
        fontWeight: 700,
        letterSpacing: ".1rem",
        textDecoration: "none",
        flexGrow: isMobile ? 1 : 0,
        color: "black",
      }}
    >
      Wealth
      <span style={{ color: theme.palette.primary.main }}>W</span>
      <span style={{ color: theme.palette.primary.main }}>a</span>
      <span style={{ color: theme.palette.primary.main }}>v</span>
      <span style={{ color: theme.palette.primary.main }}>e</span>
    </Typography>
  );

  const wave = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <path
        fill={theme.palette.primary.main}
        d="M9 63.5c4.795.629 9.841-3.832 13.756-6.056 3.757-2.134 7.005-5.056 8.919-9 3.79-7.807 11.726-18.139 21.032-18.7 5.219-.315 12.486-.783 14.759 4.949-10.27 1.884-9.515 16.543-.446 19.75 3.287 1.163 8.518 1.193 12.055.819 4.912-.52 9.464-4.603 14.381-3.975 1.923 3.363-1.767 10.557-2.518 14.144-.949 4.536-3.941 9.078-6.486 12.508-2.781 3.749-6.969 8.078-10.897 10.817-4.564 3.183-11.179 4.619-16.597 5.806-10.334 2.265-20.018-1.06-28.895-5.569-3.495-1.775-7.822-3.951-10.501-7.07-1.568-1.826-2.625-4.216-3.555-6.355-1.138-2.617-3.125-4.941-4.257-7.568-.506-1.177-.887-2.964-.75-3.75"
      />
      <path
        fill={theme.palette.primary.main}
        d="M49.75 97.5c-26.054 0-47.25-21.532-47.25-48 0-26.467 21.196-48 47.25-48S97 23.033 97 49.5c0 26.468-21.196 48-47.25 48zm0-91C26.453 6.5 7.5 25.79 7.5 49.5s18.953 43 42.25 43S92 73.21 92 49.5s-18.953-43-42.25-43z"
      />
      <path
        fill={theme.palette.primary.main}
        d="M10.934 65.486c-1.819 0-3.748-.341-5.841-1.157l1.815-4.658c5.084 1.979 8.781-.023 13.899-2.795.662-.358 1.336-.724 2.029-1.088 4.718-2.484 8.913-10.874 10.929-14.906C38.407 31.599 48.96 24.976 58.27 25.47c6.015.32 10.647 3.672 12.709 9.195l1.457 3.903-4.129-.55c-1.671-.225-3.078.154-4.184 1.119-1.45 1.266-2.321 3.479-2.329 5.921-.017 5.202 4.14 7.111 7.629 7.798 4.238.835 9.725.384 14.68-1.204 1.48-.475 2.806-1.1 4.087-1.706 2.229-1.053 4.535-2.142 7.57-2.435l.48 4.977c-2.168.209-3.904 1.029-5.915 1.979-1.361.643-2.904 1.372-4.697 1.946-5.723 1.834-12.142 2.337-17.17 1.349-7.325-1.44-11.686-6.195-11.664-12.721.013-3.917 1.486-7.442 4.042-9.672a9.627 9.627 0 0 1 3.665-2.014c-1.897-2.14-4.438-2.783-6.498-2.893-6.407-.334-15.588 4.297-19.767 12.655-3.599 7.199-7.674 14.252-13.071 17.094-.675.355-1.332.712-1.977 1.061-3.968 2.15-7.78 4.214-12.254 4.214z"
      />
    </svg>
  );

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      gap="12px"
      sx={{
        mr: 2,
        display: display,
        flexGrow: isMobile ? 1 : 0,
        height: "100%",
        width: "auto",
      }}
    >
      {wave}
      {title}
    </Box>
  );
};

export default LogoSVG;
