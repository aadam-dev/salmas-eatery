"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { menuItems } from "@/lib/menu-data";
import { formatMoney } from "@/lib/menu-utils";
import { openDeliveryOrderWhatsApp } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function CartDrawer() {
  const { lines, itemCount, subtotal, isOpen, closeCart, setQuantity, removeItem, clearCart } =
    useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!lines.length) {
      setError("Your cart is empty. Add dishes from the menu first.");
      return;
    }
    const ok = openDeliveryOrderWhatsApp({
      name,
      phone,
      address,
      notes,
      lines,
    });
    if (ok) {
      setSent(true);
      clearCart();
      setName("");
      setPhone("");
      setAddress("");
      setNotes("");
    } else {
      setError("Could not open WhatsApp. Add your order number in site settings when ready.");
    }
  }

  if (!isOpen) return null;

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside
        className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-warm-black border-l border-white/10 flex flex-col shadow-2xl"
        aria-label="Your order"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-terracotta" />
            <h2 className="text-lg font-bold text-ivory font-heading">Your order</h2>
            {itemCount > 0 && (
              <span className="text-xs bg-terracotta text-warm-black px-2 py-0.5 rounded-full font-semibold">
                {itemCount}
              </span>
            )}
          </div>
          <button type="button" onClick={closeCart} className="text-ivory/60 hover:text-ivory p-1" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 text-ivory/20 mx-auto mb-4" />
              <p className="text-ivory/50 mb-6">No items yet. Browse the menu and add your favourites.</p>
              <Link
                href="/menu"
                onClick={closeCart}
                className="inline-block px-6 py-3 bg-terracotta text-warm-black font-semibold rounded-full"
              >
                View menu
              </Link>
            </div>
          ) : (
            <ul className="space-y-4 mb-8">
              {lines.map((line) => {
                const image = menuItems.find((i) => i.id === line.itemId)?.image;
                return (
                  <li key={line.itemId} className="flex gap-3 p-3 rounded-xl bg-warm-card border border-white/5">
                    {image && (
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <Image src={image} alt="" fill className="object-cover" sizes="64px" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-ivory text-sm font-medium leading-snug">{line.name}</p>
                      <p className="text-terracotta text-sm font-semibold mt-0.5">
                        {formatMoney(line.unitPrice * line.quantity)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => setQuantity(line.itemId, line.quantity - 1)}
                          className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-ivory/70 hover:border-terracotta/50"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-ivory text-sm w-6 text-center tabular-nums">{line.quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(line.itemId, line.quantity + 1)}
                          className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-ivory/70 hover:border-terracotta/50"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(line.itemId)}
                          className="ml-auto text-ivory/40 hover:text-red-400 p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          {lines.length > 0 && (
            <form onSubmit={handleSubmit} className="space-y-4 border-t border-white/10 pt-6">
              <p className="text-ivory/50 text-xs uppercase tracking-widest">Delivery details</p>
              <input
                required
                placeholder="Your name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-warm-card border border-white/10 text-ivory text-sm focus:border-terracotta/50 focus:outline-none"
              />
              <input
                required
                type="tel"
                placeholder="Phone (WhatsApp) *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-warm-card border border-white/10 text-ivory text-sm focus:border-terracotta/50 focus:outline-none"
              />
              <textarea
                required
                rows={2}
                placeholder="Delivery address *"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-warm-card border border-white/10 text-ivory text-sm focus:border-terracotta/50 focus:outline-none resize-none"
              />
              <textarea
                rows={2}
                placeholder="Notes (landmark, spice level, etc.)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-warm-card border border-white/10 text-ivory text-sm focus:border-terracotta/50 focus:outline-none resize-none"
              />

              {sent && (
                <p className="text-sm text-terracotta bg-terracotta/10 p-3 rounded-lg">
                  Order sent to WhatsApp. We will confirm your delivery shortly.
                </p>
              )}
              {error && <p className="text-sm text-red-300 bg-red-500/10 p-3 rounded-lg">{error}</p>}

              <div className="flex items-center justify-between pt-2">
                <span className="text-ivory/60 text-sm">Subtotal</span>
                <span className="text-ivory font-bold text-lg">{formatMoney(subtotal)}</span>
              </div>

              <button
                type="submit"
                className={cn(
                  "w-full py-4 rounded-full font-semibold text-warm-black transition-all",
                  "bg-terracotta hover:bg-terracotta/90"
                )}
              >
                Send order on WhatsApp
              </button>
              <p className="text-ivory/40 text-[11px] text-center leading-relaxed">
                You will complete the order in WhatsApp. Delivery fees may apply — {SITE.name} will confirm.
              </p>
            </form>
          )}
        </div>
      </aside>
    </>
  );
}
