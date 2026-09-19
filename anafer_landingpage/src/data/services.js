import eletricaImg from "../assets/images/servico-eletrica.webp";
import hidraulicaImg from "../assets/images/servico-hidraulica.webp";
import desentupidoraImg from "../assets/images/servico-desentupidora.webp";
import reparosImg from "../assets/images/servico-reparos.webp";
import caixaAguaImg from "../assets/images/servico-caixa-agua.webp";
import gorduraImg from "../assets/images/servico-gordura.webp";

// `messageKey` aponta para uma chave de `siteData.messages` (ver lib/whatsapp.js).
export const services = [
  {
    id: "eletrica",
    title: "Elétrica",
    description:
      "Instalação, manutenção e reparo de tomadas, disjuntores, luminárias e quadros elétricos, resolvendo problemas de fiação que colocam sua casa em risco.",
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
    description:
      "Conserto de vazamentos, troca de torneiras, registros e conexões, evitando desperdício de água e infiltrações na sua casa.",
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
    description:
      "Desentupimento de ralos, pias, vasos sanitários e tubulações de esgoto em geral, para resolver entupimentos simples ou mais complicados.",
    image: desentupidoraImg,
    imageAlt: "Profissional desentupindo ralo com máquina de desentupimento",
    icon: "pipe",
    messageKey: "desentupidora",
    bullets: [
      "Ralos, pias, vasos sanitários e esgoto em geral."
    ]
  },
  {
    id: "reparos",
    title: "Pequenos reparos em geral",
    description:
      "Fixação de prateleiras e quadros, troca de puxadores, maçanetas e dobradiças, e outros ajustes do dia a dia que deixam sua casa mais funcional.",
    image: reparosImg,
    imageAlt: "Pequeno reparo doméstico sendo realizado",
    icon: "wrench",
    messageKey: "reparos",
    bullets: [
      "Fixação de prateleiras, troca de puxadores e maçanetas, ajustes, instalações simples."
    ]
  },
  {
    id: "caixa-agua",
    title: "Limpeza e troca de caixa de água",
    description:
      "Higienização completa, vedação de tampas e troca de caixas d'água danificadas, prevenindo contaminação, vazamentos e mau cheiro na sua casa.",
    image: caixaAguaImg,
    imageAlt: "Caixa de água sendo higienizada e revisada",
    icon: "tank",
    messageKey: "caixaAgua",
    bullets: [
      "Higienização, vedação e troca de caixas d'água."
    ]
  },
  {
    id: "caixa-gordura",
    title: "Limpeza e troca de caixa de gordura",
    description:
      "Esvaziamento, limpeza profunda e troca de caixas de gordura, evitando entupimentos, mau odor e contaminação na cozinha.",
    image: gorduraImg,
    imageAlt: "Caixa de gordura sendo limpa e revisada",
    icon: "grease",
    messageKey: "caixaGordura",
    bullets: [
      "Esvaziamento, limpeza e troca de caixas de gordura."
    ]
  }
];
