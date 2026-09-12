import Container from "../../ui/Container/Container";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import useScrollReveal from "../../../hooks/useScrollReveal";
import { benefits } from "../../../data/benefits";
import styles from "./Benefits.module.css";

const icons = {
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  ),
  money: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12h6M12 8v8" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  ),
};

// ponytail: cores alternam por índice (azul, laranja, verde, azul) para dar ritmo
// visual — o verde é exceção consciente ao "verde só para WhatsApp" (ver
// features/beneficios.md no vault: ícone decorativo de "preço justo", não ação).
const colorClasses = [styles.blue, styles.accent, styles.green, styles.blue];

export default function Benefits() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="section">
      <Container>
        <SectionHeader
          label="POR QUE ESCOLHER NOSSOS SERVIÇOS?"
          title="Solução completa para o seu dia a dia"
          subtitle="Mais do que reparos, oferecemos tranquilidade, segurança e praticidade."
        />
        <ul ref={ref} className={styles.grid}>
          {benefits.map((benefit, i) => (
            <li
              key={benefit.id}
              className={`${styles.item} ${isVisible ? styles.visible : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className={`${styles.icon} ${colorClasses[i % colorClasses.length]}`}>
                {icons[benefit.icon]}
              </span>
              <div className={styles.text}>
                <h3 className={styles.title}>{benefit.title}</h3>
                <p className={styles.description}>{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
