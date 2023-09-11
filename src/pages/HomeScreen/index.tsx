import { getValueDB } from "../../firebase";
import React from "react";

interface News {
  id: string;
  title: string;
}

const HomeScreen: React.FC = () => {
  getValueDB<News>("/templates", console.log)

  return <div>HomeScreen</div>;
};

export default HomeScreen;
