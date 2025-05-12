import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ChevronDown, ChevronUp, ArrowLeft, MapPin, Building2, Building, Stars as Stairs, Search, X } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  videoId: string;
}

interface Location {
  building: string;
  floor: string;
  roomNumber: string;
  additionalInfo?: string;
}

interface Treatment {
  id: string;
  title: string;
  description: string;
  mainVideoId: string;
  faqs: FAQ[];
  location: Location;
}

export function TreatmentDetail() {
  const { treatmentId } = useParams<{ treatmentId: string }>();
  const [treatment, setTreatment] = useState<Treatment | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeVideoFAQ, setActiveVideoFAQ] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTreatment = async () => {
      if (!treatmentId) return;

      try {
        const treatmentDoc = await getDoc(doc(db, 'treatments', treatmentId));
        if (treatmentDoc.exists()) {
          setTreatment({
            id: treatmentDoc.id,
            ...treatmentDoc.data()
          } as Treatment);
        }
      } catch (error) {
        console.error('Error fetching treatment:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTreatment();
  }, [treatmentId]);

  const getFilteredFAQs = () => {
    if (!treatment || !searchQuery) return treatment?.faqs || [];

    const query = searchQuery.toLowerCase();
    
    // Separate FAQs into question matches and answer matches
    const questionMatches: FAQ[] = [];
    const answerMatches: FAQ[] = [];

    treatment.faqs.forEach(faq => {
      if (faq.question.toLowerCase().includes(query)) {
        questionMatches.push(faq);
      } else if (faq.answer.toLowerCase().includes(query)) {
        answerMatches.push(faq);
      }
    });

    // Combine the matches with question matches first
    return [...questionMatches, ...answerMatches];
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">उपचार लोड हो रहा है...</p>
      </div>
    );
  }

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <p className="text-2xl text-gray-600 mb-4"> उपचार उपलब्ध नहीं है</p>
        <Link
          to="/treatments"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          उपचारों पर वापस जाएँ
        </Link>
      </div>
    );
  }

  const filteredFAQs = getFilteredFAQs();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <Link
          to="/treatments"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          उपचारों पर वापस जाएँ
        </Link>

        <h1 className="text-4xl font-bold text-center mb-4">{treatment.title}</h1>

        {/* Main Treatment Video */}
        <div className="mb-8">
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              className="w-full h-[500px] rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${treatment.mainVideoId}`}
              title={treatment.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Treatment Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">इस उपचार के बारे में</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {treatment.description}
            </p>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">अक्सर पूछे जाने वाले प्रश्न</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="एफ़एक्यू खोजें..."
                className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {filteredFAQs.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-lg shadow-md">
              <p className="text-gray-600"> आपकी खोज से मेल खाते कोई अक्सर पूछे जाने वाले प्रश्न नहीं मिले।</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                    onClick={() => setActiveVideoFAQ(activeVideoFAQ === faq.question ? null : faq.question)}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {activeVideoFAQ === faq.question ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {activeVideoFAQ === faq.question && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 mb-4">{faq.answer}</p>
                      <div className="aspect-w-16 aspect-h-9">
                        <iframe
                          className="w-full h-[300px] rounded"
                          src={`https://www.youtube.com/embed/${faq.videoId}`}
                          title={faq.question}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location Section */}
        {treatment.location && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-600" />
              उपचार स्थान
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Building2 className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">इमारत</p>
                    <p className="font-medium">{treatment.location.building}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Stairs className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">मंज़िल</p>
                    <p className="font-medium">{treatment.location.floor}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Building className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500"> कक्ष </p>
                    <p className="font-medium">{treatment.location.roomNumber}</p>
                  </div>
                </div>
                {treatment.location.additionalInfo && (
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500"> अतिरिक्त जानकारी</p>
                      <p className="font-medium">{treatment.location.additionalInfo}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}