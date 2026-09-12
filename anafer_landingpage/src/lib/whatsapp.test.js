import { test } from "node:test";
import assert from "node:assert/strict";
import { buildWhatsAppUrl } from "./whatsapp.js";
import siteData from "../data/site.js";

test("a URL contém o número de WhatsApp de site.js", () => {
  const url = buildWhatsAppUrl("mensagem qualquer");
  assert.match(url, new RegExp(`^https://wa\\.me/${siteData.whatsappNumber}\\?text=`));
});

test("a mensagem sai percent-encoded", () => {
  const url = buildWhatsAppUrl("Olá! Orçamento?");
  assert.equal(url, `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent("Olá! Orçamento?")}`);
  assert.ok(!url.includes(" "), "não deve conter espaço literal");
});

test("sem argumento usa messages.default", () => {
  const url = buildWhatsAppUrl();
  const expected = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(siteData.messages.default)}`;
  assert.equal(url, expected);
});
