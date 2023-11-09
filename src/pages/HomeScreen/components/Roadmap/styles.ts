import { timelineItemClasses } from "@mui/lab/TimelineItem";

export const styles = {
  tabpanel: {
    padding: 0,
  },
  timeline: {
    [`& .${timelineItemClasses.root}:before`]: {
      flex: 0,
      padding: 0,
    },
  },
  timelineController: {
    bgcolor: "#1976d2",
  },
  menuText: {
    fontSize: { lg: "0.85rem" },
  },
  textTimelineContainer: {
    bgcolor: "rgb(173, 200, 247, 0.5)",
    marginTop: "0.3rem",
    py: "0.5rem",
    px: "1rem",
    borderRadius: "1rem",
  },
  scheduleTime: {
    bgcolor: "rgb(173, 200, 247, 0.3)",
    py: "0.8rem",
    borderRadius: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  scheduleDescription: {
    bgcolor: "rgb(173, 200, 247, 0.5)",
    py: "0.8rem",
    borderRadius: "1rem",
  },
  descriptionText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    px: "0.5rem",
  },
  timeText: {
    px: {
      xs: "1rem",
      sm: "0.5rem",
      md: "1rem",
      xl: "1rem",
      lg: "1rem",
    },
  },
  descriptionMenuList: {
    paddingLeft: "1rem",
  },
};
