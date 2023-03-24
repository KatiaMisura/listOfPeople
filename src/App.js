import "./App.css";
import Table from "./components/Table";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./data/routes";

import Form from "./components/Form";

function App() {
  const router = createBrowserRouter([
    {
      path: routes.home,
      element: <Table />,
    },
    {
      path: routes.form,
      element: <Form />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
