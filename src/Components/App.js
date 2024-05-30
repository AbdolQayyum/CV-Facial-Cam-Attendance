
import WelcomePage from '../pages/WelcomePage';
import AttendanceTaking from '../pages/AttendanceTaking'
import EnrollStudent from '../pages/EnrollStudent'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<WelcomePage />} />
            <Route path="enrollStudent" element={<EnrollStudent />} />
            <Route path="AttendanceTaking" element={<AttendanceTaking />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
