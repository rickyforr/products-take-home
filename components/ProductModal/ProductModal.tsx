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
import { FaImage } from "react-icons/fa6";
import { uiText } from "@/system/constants";

type Props = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

/**
 * Displays a modal with the product details.
 * @param props.product - The product to display.
 * @param props.isOpen - Whether the modal is open or not.
 * @param props.onClose - Function to close the modal. 
 */
export const ProductModal = ({ product, isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ sm: "full", md: "2xl" }}>
      <ModalOverlay />
      <ModalContent
        padding="40px"
        margin={{ base: "0px", md: "auto" }}
        height={{ base: "100vh", md: "80%" }}
      >
        <ModalHeader className={styles.productsModalTitle}>
          {product.product}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDir={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Flex padding="1rem">
            <FaImage style={{ fontSize: "200px" }} />
          </Flex>
          <Flex padding="1rem" flexDir="column">
            <Text>Serial number: {product.serial}</Text>
            <Text>Quantity: {product.quantity}</Text>
            <Text>Total: ${product.total}</Text>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={onClose}
            width={{ base: "100%", md: "200px" }}
          >
            {uiText.closeButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
