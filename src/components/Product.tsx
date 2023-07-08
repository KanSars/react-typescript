import { useState } from "react";
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
    const { title, image, price, description, rating } = product;
    const [details, setDetails] = useState(false);

    const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
    const btnClassName = `py-2 px-4 border ${btnBgClassName}`;

    const DetailsComponent = () => {
      if (details) {
        return (
          <div>
            <p>{description}</p>
            <p>Rate: <span style={{ fontWeight: 'bold'}}>{rating.rate}</span></p>
          </div>
        )
      } else {
        return null;
      }
    }

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={image} alt={title} className="w-1/6" />
            <p>{title}</p>
            <span className="font-bold">{ price }</span>
            <button className={btnClassName}
                    onClick={() => setDetails(prev => !prev)}>
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            <DetailsComponent />
        </div>
    )
}

export {
    Product,
}