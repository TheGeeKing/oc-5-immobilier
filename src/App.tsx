import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Layout } from "./components/Layout";
import NotFound from "./components/NotFound";
import APropos from "./pages/APropos";
import Logement from "./pages/logement/[id]";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/logement/:id" element={<Logement />} />

      <Route path="/404" element={<NotFound />} />
      {/* make everything else redirect to /404 */}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
