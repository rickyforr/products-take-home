import { CiSearch, CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "../../styles/Header.module.css";
import { MdOutlineMenu } from "react-icons/md";

type Props = {
  iconName: string;
  iconProps?: any;
};

export const HeaderIcon = ({ iconName, iconProps }: Props) => {
  switch (iconName) {
    case "settings":
      return (
        <CiSettings
          className={styles.headerIcon}
          {...iconProps}
        />
      );
    case "notifications":
      return (
        <IoIosNotificationsOutline
          className={styles.headerIcon}
          {...iconProps}
        />
      );
    case "user":
      return (
        <FaRegUserCircle
          className={styles.headerIcon}
          style={{ fontSize: "1.3rem" }}
          {...iconProps}
        />
      );
    case "search":
      return (
        <CiSearch
          className={styles.headerIcon}
          style={{ fontSize: "1.3rem", color: "#666E7D80" }}
          {...iconProps}
        />
      );
    case "menu":
      return (
        <MdOutlineMenu
          className={styles.headerIcon}
          style={{ fontSize: "1.3rem", color: "#666E7D80", marginLeft: "0px" }}
          {...iconProps}
        />
      );
    default:
      return <CiSettings {...iconProps} />;
  }
};
