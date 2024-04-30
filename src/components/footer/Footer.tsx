import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Abdi</div>
      <div className={styles.text}>
        Abdi creative agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
