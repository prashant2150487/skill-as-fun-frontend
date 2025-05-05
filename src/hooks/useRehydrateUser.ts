import { fetchUserProfile } from "@/api/user";
import { logout, setUser } from "@/slices/userSlice";
import { RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useRehydrateUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const init = async () => {
    try {
      const userProfile = await fetchUserProfile();
      console.log("user++++", userProfile);
      if (user) {
        dispatch(
            setUser({
              user: userProfile,
              token: localStorage.getItem("Token") || "",
              isAuthenticated: true,
            })
          );
      }
    } catch (error) {
      console.error("Error rehydrating user:", error);
      dispatch(logout());
    }

    
  };

  useEffect(() => {
    console.log("user++++", user);
    if(!user?.email){
        init();

    }
  }, [user?.email]);
};

export default useRehydrateUser;
