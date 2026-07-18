export const validateContactForm = (formData) => {
  const errors = {};

  // Name
  if (!formData.name.trim()) {
    errors.name = "Name is required.";
  } else if (formData.name.length < 3) {
    errors.name = "Name must be at least 3 characters.";
  }

  // Email
  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  // Subject
  if (!formData.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  // Message
  if (!formData.message.trim()) {
    errors.message = "Message cannot be empty.";
  } else if (formData.message.length < 20) {
    errors.message =
      "Message should contain at least 20 characters.";
  }

  return errors;
};