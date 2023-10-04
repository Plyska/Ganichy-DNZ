import bgimg from "../../assets/dnz-bg-img.png";

export const styles = {
  container: {
    height: "88vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url('${bgimg}')`,
  },
  scrollBtn: {
    width: "15px",
    height: "34px",
    border: "4px solid #1976d2",
    borderRadius: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0.5rem",
    cursor: "pointer",
    overflow: "hidden",
  },
  scrollBtnBall: {
    width: "0.75rem",
    height: "0.75rem",
    borderRadius: "50%",
    backgroundColor: "red",
    marginBottom: "0.25rem",
  },
};
