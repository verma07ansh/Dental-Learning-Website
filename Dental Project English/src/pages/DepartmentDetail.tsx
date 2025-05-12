import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Timer } from 'lucide-react';
import { getDepartmentById } from '../data/departments';

export function DepartmentDetail() {
  const { departmentId } = useParams<{ departmentId: string }>();
  const department = getDepartmentById(departmentId || '');

  if (!department) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Department not found</h1>
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <Link
          to="/services"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 bg-blue-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                
              </div>
              <h1 className="text-3xl font-bold text-gray-900">{department.name}</h1>
            </div>
            <p className="text-lg text-gray-700">{department.longDescription || department.description}</p>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
            <div className="grid gap-6">
              {department.services.map((service) => (
                <div
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      {/* <p className="text-gray-600 mb-2">{service.description}</p> */}
                      
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{service.price.toLocaleString()}
                      </span>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}