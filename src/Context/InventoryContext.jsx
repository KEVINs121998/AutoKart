import { createContext, useContext, useEffect, useState } from "react";

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
const [inventory, setInventory] = useState([]);

  // Save inventory whenever it changes
  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, [inventory]);

  // Add car
  const addToInventory = (car) => {
    setInventory((prev) => {
      const alreadyExists = prev.some((item) => item.id === car.id);

      if (alreadyExists) {
        alert("Car is already in your inventory");
        return prev;
      }

      return [...prev, car];
    });
  };

  // Remove car
  const removeFromInventory = (id) => {
    setInventory((prev) =>
      prev.filter((car) => car.id !== id)
    );
  };

  return (
    <InventoryContext.Provider
      value={{
 inventory,
    setInventory,
    addToInventory,
    removeFromInventory,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  return useContext(InventoryContext);
};