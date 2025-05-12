import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import {
  PlusCircle,
  MinusCircle,
  Save,
  Trash2,
  Edit2,
  X,
  MapPin,
} from "lucide-react";
import { AdminLayout } from "../components/AdminLayout";

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
  image: string;
  faqs: FAQ[];
  location: Location;
}

export function AdminPanel() {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainVideoUrl, setMainVideoUrl] = useState("");
  const [image, setImage] = useState("");
  const [faqs, setFaqs] = useState<FAQ[]>([
    { question: "", answer: "", videoId: "" },
  ]);
  const [location, setLocation] = useState<Location>({
    building: "",
    floor: "",
    roomNumber: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [editingTreatment, setEditingTreatment] = useState<string | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  useEffect(() => {
    fetchTreatments();
  }, []);

  const fetchTreatments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "treatments"));
      const treatmentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Treatment[];
      setTreatments(treatmentsData);
    } catch (error) {
      console.error("Error fetching treatments:", error);
    }
  };

  const getYouTubeId = (url: string) => {
    if (!url) return "";

    try {
      const urlObj = new URL(url);

      // Handle youtube.com/shorts URLs
      if (urlObj.pathname.includes("/shorts/")) {
        const shortsMatch = urlObj.pathname.split("/shorts/")[1];
        return shortsMatch.split("/")[0];
      }

      // Handle youtube.com/watch?v= URLs
      if (urlObj.hostname.includes("youtube.com")) {
        const searchParams = new URLSearchParams(urlObj.search);
        const videoId = searchParams.get("v");
        if (videoId) return videoId;
      }

      // Handle youtu.be URLs
      if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.slice(1);
      }

      // Handle youtube.com/embed URLs
      if (urlObj.pathname.includes("/embed/")) {
        return urlObj.pathname.split("/embed/")[1];
      }
    } catch (error) {
      console.error("Error parsing YouTube URL:", error);
      return "";
    }

    return "";
  };

  const addFAQ = () => {
    setFaqs([...faqs, { question: "", answer: "", videoId: "" }]);
  };

  const removeFAQ = (index: number) => {
    if (faqs.length > 1) {
      setFaqs(faqs.filter((_, i) => i !== index));
    }
  };

  const updateFAQ = (index: number, field: keyof FAQ, value: string) => {
    const newFaqs = [...faqs];
    if (field === "videoId") {
      const videoId = getYouTubeId(value);
      if (videoId) {
        newFaqs[index] = { ...newFaqs[index], videoId };
      } else {
        // Keep the original value if parsing fails
        newFaqs[index] = { ...newFaqs[index], [field]: value };
      }
    } else {
      newFaqs[index] = { ...newFaqs[index], [field]: value };
    }
    setFaqs(newFaqs);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setMainVideoUrl("");
    setImage("");
    setFaqs([{ question: "", answer: "", videoId: "" }]);
    setLocation({
      building: "",
      floor: "",
      roomNumber: "",
      additionalInfo: "",
    });
    setEditingTreatment(null);
    setIsAddingNew(false);
  };

  const handleEdit = (treatment: Treatment) => {
    setTitle(treatment.title);
    setDescription(treatment.description);
    setMainVideoUrl(`https://youtube.com/watch?v=${treatment.mainVideoId}`);
    setImage(treatment.image);
    setFaqs(treatment.faqs);
    setLocation(
      treatment.location || {
        building: "",
        floor: "",
        roomNumber: "",
        additionalInfo: "",
      }
    );
    setEditingTreatment(treatment.id);
    setIsAddingNew(false);
  };

  const handleDelete = async (treatmentId: string) => {
    if (window.confirm("Are you sure you want to delete this treatment?")) {
      try {
        await deleteDoc(doc(db, "treatments", treatmentId));
        setMessage({
          text: "Treatment deleted successfully!",
          type: "success",
        });
        fetchTreatments();
      } catch (error) {
        setMessage({ text: "Error deleting treatment", type: "error" });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "", type: "" });

    try {
      const mainVideoId = getYouTubeId(mainVideoUrl);
      if (!mainVideoId) {
        throw new Error("Invalid main video URL");
      }

      const treatmentData = {
        title,
        description,
        mainVideoId,
        image,
        faqs,
        location,
        updatedAt: new Date(),
      };

      if (editingTreatment) {
        await updateDoc(doc(db, "treatments", editingTreatment), treatmentData);
        setMessage({
          text: "Treatment updated successfully!",
          type: "success",
        });
      } else {
        await addDoc(collection(db, "treatments"), {
          ...treatmentData,
          createdAt: new Date(),
        });
        setMessage({ text: "Treatment added successfully!", type: "success" });
      }

      resetForm();
      fetchTreatments();
    } catch (error: any) {
      setMessage({
        text: error.message || "Error saving treatment. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">उपचार व्यवस्थापन</h1>
          {!isAddingNew && !editingTreatment && (
            <button
              onClick={() => setIsAddingNew(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              नवीन उपचार जोडा
            </button>
          )}
        </div>

        {message.text && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        {isAddingNew || editingTreatment ? (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {editingTreatment ? "उपचार संपादित करा" : "नवीन उपचार जोडा"}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  उपचाराचे शीर्षक
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  वर्णन
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  मुख्य व्हिडिओ URL (YouTube)
                </label>
                <input
                  type="url"
                  value={mainVideoUrl}
                  onChange={(e) => setMainVideoUrl(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="YouTube URL"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  उपचाराचा प्रतिमा URL
                </label>
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  उपचाराचे स्थान
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      इमारत
                    </label>
                    <input
                      type="text"
                      value={location.building}
                      onChange={(e) =>
                        setLocation({ ...location, building: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Main Building"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      मजला
                    </label>
                    <input
                      type="text"
                      value={location.floor}
                      onChange={(e) =>
                        setLocation({ ...location, floor: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 1st Floor"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      खोली क्रमांक
                    </label>
                    <input
                      type="text"
                      value={location.roomNumber}
                      onChange={(e) =>
                        setLocation({ ...location, roomNumber: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Lab 102"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      अतिरिक्त माहिती
                    </label>
                    <input
                      type="text"
                      value={location.additionalInfo || ""}
                      onChange={(e) =>
                        setLocation({
                          ...location,
                          additionalInfo: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Next to the elevator"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">FAQs</h3>
                  <button
                    type="button"
                    onClick={addFAQ}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <PlusCircle className="w-5 h-5 mr-1" />
                    FAQ जोडा
                  </button>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg bg-gray-50"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-sm font-medium">
                          FAQ #{index + 1}
                        </h4>
                        {faqs.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeFAQ(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <MinusCircle className="w-5 h-5" />
                          </button>
                        )}
                      </div>

                      <div className="space-y-4">
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) =>
                            updateFAQ(index, "question", e.target.value)
                          }
                          placeholder="Question"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          required
                        />

                        <textarea
                          value={faq.answer}
                          onChange={(e) =>
                            updateFAQ(index, "answer", e.target.value)
                          }
                          placeholder="Answer"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          rows={3}
                          required
                        />

                        <input
                          type="url"
                          value={
                            faq.videoId
                              ? `https://youtube.com/watch?v=${faq.videoId}`
                              : ""
                          }
                          onChange={(e) =>
                            updateFAQ(index, "videoId", e.target.value)
                          }
                          placeholder="YouTube Video URL"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <Save className="w-5 h-5" />
                <span>
                  {isSubmitting
                    ? "साठवले जात आहे..."
                    : editingTreatment
                    ? "उपचार अद्यतनित करा"
                    : "नवीन उपचार जोडा"}
                </span>
              </button>
            </form>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {treatment.description}
                  </p>
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => handleEdit(treatment)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(treatment.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
