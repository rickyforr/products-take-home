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
import { HeaderLogo } from "../Header/HeaderLogo";
import { CloseIcon } from "@chakra-ui/icons";
import { MobileHeaderMenu } from "../Header/HeaderMenu";

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
        padding={{ base: "1rem", md: "2rem" }}
        margin={{ base: "0px", md: "auto" }}
        height={{ base: "100vh", md: "80%" }}
      >
        <Flex
          display={{ base: "flex", md: "none" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <HeaderLogo />
          <MobileHeaderMenu />
        </Flex>
        <ModalHeader
          className={styles.productsModalTitle}
          display="flex"
          justifyContent={{ base: "space-between", md: "flex-start" }}
          fontSize={{ base: "1rem", md: "1.3rem" }}
          paddingEnd={0}
          mt={3}
        >
          {product.product}{" "}
          <CloseIcon
            onClick={onClose}
            display={{ base: "flex", md: "none" }}
            mx={2}
          />
        </ModalHeader>
        <ModalCloseButton display={{ base: "none", md: "flex" }} />
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
          <Button onClick={onClose} width={{ base: "100%", md: "200px" }}>
            {uiText.closeButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
