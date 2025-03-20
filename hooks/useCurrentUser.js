import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

const useCurrentUser = () => {
  const {user} = useContext(UserContext);
  return user;
}

export default useCurrentUser;
