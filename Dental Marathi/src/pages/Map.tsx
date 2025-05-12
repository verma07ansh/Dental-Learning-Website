import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';
import { floors } from '../data/floors';
import { motion } from 'framer-motion';

export function Map() {
  const [selectedFloor, setSelectedFloor] = useState(floors[0]);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            कॅम्पस नकाशा
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            आमच्या सुविधा मजला दर मजला एक्सप्लोर करा आणि विभाग व सेवा शोधा
          </p>
        </div>

        {/* मजला निवडीची बटणे */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {floors.map((floor) => (
            <motion.button
              key={floor.id}
              onClick={() => setSelectedFloor(floor)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedFloor.id === floor.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
              whileHover={{ scale: selectedFloor.id === floor.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                {floor.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* मजल्याचा नकाशा आणि माहिती */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Floor Map Image */}
          <motion.div
            key={selectedFloor.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative w-full" style={{ minHeight: '600px' }}>
              <img
                src={selectedFloor.image}
                alt={`${selectedFloor.name} Layout`}
                className="absolute inset-0 w-full h-full object-scale-down"
              />
            </div>
          </motion.div>

          {/* खोल्यांची माहिती */}
          <motion.div
            key={`details-${selectedFloor.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-600" />
              {selectedFloor.name} माहिती
            </h2>
            
            <div className="space-y-6">
              {selectedFloor.rooms.map((room, index) => (
                <motion.div
                  key={room.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {room.name}
                  </h3>
                  <div className="space-y-2">
                    {room.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {service}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* संपर्क माहिती */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            संपर्क माहिती
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">पत्ता</h3>
                <p className="text-gray-600">
                  भारती विद्यापीठ डेंटल कॉलेज आणि हॉस्पिटल<br />
                  सेक्टर ७, सीबीडी बेलापूर<br />
                  नवी मुंबई - ४००६१४
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">फोन</h3>
                <p className="text-gray-600">
                  मुख्य: +९१ (०२२) २७७८-१०००<br />
                  आकस्मिक: +९१ (०२२) २७७८-१००१
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ई-मेल</h3>
                <p className="text-gray-600">
                  info@bvdental.edu<br />
                  admissions@bvdental.edu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
