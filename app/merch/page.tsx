"use client";

import { useState } from "react";
import { useCartStore } from "../../store/cart-store";
import Link from "next/link";

export default function Merch() {
  const addItem = useCartStore((s) => s.addItem);
  const cartCount = useCartStore((s) => s.items.reduce((sum, i) => sum + i.quantity, 0));
  const [color, setColor] = useState("Black");
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);

  function addToCart() {
    addItem(
      {
        key: `tee-${color}-${size}`,
        productId: "tee-logo",
        name: "Logo Tee",
        priceCents: 3000,
        color,
        size,
      },
      qty
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Merch</h1>
          <Link href="/cart" className="underline">
            Cart ({cartCount})
          </Link>
        </div>

        <div className="mt-8 border border-white/20 rounded-xl p-6">
          <div className="text-xl font-semibold">Logo Tee</div>
          <div className="text-white/70">$30.00</div>
              <div className="my-4">
                <img src="/images/tee.jpg" alt="Logo Tee" width={400} height={400} className="rounded" />
              </div>

          <div className="mt-4">
            <label>Color</label>
            <select
              className="block w-full mt-1 bg-black border border-white/30 p-2 rounded"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option>Black</option>
              <option>White</option>
            </select>
          </div>

          <div className="mt-4">
            <label>Size</label>
            <select
              className="block w-full mt-1 bg-black border border-white/30 p-2 rounded"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>

          <div className="mt-4">
            <label>Quantity</label>
            <input
              type="number"
              min={1}
              className="block w-full mt-1 bg-black border border-white/30 p-2 rounded"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />
          </div>

          <button
            onClick={addToCart}
            className="mt-6 w-full bg-white text-black py-3 rounded font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}