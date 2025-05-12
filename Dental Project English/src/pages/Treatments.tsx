import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Search, X } from 'lucide-react';

interface Treatment {
  id: string;
  title: string;
  description: string;
  image: string;
}

export function Treatments() {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTreatments, setFilteredTreatments] = useState<Treatment[]>([]);

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const treatmentsQuery = query(collection(db, 'treatments'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(treatmentsQuery);
        const treatmentsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Treatment[];
        setTreatments(treatmentsData);
        setFilteredTreatments(treatmentsData);
      } catch (error) {
        console.error('Error fetching treatments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTreatments();
  }, []);

  useEffect(() => {
    const filtered = treatments.filter(treatment =>
      treatment.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTreatments(filtered);
  }, [searchQuery, treatments]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading treatments...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Specialized Treatments
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our comprehensive range of dental treatments designed for excellence in dental care.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treatment titles..."
                className="w-full pl-12 pr-12 py-4 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {filteredTreatments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No treatments found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTreatments.map((treatment) => (
              <Link
                key={treatment.id}
                to={`/treatments/${treatment.id}`}
                className="group bg-white rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl"
              >
                <div className="aspect-[4/4] relative">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-medium line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {treatment.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                       
                      </div>
                    </div>
                    <div className="h-8 w-8 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <span className="text-blue-600 text-lg">+</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}