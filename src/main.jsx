import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import African_Catfish from "./pages/African_Catfish.jsx";
import Pheasant_Farming from "./pages/Pheasant_Farming.jsx";
import Nav from "./pages/Nav.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="/blogs" element={<Nav />}>
        <Route path="1" element={<African_Catfish />} />
        <Route path="2" element={<Pheasant_Farming />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
