import Login from "./Pages/Auth/Login";
import Faculty from "./Pages/Dashboard/Faculty";
import GuestStudent from "./Pages/Dashboard/GuestStudent";
import AddContainer from "./components/AddContainer";
import QrContainer from "./components/QrContainer";
import AddQueFormStudent from "./components/AddQueFormStudent";
import AddQueFormGuest from "./components/AddQueFormGuest";
import PendingQueue from "./Pages/Dashboard/Faculty Dashboard/PendingQueue";
import QueHistory from "./Pages/Dashboard/Faculty Dashboard/QueHistory";
import PriorityNumber from "./components/PriorityNumber";
import InformationCard from "./components/InformationCard";
import Display from "./Pages/Display";
import { QueryClientProvider, QueryClient } from "react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./Pages/Dashboard/Faculty Dashboard/RegisterPage";
import ProtectedRoute from "./customHooks/ProtectedRoute";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" />} />
        <Route path="/Dashboard" element={<GuestStudent />}>
          <Route path="QrCode" element={<QrContainer />} />
          <Route path="AddQue/:_id" element={<AddContainer />} />
        </Route>
        <Route
          path="/Dashboard/AddQue/Student/:_id"
          element={<AddQueFormStudent />}
        />
        <Route
          path="/Dashboard/AddQue/Guest/:_id"
          element={<AddQueFormGuest />}
        />

        <Route element={<ProtectedRoute />}>
          <Route path="/Faculty" element={<Faculty />}>
            <Route path="PendingQueue" element={<PendingQueue />}>
              <Route path="Information/:_id" element={<InformationCard />} />
            </Route>
            <Route path="QueueHistory" element={<QueHistory />} />
            <Route path="Register" element={<RegisterPage />} />
          </Route>
        </Route>

        <Route path="/Login" element={<Login />} />
        <Route path="/Display" element={<Display />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
