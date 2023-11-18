import { Product } from "@/system/types";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import styles from "../../styles/ProductModal.module.css";

type Props = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

export const ProductModal = ({ product, isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className={styles.productsModalTitle}>{product.product}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Text>Serial number: {product.serial}</Text>
            <Text>Quantity: {product.quantity}</Text>
            <Text>Total: ${product.total}</Text>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
