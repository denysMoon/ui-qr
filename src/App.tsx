import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { Layout } from "./components/Layout";
import { Main } from "./pages/Main";
import { Instruction } from "./pages/Instruction";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="/how-to" element={<Instruction />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
