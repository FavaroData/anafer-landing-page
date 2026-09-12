import { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import siteData from "../../data/site";
import styles from "./WhatsAppFloat.module.css";

const SCROLL_THRESHOLD = 400;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.19 0 4.24.85 5.79 2.41a8.2 8.2 0 0 1 2.42 5.83c0 4.55-3.7 8.25-8.24 8.25a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.04-.2-.31a8.18 8.18 0 0 1-1.27-4.4c0-4.55 3.71-8.23 8.28-8.23Zm-4.53 4.6c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4h-.46Z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  // Limiar simples (>400px), sem cálculo por frame.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={buildWhatsAppUrl(siteData.messages.default)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp (abre em nova aba)"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={visible ? `${styles.float} ${styles.visible}` : styles.float}
    >
      <WhatsAppIcon />
      <span className={styles.label}>Chamar no WhatsApp</span>
    </a>
  );
}
