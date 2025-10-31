// components/common/Card.tsx
import React from "react";
import { CardProps } from "../../interfaces";
import Button from "./Button";

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  onClick,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition p-4">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
      )}
      <h3 className="text-lg font-semibold mt-3">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <div className="mt-3">
        <Button label="Details" onClick={onClick} variant="primary" />
      </div>
    </div>
  );
};

export default Card;
