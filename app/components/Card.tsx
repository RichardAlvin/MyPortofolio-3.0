import React from 'react';
import "./Card.css";
import { formatDate } from "@/app/utils/dateFormatter";
import Image from "next/image";

export type DataCard = {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  createdAt: string;
}

interface CardProps {
  data: DataCard;
  basePath: string;
}

const Card: React.FC<CardProps> = ({ data, basePath }) => {
  if (!data) return null;

  return (
    <a className="card-container" href={`/${basePath}/${data.slug}`}>
      <div className="card">
        <div className="card-image">
          <Image
              src={data.image}
              alt={data.title}
              width={340} 
              height={180}
              className="image"
            />
        </div>
        <div className="card-content">
          <h3>{data.title}</h3>
          <p><strong>{data.category || "Uncategorized"}</strong></p>
          <p>{formatDate(data.createdAt)}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;