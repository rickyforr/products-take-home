import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { Search } from "./Search/Search";
import { appImages } from "@/system/constants";
import styles from "../../styles/Header.module.css"; 

type Props = {
  onGetProducts: (searchParam?: string) => void;
};

/**
 * Renders the app header including the logo and search bar.
 * @param props.onGetProducts - Function to get products from the API.
 */
export const Header = ({ onGetProducts }: Props) => {
    
  return (
    <Flex paddingTop={1} flexWrap="wrap">
      <Flex flex={1}>
        <Flex className={styles.logoContainer} mb={2} >
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
      </Flex>
      <Flex flex={1}>
        <Search onGetProducts={onGetProducts} />
      </Flex>
    </Flex>
  );
};
