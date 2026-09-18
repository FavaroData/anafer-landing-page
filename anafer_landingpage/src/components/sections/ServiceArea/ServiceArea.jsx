import Container from "../../ui/Container/Container";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import siteData from "../../../data/site";
import atendimentoImg from "../../../assets/images/atendimento-mapa.png";
import styles from "./ServiceArea.module.css";

export default function ServiceArea() {
  return (
    <section id="onde-atendemos" className="section">
      <Container>
        <SectionHeader label="ÁREA DE ATENDIMENTO" title="Onde atendemos" />
        <img
          src={atendimentoImg}
          alt={`Mapa do Paraná com marcadores na grande Curitiba, região metropolitana e litoral, ilustrando a área de atendimento. Atendimento: ${siteData.serviceArea}`}
          width={1983}
          height={793}
          loading="lazy"
          className={styles.image}
        />
      </Container>
    </section>
  );
}
