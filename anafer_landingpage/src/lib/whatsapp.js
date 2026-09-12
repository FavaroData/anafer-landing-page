import siteData from "../data/site.js";

export function buildWhatsAppUrl(message = siteData.messages.default) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteData.whatsappNumber}?text=${text}`;
}
