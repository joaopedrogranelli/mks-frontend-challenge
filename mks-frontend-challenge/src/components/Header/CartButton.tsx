import { MouseEventHandler } from "react";
import cartIcon from "../../assets/cart.svg";

interface CartButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const CartButton = ({ onClick }: CartButtonProps) => {
  return (
    <button
      className="bg-white flex items-center justify-center gap-4 w-[90px] h-[45px] rounded-lg mr-[88px]"
      onClick={onClick}
    >
      <img className="font-bold" src={cartIcon} alt="" />
      <span className="font-bold text-lg">{0}</span>
    </button>
  );
};
