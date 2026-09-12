import styles from "./Button.module.css";

export default function Button({
  variant = "primary",
  size = "md",
  as: As = "button",
  icon,
  subtitle,
  fullWidth = false,
  className = "",
  children,
  type,
  ...props
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // ponytail: default type="button" only for the native <button> element, so a
  // CTA dropped inside a <form> never accidentally submits it.
  const nativeButtonType = As === "button" ? type ?? "button" : type;

  return (
    <As className={classes} type={nativeButtonType} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>
        <span className={styles.text}>{children}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </span>
    </As>
  );
}
