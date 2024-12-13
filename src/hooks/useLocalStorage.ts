import { useState } from "react";

// Custom hook to manage state with local storage
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  // Initialize state with the value from local storage (if available) or the initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get the item from local storage
      const item = localStorage.getItem(key);
      // Parse and return the item if it exists, otherwise return the initial value
      return item ? JSON.parse(item) : initialValue;
      // Handle any errors and return the initial value
    } catch (error) {
      return initialValue;
    }
  });
  // Function to update the state and local storage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Determine the value to store (handle function values)
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Update the state
      setStoredValue(valueToStore);
      // Update local storage
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      return error;
    }
  };

  return [storedValue, setValue] as const;
};
