import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { Search } from "./Search/Search";
import { SettingsIcon } from "@chakra-ui/icons";

export const Header = () => {
  return (
    <Flex paddingTop={10}>
      <Flex flex={1}>
        <Box display="flex">
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
        <Search />
        <Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
