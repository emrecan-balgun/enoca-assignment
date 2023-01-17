import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./constants/routes";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <div className="container mx-auto pt-4 pb-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
