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
        <Image
          className="pb-10"
          src="/visa-logo-black-and-white.png"
          width={40}
          height={40}
          alt="flag"
        />
        <p className="font-normal pb-6">
          {number ? number : "***************"}
        </p>
        <div className="flex">
          <div className="flex flex-1 font-thin">
            <p>{holder ? holder : "Your name goes here"}</p>
          </div>
          <div>
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
