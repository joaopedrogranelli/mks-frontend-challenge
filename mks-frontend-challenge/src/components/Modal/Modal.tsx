import closeIcon from "../../assets/close.svg";
import { ModalCard } from "./ModalCard";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { selectedProducts, removeFromCart } = useContext(CartContext);

  const handleRemoveProduct = (index: number) => {
    removeFromCart(index);
  };

  const totalPrice = selectedProducts.reduce(
    (total, product) => total + parseFloat(product.price),
    0
  );

  return (
    <div
      className={`fixed inset-0 overflow-auto flex items-start justify-end ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col rounded shadow-md w-[490px] h-full bg-blue">
        <div className="flex items-center justify-between ml-[42px] mr-[22px] mt-[36px]">
          <h1 className="font-bold text-3xl text-white w-[180px]">
            Carrinho de compras
          </h1>
          <img
            className="cursor-pointer"
            onClick={onClose}
            src={closeIcon}
            alt="Ícone de fechar"
          />
        </div>

        <div className="overflow-y-auto h-[550px] mt-[50px] ml-[47px] mr-[60px] flex flex-col gap-5 rounded-lg scrollbar-thin scrollbar-thumb-blue scrollbar-track-blue">
          {selectedProducts.map((product, index) => (
            <ModalCard
              onRemove={() => handleRemoveProduct(index)}
              key={index}
              product={product}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto ml-[47px] mr-[60px] mb-9">
          <h1 className="font-bold text-3xl text-white">Total:</h1>
          <span className="font-bold text-3xl text-white">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <button className="w-full h-[97px] text-center bg-black text-white">
          <span className="font-bold text-3xl">Finalizar compra</span>
        </button>
      </div>
    </div>
  );
};
