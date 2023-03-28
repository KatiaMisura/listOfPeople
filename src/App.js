import "./App.css";
import Table from "./components/Table";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./data/routes";
import Details from "./components/Details";
import Form from "./components/Form";
import Redux from "./components/Redux";

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
    {
      path: routes.details + "/:id",
      element: <Details />,
    },
    {
      path: routes.redux,
      element: <Redux />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
