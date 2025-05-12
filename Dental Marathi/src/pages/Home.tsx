import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, query, limit, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { doctors } from "../data/doctors";
import { principal } from "../data/principal";

interface Treatment {
  id: string;
  title: string;
  description: string;
  image: string;
}

const extendedDoctors = [...doctors, ...doctors];

export function Home() {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const treatmentsQuery = query(
          collection(db, "treatments"),
          orderBy("createdAt", "desc"),
          limit(4)
        );
        const querySnapshot = await getDocs(treatmentsQuery);
        const treatmentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Treatment[];
        setTreatments(treatmentsData);
      } catch (error) {
        console.error("उपचार प्राप्त करताना त्रुटी:", error); // Error in fetching treatments
      } finally {
        setLoading(false);
      }
    };

    fetchTreatments();
  }, []);

  const handleExploreServices = () => {
    navigate("/services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div className="relative h-[80vh] bg-gray-900">
        <img
          src="/assets/College photo.jpg"
          alt="डेंटल कॉलेज"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-end pb-24">
            <div className="max-w-2xl text-white">
              <h2 className="text-4xl font-bold mb-4">
                सर्वोच्च दर्जाच्या दंत आरोग्य सेवा
              </h2>{" "}
              {/* Top Rated Dental Services */}
              <p className="text-3xl font-light mb-3">
                दंत समस्या सोडून द्या
              </p>{" "}
              {/* Say Goodbye to Dental Problems */}
              <p className="text-xl text-gray-300 mb-8">
                आम्ही संपूर्ण दंत आरोग्य सेवा प्रदान करतो
              </p>{" "}
              {/* We offer a full range of dental services */}
              <Link
                to="/treatments"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                उपचार शोधा {/* Find Treatments */}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Treatments Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">विशेष उपचार</h2>{" "}
            {/* Featured Treatments */}
            <Link
              to="/treatments"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              सर्व उपचार पहा {/* View All Treatments */}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 aspect-[3/4] rounded-xl"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatments.map((treatment) => (
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
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <h3 className="text-gray-900 font-medium line-clamp-1">
                          {treatment.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1"></div>
                      </div>
                      <div className="h-8 w-8 bg-blue-50 rounded-full flex items-center justify-center">
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
      {/* Principal's Message */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-white p-8">
                <div className="aspect-w-4 aspect-h-5 mb-6">
                  <img
                    src="/assets/princi.jpg" // Make sure the path is correct
                    alt={`${principal.name} - ${principal.designation}`}
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {principal.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {principal.designation}
                  </p>
                  <div className="mt-4 space-y-2">
                    {principal.qualifications.map((qual, index) => (
                      <p key={index} className="text-sm text-gray-600">
                        {qual}
                      </p>
                    ))}
                    <p className="text-sm text-gray-600">
                      {principal.experience}
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    भारती विद्यापीठ डेंटल कॉलेज आणि हॉस्पिटल, नवी मुंबई मध्ये स्वागत आहे{" "}
                    {/* Welcome to Bharati Vidyapeeth Dental College & Hospital, Navi Mumbai */}
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    {principal.message.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      {/* Meet Our Doctors Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            आमचे डॉक्टर
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            आमचे अनुभवी आणि समर्पित दंत तज्ञ तुम्हाला सर्वोत्तम सेवा प्रदान करण्यास कटिबद्ध आहेत.
          </p>

          <div className="doctors-slider">
            {" "}
            {/* Add a wrapper for the slider */}
            <div className="doctors-track animate-scroll">
              {" "}
              {/* Add a track for the sliding content */}
              {extendedDoctors.map((doctor, index) => (
                <div key={index} className="doctor-slide">
                  {" "}
                  {/* Individual doctor slide */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="relative w-[160px] h-[200px] mx-auto mt-6 overflow-hidden rounded-lg">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {doctor.designation}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        {doctor.experience}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {doctor.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* आमच्या सेवा */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">आमच्या सेवा</h2>
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              सर्व सेवा पहा
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service, index) => (
              <Link
                key={index}
                to="/services" // Or to a specific service page if needed
                className="group bg-white rounded-xl p-6 text-center hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {service.emoji}
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
