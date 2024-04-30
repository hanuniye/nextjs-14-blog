"use client";
import Link from "next/link";
import { ILinks } from "../Links";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }: { item: ILinks }) => {
  const pathName = usePathname();

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
