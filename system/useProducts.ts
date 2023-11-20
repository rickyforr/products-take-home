import { useEffect, useState } from "react";
import { Product } from "./types";

/**
 * This hook is used to fetch products from the API and also
 * handles the state of the request.
 * Add it to a component that requires access to the products.
 * @returns {Array} products - The products returned from the API
 * @returns {Object} requestState - The state of the request
 * @returns {Function} onGetProducts - The function to call to get the products
 */
export const useProducts = (): {
  products: Product[];
  requestState: {
    pending: boolean;
    success: boolean;
    error: boolean;
  };
  onGetProducts: (searchParam?: string) => Promise<void>;
}=> {
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

  /**
   * Calls the API to fetch products and sets the state of the request.
   * @param searchParam - The search parameter to use when fetching products
   */
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

  /**
   * Fetches products on component mount.
   */
  useEffect(() => {
    handleGetProducts();
  }, []);

  return {
    onGetProducts: handleGetProducts,
    products,
    requestState,
  };
};
