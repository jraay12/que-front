import Login from "./Pages/Auth/Login";
import Faculty from "./Pages/Dashboard/Faculty";
import GuestStudent from "./Pages/Dashboard/GuestStudent";
import AddContainer from "./components/AddContainer";
import QrContainer from "./components/QrContainer";
import AddQueFormStudent from "./components/AddQueFormStudent";
import AddQueFormGuest from "./components/AddQueFormGuest";
import PendingQueue from "./Pages/Dashboard/Faculty Dashboard/PendingQueue";
import QueHistory from "./Pages/Dashboard/Faculty Dashboard/QueHistory";
import InformationCard from "./components/InformationCard";
import { QueryClientProvider, QueryClient } from "react-query";
import { Routes, Route, Navigate } from "react-router-dom";
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
          path="/Dashboard/AddQue/Student"
          element={<AddQueFormStudent />}
        />
        <Route path="/Dashboard/AddQue/Guest" element={<AddQueFormGuest />} />

        <Route path="/Faculty" element={<Faculty />}>
          <Route path="PendingQueue" element={<PendingQueue />}>
            <Route path="Information/:name" element={<InformationCard />} />
          </Route>
          <Route path="QueueHistory" element={<QueHistory />} />
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
