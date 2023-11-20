import { appImages } from "@/system/constants";
import { Flex } from "@chakra-ui/react";
import styles from "../../styles/Header.module.css";
import Image from "next/image";

/**
 * Renders the app logo.
 */
export const HeaderLogo = () => {
  return (
    <Flex className={styles.logoContainer}>
      <Image
        src={appImages.logo.imageUrl}
        alt={appImages.logo.altText}
        width={46.631}
        height={43.995}
      />
      <Image
        src={appImages.logoText.imageUrl}
        alt={appImages.logoText.altText}
        width={154.942}
        height={31.834}
      />
    </Flex>
  );
};
