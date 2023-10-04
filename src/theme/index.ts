import { createTheme } from "@mui/material/styles";

export const theme = createTheme();

theme.typography.h1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3rem",
  },
};

theme.typography.h2 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
};

theme.typography.h3 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
};

theme.typography.h4 = {
  fontWeight: 500,
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.2rem",
  },
};

theme.typography.h5 = {
  fontWeight: 400,
  [theme.breakpoints.up("xs")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1rem",
  },
};

theme.typography.body1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.7rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
};

theme.typography.body2 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.7rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.2rem",
  },
};
