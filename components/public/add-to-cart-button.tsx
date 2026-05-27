"use client";

import { Plus } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

type Props = {
  item: MenuItem;
  className?: string;
  variant?: "default" | "compact";
};

export default function AddToCartButton({ item, className, variant = "default" }: Props) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(item)}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold transition-all active:scale-95",
        variant === "default" &&
          "px-5 py-2.5 bg-terracotta text-warm-black rounded-full text-sm hover:bg-terracotta/90",
        variant === "compact" &&
          "w-10 h-10 rounded-full bg-terracotta text-warm-black hover:bg-terracotta/90",
        className
      )}
      aria-label={`Add ${item.name} to order`}
    >
      <Plus className={variant === "compact" ? "h-4 w-4" : "h-4 w-4"} />
      {variant === "default" && <span>Add to order</span>}
    </button>
  );
}
