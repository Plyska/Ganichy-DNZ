import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { scheduleList } from "../../../../constants";
import { styles } from "./styles";
import "react-vertical-timeline-component/style.min.css";
import Box from "@mui/material/Box/Box";
import Fade from "@mui/material/Fade";
import { ScheduleItem, TimelineScheduleCardProps } from "../../../../types";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const TimelineCard = ({ schedule }: TimelineScheduleCardProps): JSX.Element => (
  <TimelineItem>
    <TimelineOppositeContent color="text.secondary">
      <Fade in={true} timeout={2000}>
        <Box component="div" sx={styles.scheduleTime}>
          <Typography sx={styles.timeText} variant="body1">
            {schedule.time}
          </Typography>
        </Box>
      </Fade>
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot>{schedule.icon}</TimelineDot>
      <TimelineConnector sx={styles.timelineController} />
    </TimelineSeparator>
    <TimelineContent>
      <Fade in={true} timeout={2000}>
        <Box component="div" sx={styles.scheduleDescription}>
          <Typography sx={styles.descriptionText} variant="body1">
            {schedule.description}
          </Typography>
        </Box>
      </Fade>
    </TimelineContent>
  </TimelineItem>
);

const Schedule = (): JSX.Element => {
  return (
    <Box>
      <Timeline>
        {scheduleList.map((menu: ScheduleItem) => (
          <TimelineCard key={menu.time} schedule={menu} />
        ))}
      </Timeline>
    </Box>
  );
};

export default Schedule;
