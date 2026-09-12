import styles from "./Card.module.css";

export default function Card({
  as: As = "div",
  variant = "light",
  interactive = false,
  className = "",
  children,
  ...props
}) {
  const classes = [
    styles.card,
    variant === "dark" ? styles.dark : styles.light,
    interactive ? styles.interactive : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <As className={classes} {...props}>
      {children}
    </As>
  );
}
