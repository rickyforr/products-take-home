import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { Search } from "./Search/Search";

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
        <Box display="flex" minW="200px" mb={2} >
          <Image
            src="/storm_logo_icon.svg"
            alt="Logo_Icon"
            width={46.631}
            height={43.995}
          />
          <Image
            src="/storm_logo_text.svg"
            alt="Logo_Text"
            width={154.942}
            height={31.834}
          />
        </Box>
      </Flex>
      <Flex flex={1}>
        <Search onGetProducts={onGetProducts} />
      </Flex>
    </Flex>
  );
};
