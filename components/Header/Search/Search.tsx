import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import styles from "../../../styles/Search.module.css";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { uiText } from "@/system/constants";

type Props = {
  onGetProducts: (searchParam?: string) => void;
};

/**
 * Renders the search bar.
 * @param props.onGetProducts - Function to get products from the API.  
 */
export const Search = ({ onGetProducts }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <Flex>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" h="24px" w="24px" />
        </InputLeftElement>
        <Input
          className={styles.searchInput}
          placeholder={uiText.searchInputPlaceholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              onGetProducts(searchValue);
            }
          }}
        />
      </InputGroup>
      <Button
        className={styles.searchButton}
        onClick={() => onGetProducts(searchValue)}
      >
        {uiText.searchButtonText}
      </Button>
    </Flex>
  );
};
