import { Product } from "@/system/types";
import {
  Flex,
  Table,
  Text,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "../../styles/ProductsTable.module.css";
import { ProductModal } from "../ProductModal/ProductModal";
import { useState } from "react";
import {
  RESPONSIVE_PRODUCT_CELL,
  TABLE_COLUMN_TITLES,
  uiText,
} from "@/system/constants";

type Props = {
  products: Product[];
  requestState: { pending: boolean; error: boolean; success: boolean };
};

export const ProductsTable = ({ products, requestState }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleRowClick = (product: Product) => {
    setSelectedProduct(product);
    onOpen();
  };

  return (
    <Flex className={styles.productsTableContainer}>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
      <TableContainer w="100%" h="80vh" overflowY="auto">
        {requestState.pending && <Text>{uiText.loadingMessage}</Text>}
        {requestState.error && <Text>{uiText.productsErrorMessage}</Text>}
        {requestState.success && (
          <Table variant="unstyled" className={styles.productsTable}>
            <Thead>
              <Tr>
                {TABLE_COLUMN_TITLES.map((title) => (
                  <Th
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
                  <Text>{uiText.noProductsMessage}</Text>
                </Tr>
              )}
              {products.map((product) => (
                <Tr onClick={() => handleRowClick(product)}>
                  <Td display={RESPONSIVE_PRODUCT_CELL}>{product.id}</Td>
                  <Td display={RESPONSIVE_PRODUCT_CELL}></Td>
                  <Td display={RESPONSIVE_PRODUCT_CELL}>{product.quantity}</Td>
                  <Td>
                    <Text>{product.product}</Text>
                    <Flex>
                      <Text className={styles.secondaryText} marginRight={1}>
                        {product.serial}
                      </Text>
                      <Text
                        display={{
                          base: "table-cell",
                          md: "none",
                        }}
                        className={styles.secondaryText}
                      >
                        {uiText.quantityPrefix}{product.quantity}
                      </Text>
                    </Flex>
                  </Td>
                  <Td display={RESPONSIVE_PRODUCT_CELL}>${product.total}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </TableContainer>
    </Flex>
  );
};
