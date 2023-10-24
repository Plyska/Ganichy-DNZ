import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { menuList } from "../../../../constants";
import { styles } from "./styles";
import "react-vertical-timeline-component/style.min.css";
import Box from "@mui/material/Box/Box";
import Fade from "@mui/material/Fade";
import { useDevice } from "../../../../hooks";
import { UseDevice, MenuItem, TimelineMenuCardProps } from "../../../../types";

const TimelineCard = ({ menu }: TimelineMenuCardProps) => (
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot>{menu.icon}</TimelineDot>
      <TimelineConnector sx={styles.timelineController} />
    </TimelineSeparator>
    <TimelineContent>
      <Fade in={true} timeout={2000}>
        <Box component="div" sx={styles.textTimelineContainer}>
          <Typography textAlign="left" variant="h3">
            {menu.title}:
          </Typography>
          <List sx={styles.descriptionMenuList}>
            {menu.description.map((item: string) => (
              <Typography
                textAlign="left"
                key={item}
                variant="body2"
                lineHeight={1.75}
              >
                {item}
              </Typography>
            ))}
          </List>
        </Box>
      </Fade>
    </TimelineContent>
  </TimelineItem>
);

const Menu = (): JSX.Element => {
  const { isDesktop }: UseDevice = useDevice();

  return (
    <Box>
      <Timeline
        sx={isDesktop ? undefined : styles.timeline}
        position={isDesktop ? "alternate" : "right"}
      >
        {menuList.map((menu: MenuItem) => (
          <TimelineCard key={menu.title} menu={menu} />
        ))}
      </Timeline>
    </Box>
  );
};

export default Menu;
