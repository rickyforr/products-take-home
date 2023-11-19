import { RESPONSIVE_PRODUCT_CELL, uiText } from "@/system/constants";
import { Tr, Td, Flex, Text, Box } from "@chakra-ui/react";
import styles from "../../styles/ProductsTable.module.css";
import { Product } from "@/system/types";

type Props = {
  product: Product;
  index: number;
  onClick: (product: Product) => void;
};

/**
 * Displays a row with the product details.
 * @param props.product - The product to display.
 * @param props.index - The index of the product in the table.
 * @param props.onClick - Function to call when the row is clicked.
 */
export const ProductsTableRow = ({ product, index, onClick }: Props) => {

  /** Status is displayed as an example and does not 
   * represent data being returned from the products api. */
  const statusClasses = [
    styles.statusOk,
    styles.statusWarn,
    styles.statusAlert,
    styles.statusGood,
  ];
  const randomStatus =
    statusClasses[Math.floor(Math.random() * statusClasses.length)];

  return (
    <Tr onClick={() => onClick(product)}>
      <Td display={RESPONSIVE_PRODUCT_CELL}>{product.id}</Td>
      <Td display={RESPONSIVE_PRODUCT_CELL}>
        <Box className={`${styles.productStatus} ${randomStatus}`}>Status</Box>
      </Td>
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
            {uiText.quantityPrefix}
            {product.quantity}
          </Text>
        </Flex>
      </Td>
      <Td display={RESPONSIVE_PRODUCT_CELL}>${product.total}</Td>
    </Tr>
  );
};
