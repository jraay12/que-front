import Login from "./Pages/Auth/Login";
import Faculty from "./Pages/Dashboard/Faculty";
import GuestStudent from "./Pages/Dashboard/GuestStudent";

import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<GuestStudent />} />
        <Route path="/Faculty" element={<Faculty/>}/>
        <Route path="/Login" element={<Login/>} >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
