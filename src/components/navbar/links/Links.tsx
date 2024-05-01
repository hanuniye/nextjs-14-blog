"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

export interface ILinks {
  title: string;
  path: string;
}

const links: ILinks[] = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const session = true;
const iaAdmin = true;

const Links = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link: ILinks, i: number) => {
          return <NavLink item={link} key={i} />;
        })}

        {session ? (
          <>
            {iaAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />}
            <button>Logout</button>
          </>
        ) : (
          <NavLink item={{ path: "/login", title: "Login" }} />
        )}
      </div>

      <button className={styles.menuButton} onClick={() => setIsOpen((prev) => !prev)}>Menu</button>
      {isOpen && (
        <div className={styles.mobileLinks}>
          {links.map((link: ILinks, i: number) => {
            return <NavLink item={link} key={i} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Links;
