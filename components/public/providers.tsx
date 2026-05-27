"use client";

import { CartProvider } from "@/lib/cart-context";
import CartDrawer from "@/components/public/cart-drawer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
