import { uiText } from "@/system/constants";
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { HeaderIcon } from "./HeaderIcon";
import styles from "../../styles/Header.module.css";

export const HeaderMenuItems = () => {
  return (
    <>
      <HeaderIcon iconName="settings" />
      <HeaderIcon iconName="notifications" />
      <Flex alignItems="center" h="fit-content">
        <HeaderIcon iconName="user" />
        <Text ml={1} className={styles.userNameText}>
          {uiText.userNameMock}
        </Text>
      </Flex>
    </>
  );
};

export const MobileHeaderMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HeaderIcon iconName="menu" />}
        variant="ghost"
        minW={0}
        minH={0}
        h="fit-content"
        mx={{ base: 0, sm: 2 }}
      />
      <MenuList>
        <MenuItem icon={<HeaderIcon iconName="settings" />}>Settings</MenuItem>
        <MenuItem icon={<HeaderIcon iconName="notifications" />}>
          Notifications
        </MenuItem>
        <MenuItem icon={<HeaderIcon iconName="user" />}>
          {uiText.userNameMock}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
