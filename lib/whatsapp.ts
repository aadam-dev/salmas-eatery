import { SITE } from "@/lib/site";
import { formatMoney } from "@/lib/menu-utils";
import type { CartLine } from "@/lib/cart-types";

export type DeliveryOrderPayload = {
  name: string;
  phone: string;
  address: string;
  notes: string;
  lines: CartLine[];
};

export function siteOrderWhatsAppNumber(): string {
  return SITE.orderWhatsAppNumber;
}

export function buildWhatsAppUrl(whatsappNumber: string, text?: string): string {
  const base = `https://wa.me/${whatsappNumber}`;
  if (!text?.trim()) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

function optionalLine(label: string, value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  return `*${label}:* ${trimmed}`;
}

export function cartSubtotal(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0);
}

export function formatDeliveryOrderMessage(payload: DeliveryOrderPayload): string {
  const subtotal = cartSubtotal(payload.lines);
  const itemLines = payload.lines.map(
    (line) =>
      `• ${line.quantity}× ${line.name}: ${formatMoney(line.unitPrice * line.quantity)}`
  );

  const lines = [
    `Hello ${SITE.name},`,
    "",
    "I would like to place a *delivery order*:",
    "",
    "*Order*",
    ...itemLines,
    "",
    `*Subtotal:* ${formatMoney(subtotal)}`,
    "",
    `*Name:* ${payload.name.trim()}`,
    `*Phone:* ${payload.phone.trim()}`,
    `*Delivery address:* ${payload.address.trim()}`,
    optionalLine("Notes", payload.notes),
    "",
    `Sent from ${SITE.name} website`,
  ];

  return lines.filter((line): line is string => line !== null).join("\n");
}

export function openWhatsApp(whatsappNumber: string, text?: string): void {
  const url = buildWhatsAppUrl(whatsappNumber, text);
  window.open(url, "_blank", "noopener,noreferrer");
}

export function openDeliveryOrderWhatsApp(payload: DeliveryOrderPayload): boolean {
  const number = siteOrderWhatsAppNumber();
  if (!number || number.includes("000000")) {
    return false;
  }
  if (!payload.lines.length) return false;
  openWhatsApp(number, formatDeliveryOrderMessage(payload));
  return true;
}
