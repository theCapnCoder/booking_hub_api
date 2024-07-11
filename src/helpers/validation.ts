export const validateFullName = (value: string): string | null => {
  if (!value) {
    return "Full name is required";
  }
  return null;
};

export const validateEmail = (value: string): string | null => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) {
    return "Email is required";
  }
  if (!emailPattern.test(value)) {
    return "Invalid email address";
  }
  return null;
};

export const validatePassword = (value: string): string | null => {
  if (!value) {
    return "Password is required";
  }
  if (value.length < 3 || value.length > 20) {
    return "Password must be between 3 and 20 characters long";
  }
  return null;
};

export const validateDate = (value: string): string | null => {
  const today = new Date();
  const selectedDate = new Date(value);
  if (!value) {
    return "Date is required";
  }
  if (selectedDate < today) {
    return "Date should be not earlier than tomorrow";
  }
  return null;
};

export const validateGuests = (value: number): string | null => {
  if (value < 1 || value > 10) {
    return "Number of guests should be from 1 to 10 inclusive";
  }
  return null;
};
