import Image from "next/image";

export function GenericCard({
  holder,
  number,
  expiration,
  cvv,
}: {
  holder: string;
  number: string;
  expiration: string;
  cvv: string;
}) {
  const splittedExp = expiration.split("/");
  const expiratioMonth = splittedExp[0];
  const expiratioYear = splittedExp[1];

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-gradient-to-br from-pink-500 to-yellow-500 w-64 h-44 rounded-lg px-4">
        {/* <Image src="/cc-chip.png" alt="chip" width={10} height={10} /> */}
        <div className="flex justify-end">
          <Image
            className="pb-4"
            src="/visa-logo-black-and-white.png"
            width={40}
            height={40}
            alt="flag"
          />
        </div>
        <div className="font-normal pb-6 proportional-nums">
          <p className="text-xs">card number</p>
          <p>{number ? number : "**** **** **** ****"}</p>
        </div>
        <div className="flex">
          <div className="flex flex-1 flex-col ">
            <p className="text-xs">card holder</p>

            <p className="font-thin">{holder ? holder : "Your name"}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs">expiration</p>
            <p className="font-thin">
              {expiratioMonth && expiratioYear
                ? `${expiratioMonth}/${expiratioYear}`
                : "xx/xx"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
