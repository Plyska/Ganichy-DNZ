import { useEffect } from "react";
import { getValueDB } from "../../firebase";

interface News {
  id: string;
  title: string;
}

const HomeScreen = (): JSX.Element => {
  useEffect(() => {
    getValueDB<News>("/templates", (data) => console.log(data));
  }, []);

  return <div>HomeScreen</div>;
};

export default HomeScreen;
