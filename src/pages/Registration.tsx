import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Check, ChevronRight, User, Calendar, BookOpen, Users, Phone, Mail, Clock } from 'lucide-react';

interface RegistrationState {
  subject: string;
  stage: string;
}

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subject, stage } = (location.state as RegistrationState) || {};

  const [activeSection, setActiveSection] = useState('student');
  const [formData, setFormData] = useState({
    childName: '',
    dateOfBirth: '',
    yearGroup: '',
    subjects: {
      maths: false,
      english: false,
      science: false
    },
    parentName: '',
    relation: '',
    mobile: '',
    email: '',
    lessonDays: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      saturday: false,
      sunday: false
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name.startsWith('subject-')) {
        const subject = name.replace('subject-', '');
        setFormData(prev => ({
          ...prev,
          subjects: {
            ...prev.subjects,
            [subject]: checked
          }
        }));
      } else if (name.startsWith('day-')) {
        const day = name.replace('day-', '');
        setFormData(prev => ({
          ...prev,
          lessonDays: {
            ...prev.lessonDays,
            [day]: checked
          }
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    navigate('/thank-you');
  };

  const sections = [
    { id: 'student', title: 'Student Details', icon: User },
    { id: 'parent', title: 'Parent Details', icon: Users },
    { id: 'schedule', title: 'Schedule', icon: Clock }
  ];

  if (!subject || !stage) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Invalid Registration</h2>
          <p className="mt-2 text-gray-600">Please select a subject and stage first.</p>
          <button
            onClick={() => navigate('/courses')}
            className="mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Progress Header */}
          <div className="bg-primary text-white py-6 px-8">
            <h2 className="text-3xl font-bold">Student Registration</h2>
            <p className="mt-2 text-primary-100">Selected: {subject} - {stage}</p>
            <div className="mt-6 flex justify-between">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-white text-primary'
                      : 'text-white hover:bg-primary-dark'
                  }`}
                >
                  <section.icon className="h-5 w-5" />
                  <span>{section.title}</span>
                  {index < sections.length - 1 && (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {/* Student Details Section */}
            <div className={`space-y-6 transition-all duration-300 ${
              activeSection === 'student' ? 'block' : 'hidden'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">
                    <User className="h-5 w-5" />
                    <span className="font-bold text-lg">Name of Child</span>
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    className="form-input h-14 bg-gray-100"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    <Calendar className="h-5 w-5" />
                    <span className="font-bold text-lg">Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="form-input h-14 bg-gray-100"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <BookOpen className="h-5 w-5" />
                  <span className="font-bold text-lg">Year Group</span>
                </label>
                <input
                  type="text"
                  name="yearGroup"
                  value={formData.yearGroup}
                  onChange={handleChange}
                  className="form-input h-14 bg-gray-100"
                  required
                />
              </div>

              <div className="space-y-4">
                <label className="form-label">
                  <BookOpen className="h-5 w-5" />
                  <span className="font-bold text-lg">Subjects</span>
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['maths', 'english', 'science'].map((subject) => (
                    <label
                      key={subject}
                      className={`flex items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                        formData.subjects[subject as keyof typeof formData.subjects]
                          ? 'border-primary bg-primary/10'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        name={`subject-${subject}`}
                        checked={formData.subjects[subject as keyof typeof formData.subjects]}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="capitalize">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Parent Details Section */}
            <div className={`space-y-6 transition-all duration-300 ${
              activeSection === 'parent' ? 'block' : 'hidden'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">
                    <Users className="h-5 w-5" />
                    <span className="font-bold text-lg">Parent/Guardian Name</span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="form-input h-14 bg-gray-100"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    <Users className="h-5 w-5" />
                    <span className="font-bold text-lg">Relation</span>
                  </label>
                  <input
                    type="text"
                    name="relation"
                    value={formData.relation}
                    onChange={handleChange}
                    className="form-input h-14 bg-gray-100"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">
                    <Phone className="h-5 w-5" />
                    <span className="font-bold text-lg">Mobile Number</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="form-input h-14 bg-gray-100"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    <Mail className="h-5 w-5" />
                    <span className="font-bold text-lg">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input h-14 bg-gray-100"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div className={`space-y-6 transition-all duration-300 ${
              activeSection === 'schedule' ? 'block' : 'hidden'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Weekdays</h4>
                  <div className="space-y-3">
                    {['monday', 'tuesday', 'wednesday', 'thursday'].map((day) => (
                      <label
                        key={day}
                        className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                          formData.lessonDays[day as keyof typeof formData.lessonDays]
                            ? 'border-primary bg-primary/10'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name={`day-${day}`}
                          checked={formData.lessonDays[day as keyof typeof formData.lessonDays]}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <Clock className={`h-5 w-5 mr-3 ${
                          formData.lessonDays[day as keyof typeof formData.lessonDays]
                            ? 'text-primary'
                            : 'text-gray-400'
                        }`} />
                        <span className="capitalize">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Weekends</h4>
                  <div className="space-y-3">
                    {['saturday', 'sunday'].map((day) => (
                      <label
                        key={day}
                        className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                          formData.lessonDays[day as keyof typeof formData.lessonDays]
                            ? 'border-primary bg-primary/10'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name={`day-${day}`}
                          checked={formData.lessonDays[day as keyof typeof formData.lessonDays]}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <Clock className={`h-5 w-5 mr-3 ${
                          formData.lessonDays[day as keyof typeof formData.lessonDays]
                            ? 'text-primary'
                            : 'text-gray-400'
                        }`} />
                        <span className="capitalize">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {activeSection !== 'student' && (
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    setActiveSection(sections[currentIndex - 1].id);
                  }}
                  className="px-6 py-3 text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Previous
                </button>
              )}
              {activeSection !== 'schedule' ? (
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    setActiveSection(sections[currentIndex + 1].id);
                  }}
                  className="ml-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
                >
                  Submit Registration
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;