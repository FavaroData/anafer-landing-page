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
      "Troca de tomadas, disjuntores, luminárias."
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
      "Vazamentos, torneiras, registros."
    ]
  },
  {
    id: "desentupidora",
    title: "Desentupidora",
    description: "Ralos, pias, esgoto, caixas de água e de gordura.",
    image: hidraulicaImg,
    imageAlt: "Serviço de desentupidora",
    icon: "pipe",
    messageKey: "desentupidora",
    bullets: [
      "Ralos, pias, vasos sanitários, esgoto, caixas de gordura e caixas de água."
    ]
  },
  {
    id: "reparos",
    title: "Pequenos reparos em geral",
    description: "Instalações simples, fechaduras, ajustes.",
    image: reparosImg,
    imageAlt: "Pequeno reparo doméstico sendo realizado",
    icon: "wrench",
    messageKey: "reparos",
    bullets: [
      "Fixação de prateleiras, troca de puxadores e maçanetas, ajustes, instalações simples."
    ]
  }
];
