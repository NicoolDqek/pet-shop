import {
  createContext,
  useState,
} from 'react';

// Crear un contexto para la lista de deseos
export const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [wish, setList] = useState([]);
  const [listItems, setListItems] = useState([]);

  // Función para agregar productos a la lista de deseos
  const addToList = (product) => {
    setList((prevList) => [...prevList, product]);
  };

  // Función para eliminar un producto de la lista de deseos
  const removeFromList = (productId) => {
    setList((prevList) => prevList.filter(item => item.id !== productId));
  };

  // Función para limpiar la lista de deseos
  const clearList = () => {
    setList([]);
  };

  // Función para actualizar la cantidad de un producto en la lista de deseos
  const updateListItem = (id, newQuantity) => {
    setListItems((prevList) =>
      prevList.map(item =>
        item.id === id
          ? { ...item, cantidad: newQuantity }
          : item
      )
    );
  };

  return (
    <WishContext.Provider value={{ wish, addToList, removeFromList, clearList, updateListItem }}>
      {children}
    </WishContext.Provider>
  );
};
