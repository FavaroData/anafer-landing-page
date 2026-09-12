import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import Card from "../../ui/Card/Card";
import useScrollReveal from "../../../hooks/useScrollReveal";
import siteData from "../../../data/site";
import { testimonials } from "../../../data/testimonials";
import styles from "./Testimonials.module.css";

const AVATAR_VARIANTS = ["blue", "accent", "blue"];

function Stars() {
  return (
    <div className={styles.stars} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="16" height="16">
          <path
            fill="currentColor"
            d="M10 1.5l2.63 5.33 5.87.85-4.25 4.14 1 5.85L10 14.9l-5.25 2.77 1-5.85L1.5 7.68l5.87-.85z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [ref, isVisible] = useScrollReveal();

  if (!siteData.features.testimonialsEnabled) return null;

  return (
    <section
      id="depoimentos"
      className={`${styles.section} section`}
    >
      <div className="container">
        <SectionHeader
          align="left"
          label="DEPOIMENTOS"
          title="Clientes satisfeitos"
          subtitle="Veja o que quem já contratou tem a dizer:"
        />
        <div
          ref={ref}
          className={`${styles.grid} ${isVisible ? styles.visible : ""}`}
        >
          {testimonials.map((item, index) => (
            <Card key={item.id} as="figure" className={styles.card}>
              <div className={styles.top}>
                <span
                  className={`${styles.avatar} ${styles[AVATAR_VARIANTS[index % AVATAR_VARIANTS.length]]}`}
                  aria-hidden="true"
                >
                  {item.initials}
                </span>
                <div>
                  <Stars />
                  <span className="sr-only">Avaliação: 5 de 5</span>
                </div>
              </div>
              <blockquote className={styles.quote}>{item.quote}</blockquote>
              <figcaption className={styles.figcaption}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.category}>{item.category}</span>
              </figcaption>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
