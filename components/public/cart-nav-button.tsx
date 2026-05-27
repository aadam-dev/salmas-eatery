"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  showLabel?: boolean;
};

export default function CartNavButton({ className, showLabel = true }: Props) {
  const { openCart, itemCount } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className={cn(
        "relative inline-flex items-center gap-2 px-5 py-2.5 bg-terracotta text-warm-black text-sm font-semibold rounded-full hover:bg-terracotta/90 transition-all hover:scale-105",
        className
      )}
      aria-label={`View order, ${itemCount} items`}
    >
      <ShoppingBag className="h-4 w-4" />
      {showLabel && <span>Order</span>}
      {itemCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full bg-saffron text-warm-black text-[10px] font-bold">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  );
}
