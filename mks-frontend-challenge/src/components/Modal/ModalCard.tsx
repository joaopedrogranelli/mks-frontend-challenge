import { useState } from "react";
import { productProps } from "../../interface/interface";
import closeIcon from "../../assets/close.svg";

interface ModalCardProps {
  product: productProps;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void; // Adicionando a propriedade onUpdateQuantity
}

export function ModalCard({
  product,
  onRemove,
  onUpdateQuantity,
}: ModalCardProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    onUpdateQuantity(newQuantity); // Atualizar a quantidade quando ela mudar
  };

  const productPrice = parseFloat(product.price);

  const totalPrice = productPrice * quantity;

  return (
    <div className="relative flex flex-row items-center justify-around bg-white rounded-lg h-[101px] mr-1.5">
      <img
        className="w-[46px] h-[57px]"
        src={product.photo}
        alt={product.name}
      />
      <span className="w-[113px] text-sm text-lightGray">{product.name}</span>
      <div className="flex flex-col">
        <span className="text-lightGray text-[10px]">Qtd:</span>
        <input
          className="w-[50px] border border-borderColor rounded text-center"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <span className="font-bold text-black text-sm">
        {"R$" + totalPrice.toFixed(2)}
      </span>
      <img
        className="absolute -top-1 right-[-5px] h-[18px] w-[18px] cursor-pointer"
        src={closeIcon}
        alt=""
        onClick={onRemove}
      />
    </div>
  );
}
