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
} from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";

type Props = {
  products: Product[];
};

const tableColumnTitles = [
  "ID",
  "Status",
  "Quantity",
  "Product name",
  "Prices",
];

export const ProductsTable = ({ products }: Props) => {
  return (
    <Flex
      style={{
        width: "100%",
        height: "100%",
        marginTop: "50px",
      }}
    >
      <TableContainer style={{ width: "100%" }} overflowY="auto">
        <Table variant="unstyled" className={styles.productsTable}>
          <Thead>
            <Tr>
              {tableColumnTitles.map((title) => (
                <Th>{title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr>
                <Td>{product.id}</Td>
                <Td></Td>
                <Td>{product.quantity}</Td>
                <Td>
                  <Text>{product.product}</Text>
                  <Text>{product.serial}</Text>
                </Td>
                <Td>${product.total}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
