import shopIcon from "../../assets/shop.svg";
import { productProps } from "../../interface/interface";

interface CardProps {
  product: productProps;
  onAddToModal: (product: productProps) => void;
}

export function Card({ product, onAddToModal }: CardProps) {
  const handleAddToCart = () => {
    onAddToModal(product);
  };

  const limitedDescription =
    product.description.length > 60
      ? `${product.description.substring(0, 60)}...`
      : product.description;
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="flex flex-col items-center justify-center w-[225px] shadow-lg shimmer">
        <img
          className="w-[111px] h-[138px] object-contain"
          src={product.photo}
          alt={product.name}
        />

        <div className="flex h-[38px] w-full px-3 flex-row items-center justify-between gap-1">
          <h2 className="font-normal text-base leading-4">{product.name}</h2>

          <div className="flex flex-row items-center justify-center">
            <span className="px-1.5 py-1 bg-darkGray text-white font-bold text-base rounded-md">
              {"R$" + product.price}
            </span>
          </div>
        </div>
        <p className="font-light text-xs w-48 h-6 mb-8 mt-2 mr-2.5 text-lightGray">
          {limitedDescription}
        </p>
        <button
          className="w-full h-[31.91px] bg-blue rounded-b-md flex flex-row items-center justify-center gap-3.5"
          onClick={handleAddToCart}
        >
          <img src={shopIcon} alt="Ícone de compra" />
          <span className="text-white font-bold text-sm">Comprar</span>
        </button>
      </div>
    </div>
  );
}
