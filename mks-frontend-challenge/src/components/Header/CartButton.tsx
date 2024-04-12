import React, { useContext } from "react";
import cartIcon from "../../assets/cart.svg";
import { CartContext } from "../../Contexts/CartContext";

interface CartButtonProps {
  onClick: () => void;
}

export const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  const { productCount } = useContext(CartContext);

  return (
    <button
      className="bg-white flex items-center justify-center gap-4 w-[90px] h-[45px] rounded-lg mr-[88px]"
      onClick={onClick}
    >
      <img src={cartIcon} alt="Ícone de carrinho" />
      <span className="font-bold text-lg">{productCount}</span>
    </button>
  );
};
