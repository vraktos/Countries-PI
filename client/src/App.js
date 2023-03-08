import { Home, Detail, Form, Landing } from "./Views";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Landing />} />
        <Route path="/detail" element={<Detail />} />
        <Route exact path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
