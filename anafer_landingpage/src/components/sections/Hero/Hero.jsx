import WhatsAppButton from "../../ui/WhatsAppButton/WhatsAppButton";
import heroImage from "../../../assets/images/hero-profissional.webp";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.mediaBg}>
        <img
          className={styles.image}
          src={heroImage}
          width={1200}
          height={900}
          fetchPriority="high"
          decoding="async"
          alt="Profissional de manutenção com cinto de ferramentas"
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <span aria-hidden="true">⚡</span> SERVIÇOS ESSENCIAIS E COMERCIAIS
          </span>
          <h1 className={styles.title}>
            Precisa de um serviço <strong>rápido</strong> e de <strong>confiança</strong>?
          </h1>
          <p className={styles.lead}>
            Eletricidade, hidráulica e pequenos reparos em geral com qualidade, segurança e
            profissionalismo. Resolvo o seu problema sem complicação!
          </p>
          <WhatsAppButton
            size="lg"
            subtitle="Atendimento rápido e sem burocracia"
            className={styles.cta}
          />
          <div className={styles.seal}>
            <svg
              className={styles.sealIcon}
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <div className={styles.sealBody}>
              <span className={styles.sealLabel}>
                ATENDIMENTO
                <br />
                <span className={styles.sealAccent}>RÁPIDO</span>
              </span>
              <span className={styles.sealText}>Quando você precisa, eu chego!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
