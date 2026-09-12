import styles from "./Container.module.css";

export default function Container({ as: As = "div", className = "", children, ...props }) {
  const classes = className ? `${styles.container} ${className}` : styles.container;

  return (
    <As className={classes} {...props}>
      {children}
    </As>
  );
}
