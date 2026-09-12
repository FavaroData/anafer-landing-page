import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Container from "../../ui/Container/Container";
import WhatsAppButton from "../../ui/WhatsAppButton/WhatsAppButton";
import { navLinks } from "../../../data/nav";
import siteData from "../../../data/site";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";

const PANEL_ID = "mobile-nav-panel";

const visibleLinks = navLinks.filter(
  (link) => link.label !== "Depoimentos" || siteData.features.testimonialsEnabled
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);
  const hamburgerRef = useRef(null);

  useLockBodyScroll(isOpen);

  // Shadow appears only past an 8px threshold, no per-frame calculation.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Desktop layout has no panel — close it if the viewport grows past 1024px.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Esc-to-close, initial focus, focus trap, and focus return — all scoped
  // to the open panel.
  useEffect(() => {
    if (!isOpen) return;

    const panel = panelRef.current;
    const focusables = panel.querySelectorAll("a[href], button:not([disabled])");
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const hamburger = hamburgerRef.current;
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      hamburger?.focus();
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={scrolled ? `${styles.header} ${styles.scrolled}` : styles.header}>
      <Container className={styles.inner}>
        <a href="#inicio" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoLine}>Fernando</span>
          <span className={styles.logoLine}>Serviços Rápidos</span>
          <span className={styles.tagline}>{siteData.tagline}</span>
        </a>

        <div className={styles.actions}>
          <nav aria-label="Navegação principal" className={styles.nav}>
            <ul className={styles.navList}>
              {visibleLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <WhatsAppButton size="md" className={styles.desktopCta} />
          <WhatsAppButton size="md" className={styles.mobileCta}>
            WhatsApp
          </WhatsAppButton>

          <button
            ref={hamburgerRef}
            type="button"
            className={styles.hamburger}
            aria-expanded={isOpen}
            aria-controls={PANEL_ID}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
          </button>
        </div>
      </Container>

      {isOpen && (
        <button
          type="button"
          className={styles.overlay}
          onClick={closeMenu}
          aria-label="Fechar menu"
        />
      )}

      <div
        id={PANEL_ID}
        ref={panelRef}
        className={isOpen ? `${styles.panel} ${styles.panelOpen}` : styles.panel}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Menu de navegação"
        inert={isOpen ? undefined : true}
      >
        <ul className={styles.panelList}>
          {visibleLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.panelLink} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <WhatsAppButton size="md" fullWidth className={styles.panelCta} />
      </div>
    </header>
  );
}
