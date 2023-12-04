import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/private/Dashboard";
import NotFound from "./pages/public/NotFound";
import Login from "./pages/public/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import Register from "./pages/public/Register";

const publicRoutes = [
  { component: <Login />, path: `/login` },
  { component: <Register />, path: `/register` },
  { component: <NotFound />, path: `/404` },
];
const privateRoutes = [{ component: <Dashboard />, path: `/dashboard` }];

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {privateRoutes.map(({ component, path }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
        {publicRoutes.map(({ component, path }) => (
          <Route key={path} path={path} element={component} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
