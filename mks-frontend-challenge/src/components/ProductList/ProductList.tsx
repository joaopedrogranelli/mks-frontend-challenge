import { useEffect, useState, useContext } from "react";
import { productProps } from "../../interface/interface";
import { Card } from "../ProductList/Cards";
import { Modal } from "../Modal/Modal";
import { CartContext } from "../../Contexts/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState<productProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProps();
  }, []);

  const fetchProps = async () => {
    try {
      const response = await fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC",
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("===> - data:", data);
      setProducts(data.products);
    } catch (e) {
      console.error("Erro:", e);
    }
  };

  const handleAddToModal = (product: productProps) => {
    addToCart(product);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full h-[calc(100vh-101px)] flex justify-center items-center">
      <div className="max-w-[970px] flex flex-wrap gap-custom">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            onAddToModal={handleAddToModal}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ProductList;
