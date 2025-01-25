export const saveState = (key, state) => {
    try {
      // Check if localStorage is available (client-side only)
      if (typeof window !== "undefined") {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
      }
    } catch (error) {
      console.error("Error saving state to localStorage:", error);
    }
  };
  
  export const loadState = (key) => {
    try {
      // Check if localStorage is available (client-side only)
      if (typeof window !== "undefined") {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
          return undefined;
        }
        return JSON.parse(serializedState);
      }
    } catch (error) {
      console.error("Error loading state from localStorage:", error);
      return undefined;
    }
  };
  
  export const clearState = (key) => {
    try {
      // Check if localStorage is available (client-side only)
      if (typeof window !== "undefined") {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.error("Error clearing state from localStorage:", error);
    }
  };