import { productProps } from "../../interface/interface";
import closeIcon from "../../assets/close.svg";

interface ModalCardProps {
  product: productProps;
  onRemove: () => void;
}

export function ModalCard({ product, onRemove }: ModalCardProps) {
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
        <input className="w-[50px]" type="text" />
      </div>
      <span className="font-bold text-black text-sm">
        {"R$" + product.price}
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
