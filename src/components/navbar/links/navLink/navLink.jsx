import Link from "next/link";
import styles from "./navLink.module.css";

const NavLink = ({ item }) => {

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
