import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, ChevronRight, User, Calendar, BookOpen, Users, Phone, Mail, Clock, AlertCircle } from 'lucide-react';
import { submitStudentRegistration } from '../firebase/services';
import { validateStudentRegistration } from '../utils/validation';
import FormDialog from '../components/FormDialog';

interface RegistrationState {
  subject: string;
  stage: string;
}

const Registration = () => {
  const location = useLocation();
  const { subject, stage } = (location.state as RegistrationState) || {};

  const [activeSection, setActiveSection] = useState('student');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showDialog, setShowDialog] = useState(false);
  const [dialogType, setDialogType] = useState<'success' | 'error'>('success');
  const [dialogMessage, setDialogMessage] = useState('');
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

  // Real-time validation functions
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'childName':
      case 'parentName':
      case 'relation':
        // Text only, no numbers
        if (/\d/.test(value)) {
          return 'This field should only contain letters and spaces';
        }
        if (value.length < 2) {
          return 'This field must be at least 2 characters long';
        }
        break;
      
      case 'mobile':
        // Numbers only
        if (value && !/^\d+$/.test(value)) {
          return 'Please enter numbers only';
        }
        if (value && value.length < 10) {
          return 'Phone number must be at least 10 digits';
        }
        break;
      
      case 'email':
        if (value && !value.includes('@')) {
          return 'Email must contain @ symbol';
        }
        if (value && !value.includes('.')) {
          return 'Email must contain a domain (e.g., .com)';
        }
        break;
      
      case 'yearGroup':
        if (value && !/^\d+$/.test(value)) {
          return 'Year group should be a number';
        }
        break;
    }
    return '';
  };

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

      // Real-time validation
      const fieldError = validateField(name, value);
      if (fieldError) {
        setErrors(prev => ({ ...prev, [name]: fieldError }));
      } else {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateStudentRegistration(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setDialogType('error');
      setDialogMessage('Please fill in all required fields correctly.');
      setShowDialog(true);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const result = await submitStudentRegistration({
        selectedCourse: subject,
        selectedStage: stage,
        ...formData
      });

      if (result.success) {
        setDialogType('success');
        setDialogMessage('Registration submitted successfully! Our team will contact you shortly.');
        setShowDialog(true);
        // Reset form after successful submission
        setFormData({
          childName: '',
          dateOfBirth: '',
          yearGroup: '',
          subjects: { maths: false, english: false, science: false },
          parentName: '',
          relation: '',
          mobile: '',
          email: '',
          lessonDays: {
            monday: false, tuesday: false, wednesday: false,
            thursday: false, saturday: false, sunday: false
          }
        });
      } else {
        setDialogType('error');
        setDialogMessage('Failed to submit registration. Please try again.');
        setShowDialog(true);
      }
    } catch (error) {
      setDialogType('error');
      setDialogMessage('An error occurred. Please try again.');
      setShowDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    // Don't navigate anywhere, just close dialog
  };

  const sections = [
    { id: 'student', title: 'Student Details', icon: User },
    { id: 'parent', title: 'Parent Details', icon: Users },
    { id: 'schedule', title: 'Schedule', icon: Clock }
  ];

  if (!subject || !stage) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md">
          <AlertCircle className="h-16 w-16 text-[#7c1411] mx-auto mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Invalid Registration</h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base mb-6">Please select a subject and stage first from our courses page.</p>
          <button
            onClick={() => window.location.href = '/courses'}
            className="bg-[#1434cb] text-white px-6 py-3 rounded-lg hover:bg-[#0f2ca1] transition-all duration-300 transform hover:scale-105 text-sm sm:text-base font-semibold"
          >
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
    <div
      className="min-h-screen py-8 sm:py-12 relative"
      style={{
        backgroundImage: "url('https://www.shutterstock.com/image-photo/students-listening-female-teacher-classroom-260nw-778983088.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          filter: 'blur(4px)',
        }}
      ></div>

      {/* Form Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Progress Header */}
          <div className="relative bg-gradient-to-r from-[#1434cb] via-[#019fe3] to-[#1434cb] text-white py-6 sm:py-8 px-4 sm:px-8 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">Student Registration</h2>
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full mb-3 sm:mb-4"></div>
              <p className="mt-2 text-white/90 text-sm sm:text-base">Selected: {subject} - {stage}</p>
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center space-x-2 py-2 px-3 sm:px-4 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                      activeSection === section.id
                        ? 'bg-white text-[#1434cb]'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <section.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">{section.title}</span>
                    <span className="sm:hidden">{section.title.split(' ')[0]}</span>
                    {index < sections.length - 1 && (
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-8">
            {/* Student Details Section */}
            <div className={`space-y-4 sm:space-y-6 transition-all duration-300 ${
              activeSection === 'student' ? 'block' : 'hidden'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="form-group">
                  <label className="form-label">
                    <User className="h-4 w-4 sm:h-5 sm:w-5 text-[#1434cb]" />
                    <span className="font-bold text-base sm:text-lg">Student Name</span>
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                      className={`form-input h-12 sm:h-14 bg-gray-100 border-2 rounded-lg focus:ring-2 focus:ring-[#1434cb]/50 focus:border-[#1434cb] transition-all duration-300 text-sm sm:text-base ${
                        errors.childName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter student's full name"
                    required
                  />
                    {errors.childName && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {errors.childName}
                      </p>
                    )}
                </div>
                <div className="form-group">
                  <label className="form-label">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-[#1434cb]" />
                    <span className="font-bold text-base sm:text-lg">Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                      className={`form-input h-12 sm:h-14 bg-gray-100 border-2 rounded-lg focus:ring-2 focus:ring-[#1434cb]/50 focus:border-[#1434cb] transition-all duration-300 text-sm sm:text-base ${
                        errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                      }`}
                    required
                  />
                    {errors.dateOfBirth && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {errors.dateOfBirth}
                      </p>
                    )}
                  </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-[#1434cb]" />
                  <span className="font-bold text-base sm:text-lg">School Year</span>
                </label>
                <input
                  type="text"
                  name="yearGroup"
                  value={formData.yearGroup}
                  onChange={handleChange}
                    className={`form-input h-12 sm:h-14 bg-gray-100 border-2 rounded-lg focus:ring-2 focus:ring-[#1434cb]/50 focus:border-[#1434cb] transition-all duration-300 text-sm sm:text-base ${
                      errors.yearGroup ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., 5, 6, 7"
                  required
                />
                  {errors.yearGroup && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                      <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      {errors.yearGroup}
                    </p>
                  )}
              </div>

              <div className="space-y-3 sm:space-y-4">
                <label className="form-label">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-[#1434cb]" />
                  <span className="font-bold text-base sm:text-lg">Subjects</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {Object.entries(formData.subjects).map(([subject, checked]) => (
                      <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name={`subject-${subject}`}
                          checked={checked}
                        onChange={handleChange}
                          className="w-4 h-4 text-[#1434cb] border-gray-300 rounded focus:ring-[#1434cb]"
                      />
                      <span className="capitalize text-sm sm:text-base">{subject}</span>
                    </label>
                  ))}
                  </div>
                  {errors.subjects && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                      <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      {errors.subjects}
                    </p>
                  )}
              </div>
            </div>

            {/* Parent Details Section */}
            <div className={`space-y-4 sm:space-y-6 transition-all duration-300 ${
              activeSection === 'parent' ? 'block' : 'hidden'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="form-group">
                  <label className="form-label">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#1434cb]" />
                    <span className="font-bold text-base sm:text-lg">Parent/Guardian Name</span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                      className={`form-input h-12 sm:h-14 bg-gray-100 border-2 rounded-lg focus:ring-2 focus:ring-[#1434cb]/50 focus:border-[#1434cb] transition-all duration-300 text-sm sm:text-base ${
                        errors.parentName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter parent's full name"
                    required
                  />
                    {errors.parentName && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {errors.parentName}
                      </p>
                    )}
                </div>
                <div className="form-group">
                  <label className="form-label">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-[#1434cb]" />
                    <span className="font-bold text-base sm:text-lg">Relation</span>
                  </label>
                  <input
                    type="text"
                    name="relation"
                    value={formData.relation}
                    onChange={handleChange}
                      className={`form-input h-12 sm:h-14 bg-gray-100 border-2 rounded-lg focus:ring-2 focus:ring-[#1434cb]/50 focus:border-[#1434cb] transition-all duration-300 text-sm sm:text-base ${
                        errors.relation ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="e.g., Father, Mother, Guardian"
                    required
                  />
                    {errors.relation && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {errors.relation}
                      </p>
                    )}
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="form-group">
                  <label className="form-label">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#1434cb]" />
                    <span className="font-bold text-base sm:text-lg">Mobile Number</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                      className={`form-input h-12 sm:h-14 bg-gray-100 border-2 rounded-lg focus:ring-2 focus:ring-[#1434cb]/50 focus:border-[#1434cb] transition-all duration-300 text-sm sm:text-base ${
                        errors.mobile ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter mobile number"
                    required
                  />
                    {errors.mobile && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {errors.mobile}
                      </p>
                    )}
                </div>
                <div className="form-group">
                  <label className="form-label">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#1434cb]" />
                      <span className="font-bold text-base sm:text-lg">Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                      className={`form-input h-12 sm:h-14 bg-gray-100 border-2 rounded-lg focus:ring-2 focus:ring-[#1434cb]/50 focus:border-[#1434cb] transition-all duration-300 text-sm sm:text-base ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter email address"
                    required
                  />
                    {errors.email && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div className={`space-y-4 sm:space-y-6 transition-all duration-300 ${
              activeSection === 'schedule' ? 'block' : 'hidden'
            }`}>
                <div className="space-y-3 sm:space-y-4">
                  <label className="form-label">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[#1434cb]" />
                    <span className="font-bold text-base sm:text-lg">Preferred Lesson Days</span>
                      </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {Object.entries(formData.lessonDays).map(([day, checked]) => (
                      <label key={day} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name={`day-${day}`}
                          checked={checked}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#1434cb] border-gray-300 rounded focus:ring-[#1434cb]"
                        />
                        <span className="capitalize text-sm sm:text-base">{day}</span>
                      </label>
                    ))}
                  </div>
                  {errors.lessonDays && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center">
                      <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      {errors.lessonDays}
                    </p>
                  )}
              </div>
            </div>

            {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-6 sm:mt-8">
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex > 0) {
                    setActiveSection(sections[currentIndex - 1].id);
                    }
                  }}
                  className={`px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                    activeSection === 'student'
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-500 text-white hover:bg-gray-600'
                  }`}
                  disabled={activeSection === 'student'}
                >
                  Previous
                </button>

                {activeSection === 'schedule' ? (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 sm:px-8 py-3 bg-[#1434cb] text-white rounded-lg hover:bg-[#0f2ca1] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span>Submit Registration</span>
                      </>
                    )}
                  </button>
                ) : (
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                      if (currentIndex < sections.length - 1) {
                    setActiveSection(sections[currentIndex + 1].id);
                      }
                    }}
                    className="px-4 sm:px-6 py-3 bg-[#1434cb] text-white rounded-lg hover:bg-[#0f2ca1] transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>

      {/* Dialog */}
      <FormDialog
        isOpen={showDialog}
        onClose={handleDialogClose}
        type={dialogType}
        title={dialogType === 'success' ? 'Registration Successful!' : 'Registration Failed'}
        message={dialogMessage}
      />
    </>
  );
};

export default Registration;