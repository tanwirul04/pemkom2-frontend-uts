import { BrowserRouter, Routes,  Route } from "react-router-dom";
import RegisterForm from "./pages/RegisterForm";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";
import LoginForm from "./pages/LoginForm";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layout/DashboardLayout";
import CategoryIndex from "./pages/dashboard/category/CategoryIndex";
import EventIndex from "./pages/dashboard/event/EventIndex";
import CategoryCreate from "./pages/dashboard/category/CategoryCreate";
import EventCreate from "./pages/dashboard/event/EventCreate";
import SpeakerIndex from "./pages/dashboard/speaker/SpeakerIndex";
import SpeakerCreate from "./pages/dashboard/speaker/SpeakerCreate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* landingpage */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/Talkshow" element={<Talkshow/>}/>
          <Route path="/Workshop" element={<Workshop/>}/>
        </Route>
        {/* auth */}
        <Route element={<AuthLayout/>}>
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardLayout/>}>
              <Route path="/dashboard" element={<DashboardIndex/>} />
              <Route path="/dashboard/category" element={<CategoryIndex/>} />
              <Route path="/dashboard/category/create" element={<CategoryCreate/>} />
              <Route path="/dashboard/event" element={<EventIndex/>} />
              <Route path="/dashboard/event/create" element={<EventCreate/>} />
              <Route path="/dashboard/speaker" element={<SpeakerIndex/>} />
              <Route path="/dashboard/speaker/create" element={<SpeakerCreate/>} />
            </Route>
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;