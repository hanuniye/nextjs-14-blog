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
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link: ILinks, i: number) => {
          return <NavLink item={link} />;
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
    </div>
  );
};

export default Links;
