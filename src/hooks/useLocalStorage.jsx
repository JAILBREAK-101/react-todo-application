import { useState } from "react";

// Custom Hook for storing Todo on our local storage
const useLocalStorage = () => {
  const [storedItem, setStoredItem] = useState();

  const handleStoreItem = (item) => {
    // if (item === undefined) return; /* If no value in input box */
    setStoredItem(...item);
    localStorage.setItem("todoItems", JSON.stringify(item));
  };

  const retrieveStoredItem = () => {
    // localStorage.getItem("newTodo");
    localStorage.getItem(JSON.parse("todoItems"));
    // don't let todos backtrack
  };

  return [handleStoreItem, retrieveStoredItem];
};

export default useLocalStorage;
