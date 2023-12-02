import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/private/Dashboard";
import NotFound from "./pages/public/NotFound";
import PrivateRoutes from "./utils/PrivateRoutes";

const publicRoutes = [];
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
