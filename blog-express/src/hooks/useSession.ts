import { IUser } from "@/types/blog";
import { useEffect, useState } from "react";

const useSession = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const checkSession = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/users/profile", {
        next: { revalidate: 0 },
        credentials: "include",
      });
      const result = await res.json();
      if (!res.ok) throw result;
      setUser(result.user);
      setIsAuth(!isAuth);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return { user, isAuth, setIsAuth };
};

export default useSession;
