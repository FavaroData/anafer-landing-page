import { useState } from "react";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import { faq } from "../../../data/faq";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="duvidas" className={`${styles.section} section`}>
      <div className={`container ${styles.layout}`}>
        <SectionHeader
          align="left"
          label="DÚVIDAS FREQUENTES"
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas antes de chamar."
        />
        <div className={styles.accordion}>
          {faq.map((item) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-trigger-${item.id}`;
            const panelId = `faq-panel-${item.id}`;
            return (
              <div key={item.id} className={styles.item}>
                <h3 className={styles.heading}>
                  <button
                    type="button"
                    id={buttonId}
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                  >
                    <span className={styles.question}>{item.question}</span>
                    <span className={styles.icon} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className={`${styles.panelWrapper} ${isOpen ? styles.open : ""}`}
                >
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={styles.panelInner}
                    hidden={!isOpen}
                  >
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
