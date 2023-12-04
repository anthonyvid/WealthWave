import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../services/auth.service";
import { setLogin } from "../reducers/auth";
import { useEffect } from "react";

const PrivateRoutes = () => {
  const { token, user } = useSelector((state: any) => state.authReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const runAuth = async () => {
    try {
      const response: any = await isAuthenticated({
        user,
        token,
      });

      if (response.status !== 200) {
        if (response.status === 404) {
          navigate("/404");
        } else {
          dispatch(
            setLogin({
              user: null,
              token: null,
            })
          );
          navigate("account/login");
          throw new Error(response.data.message || response.statusText);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token && user) {
      runAuth();
    }
  }, [token, user]);

  return token && token !== null && token !== undefined ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
