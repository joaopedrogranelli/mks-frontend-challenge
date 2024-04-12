import { useState } from "react";
import { CartButton } from "./CartButton";
import { Modal } from "../Modal/Modal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-[101px] bg-blue flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-3 my-7 ml-[65px]">
        <h1 className="text-[40px] text-white font-semibold">MKS</h1>
        <span className="text-white text-xl font-light">Sistemas</span>
      </div>
      <CartButton onClick={() => handleOpenModal()} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
