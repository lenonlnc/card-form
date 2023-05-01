"use client";

import Image from "next/image";
import { useState } from "react";
import { GenericCard } from "./components/GenericCard";

export default function Home() {
  const [card, setCardData] = useState({
    holder: "",
    number: "",
    expiration: "",
    cvv: "",
  });

  const handleCardChange = (e: any) => {
    setCardData({ ...card, [e.target.name]: e.target.value });
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="bg-primary-1 w-max h-96 rounded p-6 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-center"></div>

          {/* card number */}
          <div className="flex flex-col gap-4">
            <p className="font-normal text-xs">Card number</p>
            <input
              onChange={handleCardChange}
              maxLength={15}
              name="number"
              className="card-number rounded h-10 w-full font-thin border bg-primary-3 shadow-sm p-4 border-primary-3 placeholder-slate-400 focus:outline-none focus:border-violet-800 focus:ring-violet-800 block  sm:text-sm focus:ring-1"
              placeholder="Card number"
            />
          </div>

          {/* card holder */}
          <div className="flex flex-col gap-4">
            <p className="font-normal text-xs">Card holder</p>
            <input
              onInput={handleCardChange}
              name="holder"
              maxLength={40}
              className="card-number rounded h-10 w-full font-thin border bg-primary-3 shadow-sm p-4 border-primary-3 placeholder-slate-400 focus:outline-none focus:border-violet-800 focus:ring-violet-800 block  sm:text-sm focus:ring-1"
              placeholder="Card holder"
              type="text"
            />
          </div>

          {/* date and cvv */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <p className="font-normal text-xs">Expiration date</p>

              <input
                onChange={handleCardChange}
                name="expiration"
                maxLength={5}
                className=" rounded h-9 bg-primary-3 font-thin shadow-sm p-4 border-primary-3 placeholder-slate-400 focus:outline-none focus:border-violet-800 focus:ring-violet-800 block  sm:text-sm focus:ring-1"
                placeholder="Expiration date"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-normal text-xs">CVV</p>

              <input
                onChange={handleCardChange}
                name="cvv"
                maxLength={15}
                className="rounded h-9 bg-primary-3 font-thin shadow-sm p-4 border-primary-3 placeholder-slate-400 focus:outline-none focus:border-violet-800 focus:ring-violet-800 block  sm:text-sm focus:ring-1"
                placeholder="CVV"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <GenericCard
            holder={card.holder}
            number={card.number}
            expiration={card.expiration}
            cvv={card.cvv}
          />
        </div>
      </div>
    </main>
  );
}
