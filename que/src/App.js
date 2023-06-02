import Login from "./Pages/Auth/Login";
import Faculty from "./Pages/Dashboard/Faculty";
import GuestStudent from "./Pages/Dashboard/GuestStudent";

import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Faculty" element={<Faculty/>}/>
        <Route path="/Guest" element={<GuestStudent/>} >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
