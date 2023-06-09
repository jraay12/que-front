import Login from "./Pages/Auth/Login";
import Faculty from "./Pages/Dashboard/Faculty";
import GuestStudent from "./Pages/Dashboard/GuestStudent";
import AddContainer from "./components/AddContainer";
import QrContainer from "./components/QrContainer";
import AddQueFormStudent from "./components/AddQueFormStudent";
import AddQueFormGuest from "./components/AddQueFormGuest";
import {Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" />} />
        <Route path="/Dashboard" element={<GuestStudent />}>
          <Route path="QrCode" element={<QrContainer />} />  
          <Route path="AddQue" element={<AddContainer />} />  
        </Route>
        <Route path="/Dashboard/AddQue/Student" element={< AddQueFormStudent/>} />
        <Route path="/Dashboard/AddQue/Guest" element={< AddQueFormGuest/>} />
        
        <Route path="/Faculty" element={<Faculty/>}/>
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
