import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="bg-primary-1 w-max h-96 rounded p-6 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-center"></div>

          {/* card number */}
          <div className="flex flex-col gap-4">
            <p className="font-normal text-xs">Card number</p>
            <input
              className="rounded h-10 w-full font-thin border bg-primary-3 shadow-sm p-4 border-primary-3 placeholder-slate-400 focus:outline-none focus:border-violet-800 focus:ring-violet-800 block  sm:text-sm focus:ring-1"
              placeholder="Card number"
              type="text"
            />
          </div>

          {/* <div className="bg-slate-950  w-60 h-40 rounded"></div> */}
          {/* card holder */}
          <div className="flex flex-col gap-4">
            <p className="font-normal text-xs">Card holder</p>
            <input
              className="rounded h-10 w-full  bg-primary-3 font-thin shadow-sm p-4 border-primary-3 placeholder-slate-400 focus:outline-none focus:border-violet-800 focus:ring-violet-800 block  sm:text-sm focus:ring-1"
              placeholder="Card holder"
              type="text"
            />
          </div>

          {/* date cvv */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <p className="font-normal text-xs">Expiration date</p>

              <input
                className="rounded h-9 bg-primary-3 font-thin shadow-sm p-4 border-primary-3 placeholder-slate-400 focus:outline-none focus:border-violet-800 focus:ring-violet-800 block  sm:text-sm focus:ring-1"
                placeholder="Expiration date"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-normal text-xs">CVV</p>

              <input
                className="rounded h-9 bg-primary-3 font-thin shadow-sm p-4 border-primary-3 placeholder-slate-400 focus:outline-none focus:border-violet-800 focus:ring-violet-800 block  sm:text-sm focus:ring-1"
                placeholder="CVV"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center ">card goes here</div>
      </div>
    </main>
  );
}
