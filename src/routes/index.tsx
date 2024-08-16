import { createBrowserRouter } from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: "/",
    element: "HI^^",
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => routers.dispose());
}

export default routers;
