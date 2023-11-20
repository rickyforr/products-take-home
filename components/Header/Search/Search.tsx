import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import styles from "../../../styles/Search.module.css";
import { useState } from "react";
import { uiText } from "@/system/constants";
import { validateSearchInput } from "@/system/utils";
import { HeaderIcon } from "../HeaderIcon";

type Props = {
  onGetProducts: (searchParam?: string) => void;
};

/**
 * Renders the search bar.
 * @param props.onGetProducts - Function to get products from the API.
 */
export const Search = ({ onGetProducts }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  /**
   * Validates the search input value and sets the error state.
   * @param value 
   */
  const handleSearchValueValidation = (value: string) => {
    if (value === "") {
      setError(false);
      return;
    }
    setError(!validateSearchInput(value));
  };

  /** 
   * Handles the change of the search input value.
   * Calls the validation function and sets the new value.
   * @param e - The event object.
  */
  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    handleSearchValueValidation(newValue);
    if(searchValue && !newValue) onGetProducts()
  };

  return (
    <Flex ml={2}>
      <FormControl isInvalid={error}>
        <InputGroup position="relative">
          <InputLeftElement pointerEvents="none">
            <HeaderIcon iconName="search" />
          </InputLeftElement>

          <Input
            className={styles.searchInput}
            placeholder={uiText.searchInputPlaceholder}
            onChange={handleSearchValueChange}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                onGetProducts(searchValue);
              }
            }}
          />
          {error && (
            <FormErrorMessage
              className={styles.searchInputErrorText}
              position="absolute"
              bottom="-1rem"
            >
              {uiText.searchInputErrorMessage}
            </FormErrorMessage>
          )}
        </InputGroup>
      </FormControl>

      <Button
        className={styles.searchButton}
        onClick={() => onGetProducts(searchValue)}
      >
        {uiText.searchButtonText}
      </Button>
    </Flex>
  );
};
