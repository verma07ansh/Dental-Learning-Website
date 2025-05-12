import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  videoId: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  mainVideoId: string;
  faqs: FAQ[];
}

export function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeVideoFAQ, setActiveVideoFAQ] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId) return;

      try {
        const courseDoc = await getDoc(doc(db, 'courses', courseId));
        if (courseDoc.exists()) {
          setCourse({
            id: courseDoc.id,
            ...courseDoc.data()
          } as Course);
        }
      } catch (error) {
        console.error('कोर्स मिळवताना त्रुटी:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">कोर्स लोड होत आहे...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">कोर्स सापडला नाही</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">{course.title}</h1>

        {/* मुख्य कोर्स व्हिडिओ */}
        <div className="mb-8">
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              className="w-full h-[500px] rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${course.mainVideoId}`}
              title={course.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* कोर्सचे वर्णन */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">या कोर्सविषयी</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {course.description}
            </p>
          </div>
        </div>

        {/* वारंवार विचारले जाणारे प्रश्न (FAQs) */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">वारंवार विचारले जाणारे प्रश्न</h2>
          <div className="space-y-4">
            {course.faqs.map((faq) => (
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
        </div>
      </div>
    </div>
  );
}
