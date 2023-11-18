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
  Box,
} from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import { ProductModal } from "../ProductModal/ProductModal";
import { useState } from "react";

type Props = {
  products: Product[];
  requestState: { pending: boolean; error: boolean; success: boolean };
};

const tableColumnTitles = [
  "ID",
  "Status",
  "Quantity",
  "Product name",
  "Prices",
];

const responsiveProductCell = {
  base: "none",
  md: "table-cell",
};

export const ProductsTable = ({ products, requestState }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleRowClick = (product: Product) => {
    setSelectedProduct(product);
    onOpen();
  };

  return (
    <Flex
      style={{
        width: "100%",
        marginTop: "50px",
      }}
    >
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
      <TableContainer
        style={{ width: "100%", height: "80vh" }}
        overflowY="auto"
      >
        {requestState.pending && <Text>Loading...</Text>}
        {requestState.error && <Text>Error loading products</Text>}
        {requestState.success && (
          <Table variant="unstyled" className={styles.productsTable}>
            <Thead>
              <Tr>
                {tableColumnTitles.map((title) => (
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
                  <Text>No products found</Text>
                </Tr>
              )}
              {products.map((product) => (
                <Tr onClick={() => handleRowClick(product)}>
                  <Td display={responsiveProductCell}>{product.id}</Td>
                  <Td display={responsiveProductCell}></Td>
                  <Td display={responsiveProductCell}>{product.quantity}</Td>
                  <Td>
                    <Text>{product.product}</Text>
                    <Flex>
                      <Text className={styles.secondaryText} mr="5px">
                        {product.serial}
                      </Text>
                      <Text
                        display={{
                          base: "table-cell",
                          md: "none",
                        }}
                        className={styles.secondaryText}
                      >
                        Qty - {product.quantity}
                      </Text>
                    </Flex>
                  </Td>
                  <Td display={responsiveProductCell}>${product.total}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </TableContainer>
    </Flex>
  );
};
