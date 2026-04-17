import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

// Types for form data
export interface StudentRegistrationData {
  // Course selection
  selectedCourse: string;
  selectedStage: string;
  
  // Student details
  childName: string;
  dateOfBirth: string;
  yearGroup: string;
  subjects: {
    maths: boolean;
    english: boolean;
    science: boolean;
  };
  
  // Parent details
  parentName: string;
  relation: string;
  mobile: string;
  email: string;
  
  // Schedule
  lessonDays: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  
  // Timestamp
  submittedAt: any;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: any;
}

// Submit student registration
export const submitStudentRegistration = async (data: Omit<StudentRegistrationData, 'submittedAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'student_registrations'), {
      ...data,
      submittedAt: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting student registration:', error);
    return { success: false, error };
  }
};

// Submit contact form
export const submitContactForm = async (data: Omit<ContactFormData, 'submittedAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'contact_forms'), {
      ...data,
      submittedAt: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
}; 