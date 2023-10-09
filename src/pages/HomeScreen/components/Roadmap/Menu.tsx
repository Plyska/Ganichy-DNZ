import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import EggAltTwoToneIcon from "@mui/icons-material/EggAltTwoTone";
import Typography from "@mui/material/Typography";
import { menuList } from "../../../../constants";
import { styles } from "./styles";
import "react-vertical-timeline-component/style.min.css";
import Box from "@mui/material/Box/Box";

const TimelineCard = ({ menu }: any) => (
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot>{menu.icon}</TimelineDot>
      <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
    </TimelineSeparator>
    <TimelineContent>
      <Box
        component="div"
        // sx={{
        //   bgcolor: "rgb(173, 200, 247, 0.5)",
        //   marginTop: "0.3rem",
        //   py: "1rem",
        //   px: "1rem",
        //   borderRadius: "1rem",
        // }}
      >
        <Typography variant="h3">{menu.title}:</Typography>
        <List>
          {menu.description.map((item: string) => (
            <Typography key={item} variant="body2" lineHeight={1.75}>
              - {item}
            </Typography>
          ))}
        </List>
      </Box>
    </TimelineContent>
  </TimelineItem>
);

const Menu = (): JSX.Element => {
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Timeline sx={styles.timeline}>
        {menuList.map((menu) => (
          <TimelineCard key={menu.title} menu={menu} />
        ))}
      </Timeline>
    </Box>
  );
};

export default Menu;
