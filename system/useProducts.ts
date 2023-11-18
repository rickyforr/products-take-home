import { useEffect, useState } from "react";
import { Product } from "./types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [requestState, setRequestState] = useState<{
    pending: boolean;
    success: boolean;
    error: boolean;
  }>({
    pending: false,
    success: false,
    error: false,
  });

  const handleGetProducts = async (searchParam?: string) => {
    setRequestState({ ...requestState, pending: true });
    try {
      const url = searchParam
        ? `/api/products?searchParam=${searchParam}`
        : "/api/products";
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setRequestState({ ...requestState, success: true });
    } catch (error) {
      setRequestState({ ...requestState, error: true });
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return {
    onGetProducts: handleGetProducts,
    products,
    requestState,
  };
};
