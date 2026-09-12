import Container from "../../ui/Container/Container";
import WhatsAppButton from "../../ui/WhatsAppButton/WhatsAppButton";
import useScrollReveal from "../../../hooks/useScrollReveal";
import siteData from "../../../data/site";
import styles from "./FinalCTA.module.css";

// Casa estilizada (laranja) com um elemento de manutenção (chave inglesa, branca)
// sobreposto — vetor simples, sem peso de imagem raster.
function CTAIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
      <path
        d="M32 8 L58 28 H50 V56 H14 V28 H6 Z"
        fill="var(--color-accent)"
      />
      <rect x="27" y="38" width="10" height="18" fill="var(--color-white)" />
      <path
        d="M46 20a7 7 0 0 0-9.9 6.4l-9.5 9.5 4.5 4.5 9.5-9.5A7 7 0 0 0 46 20Zm-2.8 2.8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
        fill="var(--color-white)"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.6 2.9 3.5 6c-1 1-1 2.6 0 4.9 2 4.5 6.1 8.6 10.6 10.6 2.3 1 3.9 1 4.9 0l3.1-3.1c.7-.7.7-1.9-.2-2.5l-3.6-2.6c-.6-.4-1.4-.4-1.9.1l-1.3 1.3c-.2.2-.6.3-1 .1a13 13 0 0 1-5.4-5.4c-.2-.4-.1-.8.1-1l1.3-1.3c.5-.5.5-1.3.1-1.9L8.9 3.1c-.6-.9-1.8-.9-2.5-.2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13Zm2.1.5 6.9 5.4 6.9-5.4H5.1ZM19 8.1l-6.7 5.3a1.5 1.5 0 0 1-1.86 0L4 8.1v10.4h15V8.1Z" />
    </svg>
  );
}

export default function FinalCTA() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className={styles.cta}>
      <Container>
        <div
          ref={ref}
          className={isVisible ? `${styles.inner} ${styles.visible}` : styles.inner}
        >
          <div className={styles.main}>
            <div className={styles.left}>
              <CTAIcon />
              <div className={styles.text}>
                <span className={styles.kicker}>Não deixe para depois!</span>
                <h2 className={styles.title}>Seu problema tem solução.</h2>
                <p className={styles.lead}>
                  Chame agora e tenha um serviço rápido, seguro e com qualidade.
                </p>
              </div>
            </div>

            <div className={styles.action}>
              <WhatsAppButton
                size="lg"
                subtitle="Atendimento imediato"
                className={styles.ctaButton}
              />
            </div>
          </div>

          <div className={styles.contactStrip}>
            <a className={styles.contactLink} href={siteData.phoneHref}>
              <PhoneIcon />
              <span>{siteData.phone}</span>
            </a>
            <a className={styles.contactLink} href={siteData.emailHref}>
              <MailIcon />
              <span>{siteData.email}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
