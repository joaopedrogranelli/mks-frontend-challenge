import React, { ReactNode, createContext, useState } from "react";
import { productProps } from "../interface/interface";

interface CartContextValue {
  selectedProducts: productProps[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<productProps[]>>;
  productCount: number;
  addToCart: (product: productProps) => void;
  removeFromCart: (index: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextValue>({
  selectedProducts: [],
  setSelectedProducts: () => {}, // Definindo um valor inicial vazio
  productCount: 0,
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

  const productCount = selectedProducts.length;

  const value: CartContextValue = {
    selectedProducts,
    setSelectedProducts, // Definindo setSelectedProducts
    productCount,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
