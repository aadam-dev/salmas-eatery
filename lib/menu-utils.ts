import type { MenuItem } from "@/lib/menu-data";

export function parsePriceFromDisplay(priceDisplay: string): number {
  const match = priceDisplay.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

export function formatMoney(amount: number, currency = "GHS"): string {
  return `${currency} ${amount.toFixed(amount % 1 === 0 ? 0 : 2)}`;
}

export function menuItemUnitPrice(item: MenuItem): number {
  return parsePriceFromDisplay(item.priceDisplay);
}
