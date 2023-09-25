import NewspaperIcon from "@mui/icons-material/Newspaper";
import CollectionsIcon from "@mui/icons-material/Collections";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import InfoIcon from "@mui/icons-material/Info";
import { LinkForDrawer } from "../types";

export const linksForDrawer: LinkForDrawer[] = [
  {
    title: "Новини",
    icon: <NewspaperIcon />,
    path: "/news",
  },
  {
    title: "Галерея",
    icon: <CollectionsIcon />,
    path: "/gallery",
  },
  {
    title: "Установчі документи",
    icon: <DocumentScannerIcon />,
    path: "/documents",
  },
  {
    title: "Інформація для батьків",
    icon: <InfoIcon />,
    path: "/info-for-parent",
  },
];
