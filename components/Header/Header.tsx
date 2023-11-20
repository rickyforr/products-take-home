import { Flex } from "@chakra-ui/react";
import { Search } from "./Search/Search";
import { appImages } from "@/system/constants";
import styles from "../../styles/Header.module.css";
import { MobileHeaderMenu, HeaderMenuItems } from "./HeaderMenu";
import { HeaderLogo } from "./HeaderLogo";

type Props = {
  onGetProducts: (searchParam?: string) => void;
  showSearch?: boolean;
};

/**
 * Renders the app header including the logo and search bar.
 * @param props.onGetProducts - Function to get products from the API.
 * @param props.showSearch - Whether to show the search bar or not.
 */
export const Header = ({ onGetProducts, showSearch = true }: Props) => {
  return (
    <Flex paddingTop={1} flexWrap="wrap">
      <Flex
        flex={1}
        mt={1}
        alignItems="center"
        justifyContent={{ base: "space-between", md: "flex-start" }}
      >
        <HeaderLogo />
        <Flex display={{ base: "flex", sm: "none" }}>
          <MobileHeaderMenu />
        </Flex>
      </Flex>
      <Flex mt={1} flex={1} alignItems="center" justifyContent="flex-end">
        {showSearch && <Search onGetProducts={onGetProducts} />}
        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          <HeaderMenuItems />
        </Flex>
        <Flex display={{ base: "none", sm: "flex", md: "none" }}>
          <MobileHeaderMenu />
        </Flex>
      </Flex>
    </Flex>
  );
};
