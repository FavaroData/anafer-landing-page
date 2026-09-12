import eletricaImg from "../assets/images/servico-eletrica.webp";
import hidraulicaImg from "../assets/images/servico-hidraulica.webp";
import reparosImg from "../assets/images/servico-reparos.webp";

// `messageKey` aponta para uma chave de `siteData.messages` (ver lib/whatsapp.js).
export const services = [
  {
    id: "eletrica",
    title: "Elétrica",
    description: "Instalações, manutenções e reparos.",
    image: eletricaImg,
    imageAlt: "Instalação elétrica sendo realizada",
    icon: "bolt",
    messageKey: "eletrica",
    bullets: [
      "Troca de tomadas, disjuntores, luminárias, etc."
    ]
  },
  {
    id: "hidraulica",
    title: "Hidráulica",
    description: "Consertos, vazamentos e instalações.",
    image: hidraulicaImg,
    imageAlt: "Reparo hidráulico sendo realizado",
    icon: "droplet",
    messageKey: "hidraulica",
    bullets: [
      "Vazamentos, torneiras, registros, etc."
    ]
  },
  {
    id: "reparos",
    title: "Pequenos Reparos",
    description: "Montagens, fixações e muito mais.",
    image: reparosImg,
    imageAlt: "Pequeno reparo doméstico sendo realizado",
    icon: "wrench",
    messageKey: "reparos",
    bullets: [
      "Montagem de móveis, fixações, etc."
    ]
  }
];
