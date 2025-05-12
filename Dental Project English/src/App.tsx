import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Treatments } from './pages/Treatments';
import { TreatmentDetail } from './pages/TreatmentDetail';
import { Services } from './pages/Services';
import { DepartmentDetail } from './pages/DepartmentDetail';
import { AdminPanel } from './pages/AdminPanel';
import { Login } from './pages/Login';
import { Map } from './pages/Map';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useScrollTop } from './hooks/useScrollTop';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';
  
  // Use the scroll to top hook
  useScrollTop();

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/:treatmentId" element={<TreatmentDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:departmentId" element={<DepartmentDetail />} />
          <Route path="/map" element={<Map />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;