import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AuthController } from "./context/authContext.jsx";
//import { ISSController } from './context/issContext.jsx'
import "./index.css";
import MyRouter from "./MyRouter.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthController>
      <MyRouter />
    </AuthController>
  </BrowserRouter>
);
