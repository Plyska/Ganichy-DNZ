import { useEffect } from "react";
import { getValueDB, setValueDB, updateValueDB } from "../../firebase";
import { News, User } from "../../types";

const HomeScreen = (): JSX.Element => {
  useEffect(() => {
    getValueDB<News>("/templates", (data) => console.log(data));
    setValueDB<User>("/templates/user", { name: "Andriy", surname: "Plyska" });
    updateValueDB<{ surname: string }>("/templates/user/name", {
      surname: "Plyskaaaaaa",
    });
  }, []);

  return <div>HomeScreen</div>;
};

export default HomeScreen;
