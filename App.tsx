import React, { Suspense } from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Loading from "./Loading";

const Init = React.lazy(() => import("./Init"));
const Home = React.lazy(() => import("./Home"));

const router = createMemoryRouter([
  {
    path: "/",
    element: <Init />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const App: React.FC<Record<string, unknown>> = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
