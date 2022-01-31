import "./styles.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShowData from "./components/ShowData";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/:username" element={<ShowData />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
