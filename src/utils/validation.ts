// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (UK format)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+44|0)[1-9]\d{1,4}\s?\d{3,4}\s?\d{3,4}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Required field validation
export const isRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

// Date validation
export const isValidDate = (date: string): boolean => {
  const selectedDate = new Date(date);
  const today = new Date();
  return selectedDate < today;
};

// Student registration validation
export const validateStudentRegistration = (data: any) => {
  const errors: Record<string, string> = {};

  // Student details validation
  if (!isRequired(data.childName)) {
    errors.childName = 'Student name is required';
  }

  if (!data.dateOfBirth) {
    errors.dateOfBirth = 'Date of birth is required';
  } else if (!isValidDate(data.dateOfBirth)) {
    errors.dateOfBirth = 'Date of birth must be in the past';
  }

  if (!isRequired(data.yearGroup)) {
    errors.yearGroup = 'School year is required';
  }

  // Parent details validation
  if (!isRequired(data.parentName)) {
    errors.parentName = 'Parent name is required';
  }

  if (!isRequired(data.relation)) {
    errors.relation = 'Relation is required';
  }

  if (!isRequired(data.mobile)) {
    errors.mobile = 'Mobile number is required';
  } else if (!isValidPhone(data.mobile)) {
    errors.mobile = 'Please enter a valid UK phone number';
  }

  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // At least one subject must be selected
  const hasSubject = Object.values(data.subjects).some((subject: any) => subject === true);
  if (!hasSubject) {
    errors.subjects = 'Please select at least one subject';
  }

  // At least one day must be selected
  const hasDay = Object.values(data.lessonDays).some((day: any) => day === true);
  if (!hasDay) {
    errors.lessonDays = 'Please select at least one lesson day';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Contact form validation
export const validateContactForm = (data: any) => {
  const errors: Record<string, string> = {};

  if (!isRequired(data.name)) {
    errors.name = 'Name is required';
  }

  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!isRequired(data.subject)) {
    errors.subject = 'Subject is required';
  }

  if (!isRequired(data.message)) {
    errors.message = 'Message is required';
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}; 