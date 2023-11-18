import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import styles from "../../../styles/Home.module.css";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

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
          <SearchIcon color="gray.300" height="24px" width="24px" />
        </InputLeftElement>
        <Input
          className={styles.searchInput}
          placeholder="Search"
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
        Search
      </Button>
    </Flex>
  );
};
