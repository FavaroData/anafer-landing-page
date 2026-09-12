import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  variant = "light",
  as: As = "h2",
}) {
  const classes = [
    styles.header,
    align === "left" ? styles.alignLeft : styles.alignCenter,
    variant === "dark" ? styles.dark : styles.light,
  ].join(" ");

  return (
    <div className={classes}>
      {label && <span className={styles.label}>{label}</span>}
      <As className={styles.title}>{title}</As>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
