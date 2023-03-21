import { Home, Detail, Form, Landing } from "./Views";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import style from "./App.module.css";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const location = useLocation();
  const id = location.pathname.substr(8);
  return (
    <div className={style.app}>
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Landing />} />
        <Route path={"/detail/" + id} element={<Detail />}></Route>
        <Route exact path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
