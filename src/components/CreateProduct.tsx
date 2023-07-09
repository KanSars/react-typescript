import React, { useState } from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";

const newProductData: IProduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10,
  }
}

interface CreateProductProps {
  onCreate: () => void
}

const postFetch = (newProductData: IProduct) => {
  return fetch('https://fakestoreapi.com/products', {
    method: "POST",
    body: JSON.stringify(
      newProductData
    )
  })
    .then(res => res.json())
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState<string>('');
  const [validationError, setValidError] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setValidError('');

    if (value.trim().length === 0) {
      setValidError('Please enter valid title...');
      return;
    }

    const response = await postFetch(newProductData);
    if (response) {
      onCreate();
    }
    
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        onChange={changeHandler}
        value={value}
      />

      {validationError && <ErrorMessage error={validationError}/>}

      <button className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>

    </form>
  )
}

export {
  CreateProduct,
}