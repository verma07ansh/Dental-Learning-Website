// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, LogOut } from 'lucide-react';
import { auth } from '../lib/firebase';

export function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('साइन आउट करताना त्रुटी:', error);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">ॲडमिन डॅशबोर्ड</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5 mr-2" />
            लॉगआउट
          </button>
        </div>
      </div>
    </nav>
  );
}
