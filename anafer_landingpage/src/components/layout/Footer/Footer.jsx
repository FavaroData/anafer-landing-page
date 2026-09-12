import Container from "../../ui/Container/Container";
import { services } from "../../../data/services";
import siteData from "../../../data/site";
import styles from "./Footer.module.css";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M6.6 2.9 3.5 6c-1 1-1 2.6 0 4.9 2 4.5 6.1 8.6 10.6 10.6 2.3 1 3.9 1 4.9 0l3.1-3.1c.7-.7.7-1.9-.2-2.5l-3.6-2.6c-.6-.4-1.4-.4-1.9.1l-1.3 1.3c-.2.2-.6.3-1 .1a13 13 0 0 1-5.4-5.4c-.2-.4-.1-.8.1-1l1.3-1.3c.5-.5.5-1.3.1-1.9L8.9 3.1c-.6-.9-1.8-.9-2.5-.2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13Zm2.1.5 6.9 5.4 6.9-5.4H5.1ZM19 8.1l-6.7 5.3a1.5 1.5 0 0 1-1.86 0L4 8.1v10.4h15V8.1Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <p className={styles.name}>
              <span>Fernando</span>
              <span>Serviços Rápidos</span>
            </p>
            <p className={styles.tagline}>{siteData.tagline}</p>
          </div>

          <div className={styles.block}>
            <h3 className={styles.heading}>Serviços</h3>
            <ul className={styles.list}>
              {services.map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h3 className={styles.heading}>Contato</h3>
            <ul className={styles.list}>
              <li>
                <a className={styles.link} href={siteData.phoneHref}>
                  <PhoneIcon />
                  <span>{siteData.phone}</span>
                </a>
              </li>
              <li>
                <a className={styles.link} href={siteData.emailHref}>
                  <MailIcon />
                  <span>{siteData.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Fernando Serviços Rápidos. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
