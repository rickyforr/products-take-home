import { Header } from "@/components/Header/Header";
import { ProductsTable } from "@/components/ProductsTable/ProductsTable";
import { useProducts } from "@/system/useProducts";
import { Box } from "@chakra-ui/react";

/**
 * Renders the Home page including the header and products table.
 */
export default function Home() {
  const { products, requestState, onGetProducts } = useProducts();
  return (
    <Box
      display="flex"
      flexDir="column"
      width="100%"
      padding={{ base: "10px", md: "50px" }}
    >
      <Header onGetProducts={onGetProducts} />
      <ProductsTable products={products} requestState={requestState} />
    </Box>
  );
}
