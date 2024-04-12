import { useState, useEffect, useContext } from "react";
import closeIcon from "../../assets/close.svg";
import { ModalCard } from "./ModalCard";
import { CartContext } from "../../Contexts/CartContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { selectedProducts, setSelectedProducts, removeFromCart } =
    useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleRemoveProduct = (index: number) => {
    removeFromCart(index);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts[index].quantity = quantity;
    setSelectedProducts(updatedProducts);
  };

  useEffect(() => {
    const totalPrice = selectedProducts.reduce(
      (total, product) =>
        total + parseFloat(product.price) * (product.quantity || 1),
      0
    );
    setTotalPrice(totalPrice);
  }, [selectedProducts]);

  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [onClose]);

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
              key={index}
              product={product}
              onRemove={() => handleRemoveProduct(index)}
              onUpdateQuantity={(quantity: number) =>
                handleUpdateQuantity(index, quantity)
              }
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
