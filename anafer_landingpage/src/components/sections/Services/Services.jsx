import Container from "../../ui/Container/Container";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import Card from "../../ui/Card/Card";
import { buildWhatsAppUrl } from "../../../lib/whatsapp";
import { services } from "../../../data/services";
import siteData from "../../../data/site";
import styles from "./Services.module.css";

const serviceIcons = {
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L3 17.5V21h3.5l6.3-6.3a4 4 0 0 0 4.9-5.4l-2.6 2.6-2.1-2.1 2.6-2.6Z" />
    </svg>
  ),
  pipe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4v2" />
      <path d="M4 4h4M16 20h4" />
    </svg>
  ),
  tank: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M7 3h10l1 4H6l1-4Z" />
      <path d="M6 7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7Z" />
      <path d="M12 10c-1.4 1.7-2.2 2.8-2.2 3.8a2.2 2.2 0 0 0 4.4 0c0-1-.8-2.1-2.2-3.8Z" />
    </svg>
  ),
  grease: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Z" />
      <path d="M4 8 6 4h12l2 4" />
      <circle cx="12" cy="14" r="1.5" />
    </svg>
  ),
};

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Services() {
  return (
    <section id="servicos" className={`section ${styles.section}`}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionHeader
              variant="dark"
              align="left"
              label="NOSSOS SERVIÇOS"
              title={
                <>
                  Do simples ao complexo, a gente{" "}
                  <strong className={styles.highlight}>resolve!</strong>
                </>
              }
              subtitle="Eletricidade, hidráulica, desentupidora e pequenos reparos com agilidade e segurança."
            />
            <ul className={styles.checklist}>
              {services.map((service) => (
                <li key={service.id} className={styles.checkItem}>
                  <span className={styles.checkIcon}>{checkIcon}</span>
                  <span>
                    <strong>{service.title}</strong> ({service.bullets[0]})
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <ul className={styles.cardsGrid}>
            {services.map((service) => (
              <li key={service.id}>
                <Card
                  as="a"
                  href={buildWhatsAppUrl(siteData.messages[service.messageKey])}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Falar no WhatsApp sobre serviços de ${service.title.toLowerCase()} (abre em nova aba)`}
                  interactive
                  className={styles.serviceCard}
                >
                  <div className={styles.imageWrap}>
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      width={600}
                      height={450}
                      loading="lazy"
                      className={styles.image}
                    />
                    <span className={styles.serviceIcon}>
                      {serviceIcons[service.icon]}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    {service.items ? (
                      <ul className={styles.cardList}>
                        {service.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className={styles.cardDescription}>{service.description}</p>
                    )}
                    <span className={styles.cardLink} aria-hidden="true">
                      Saiba mais →
                    </span>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
