import Link from "next/link";
import styles from "./links.module.css";

interface ILinks {
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

const Links = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link: ILinks, i: number) => {
          return <Link href={link.path}>{link.title}</Link>;
        })}
      </div>
    </div>
  );
};

export default Links;
