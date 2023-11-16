import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import styles from "../../../styles/Home.module.css";
import { SearchIcon } from "@chakra-ui/icons";

export const Search = () => {
  return (
    <Flex>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" height="24px" width="24px"/>
        </InputLeftElement>
        <Input className={styles.searchInput} placeholder="Search"/>
      </InputGroup>
      <Button className={styles.searchButton}>Search</Button>
    </Flex>
  );
};
