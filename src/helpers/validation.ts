interface ValidationResult {
  error: boolean;
  message: string;
}

export const validateFullName = (value: string): ValidationResult => {
  if (!value) {
    return { error: true, message: "Full name is required" };
  }
  return { error: false, message: "" };
};

export const validateEmail = (value: string): ValidationResult => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) {
    return { error: true, message: "Email is required" };
  }
  if (!emailPattern.test(value)) {
    return { error: true, message: "Invalid email address" };
  }
  return { error: false, message: "" };
};

export const validatePassword = (value: string): ValidationResult => {
  if (!value) {
    return { error: true, message: "Password is required" };
  }
  if (value.length < 3 || value.length > 20) {
    return {
      error: true,
      message: "Password must be between 3 and 20 characters long",
    };
  }
  return { error: false, message: "" };
};

export const validateDate = (value: string): ValidationResult => {
  const today = new Date();
  const selectedDate = new Date(value);
  if (!value) {
    return { error: true, message: "Date is required" };
  }
  if (selectedDate < today) {
    return { error: true, message: "Date should be not earlier than tomorrow" };
  }
  return { error: false, message: "" };
};

export const validateGuests = (value: number): ValidationResult => {
  if (value < 1 || value > 10) {
    return {
      error: true,
      message: "Guests must be between 1 and 10",
    };
  }
  return { error: false, message: "" };
};
