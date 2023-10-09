import { timelineItemClasses } from "@mui/lab/TimelineItem";

export const styles = {
  timeline: {
    [`& .${timelineItemClasses.root}:before`]: {
      xs: { flex: 0, padding: 0 },
      sm: { flex: 0, padding: 0 },
      md: { flex: 1, padding: 0 },
      xl: { flex: 1, padding: 0 },
      lg: { flex: 1, padding: 0 },
    },
  },
  menuText: {
    fontSize: { lg: "0.85rem" },
  },
};
