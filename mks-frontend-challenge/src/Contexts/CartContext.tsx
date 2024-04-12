import React, { ReactNode, createContext, useState } from "react";
import { productProps } from "../interface/interface";

interface CartContextValue {
  selectedProducts: productProps[];
  addToCart: (product: productProps) => void;
  removeFromCart: (index: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextValue>({
  selectedProducts: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState<productProps[]>([]);

  const addToCart = (product: productProps) => {
    setSelectedProducts([...selectedProducts, product]);
  };
  const removeFromCart = (index: number) => {
    const updatedProducts = selectedProducts.filter((_, idx) => idx !== index);
    setSelectedProducts(updatedProducts);
  };

  const value: CartContextValue = {
    selectedProducts,
    addToCart,
    removeFromCart,
  };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};
