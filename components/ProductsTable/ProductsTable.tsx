import { Product } from "@/system/types";
import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import styles from "../../styles/ProductsTable.module.css";
import { ProductModal } from "../ProductModal/ProductModal";
import { useState } from "react";
import {
  TABLE_COLUMN_TITLES,
  uiText,
} from "@/system/constants";
import { ProductsTableRow } from "./ProductsTableRow";

type Props = {
  products: Product[];
  requestState: { pending: boolean; error: boolean; success: boolean };
};

/**
 * Renders a table with product information.
 * @param props.products - The products to display.
 * @param props.requestState - The state of the request to get the products.
 */
export const ProductsTable = ({ products, requestState }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleRowClick = (product: Product) => {
    setSelectedProduct(product);
    onOpen();
  };

  return (
    <Flex className={styles.productsTableContainer} flexDir="column">
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
      <Flex className={styles.productsTableBoldText}>
        {uiText.productsTableTitle}
        <Text className={styles.secondaryText} ml={1}>
          {uiText.resultsAmountText(products.length, products.length)}
        </Text>
      </Flex>
      <TableContainer w="100%" h="100%" mt={1} overflowY="auto">
        {requestState.pending && <Text>{uiText.loadingMessage}</Text>}
        {requestState.error && <Text p={2}>{uiText.productsErrorMessage}</Text>}
        {requestState.success && (
          <Table className={styles.productsTable} variant="unstyled" >
            <Thead>
              <Tr>
                {TABLE_COLUMN_TITLES.map((title, index) => (
                  <Th
                    key={`products-table-title-${index}`}
                    display={{
                      base: title === "Product name" ? "table-cell" : "none",
                      md: "table-cell",
                    }}
                  >
                    {title}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {products.length === 0 && (
                <Tr>
                  <Text p={2}>{uiText.noProductsMessage}</Text>
                </Tr>
              )}
              {products.map((product, index) => (
                <ProductsTableRow
                  key={`products-${index}`}
                  product={product}
                  index={index}
                  onClick={handleRowClick}
                />
              ))}
            </Tbody>
          </Table>
        )}
      </TableContainer>
    </Flex>
  );
};
