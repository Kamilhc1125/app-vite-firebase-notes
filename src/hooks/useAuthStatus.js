import useUserStore from "@/store/useUserStore";
import { useEffect, useState } from "react";

const useAuthStatus = () => {
  const user = useUserStore((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  return isLoggedIn;
};

export default useAuthStatus;