"use client";
import { useCartStore } from "../../store/cart-store";

export default function CartPage() {
  const items = useCartStore((s) => s.items);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold">Cart</h1>
      {items.length === 0 ? (
        <p className="mt-6 text-white/70">Your cart is empty.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.key} className="border border-white/20 rounded p-4">
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-white/70">{item.color} / {item.size}</div>
              <div className="text-sm">Qty: {item.quantity}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}