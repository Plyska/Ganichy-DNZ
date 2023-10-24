export const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      xl: "row",
      lg: "row",
    },
  },
  img: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: { xs: "100%", sm: "70%", md: "100%", xl: "90%", lg: "100%" },
    height: { xs: "50%", sm: "70%", md: "60%", xl: "70%", lg: "70%" },
  },
  textWrapper: {
    width: "100%",
    px: { xs: "0rem", sm: "0rem", md: "3rem", xl: "3rem", lg: "5rem" },
    py: { xs: "2rem", sm: "2rem", md: "0rem", xl: "0rem", lg: "0rem" },
    maxHeight: "300px",
    minWidth: { xs: "250", sm: "300", md: "350px", xl: "450px", lg: "450px" },
  },
};
