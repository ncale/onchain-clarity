import Image from "next/image";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 z-[150] mx-auto grid h-32 w-full grid-cols-4 grid-rows-1 rounded-t-2xl bg-zinc-600 px-32 py-6 text-xs text-white">
      {/* Logo & Company Info */}
      <div className="flex items-center">
        {/* <Image
          src={"/images/occ-logo.png"}
          width={100}
          height={100}
          alt="Onchain Clarity Logo"
        /> */}
      </div>

      {/* Empty */}
      <div></div>

      {/* Navigation */}
      <div></div>

      {/* Socials */}
      <div>
        {/* <p>
          <a href="https://twitter.com/OnchainClarity" target="_blank">
            twitter
          </a>
        </p>
        <p>
          <a href="https://warpcast.com/occ.eth" target="_blank">
            farcaster
          </a>
        </p> */}
      </div>
    </footer>
  );
}
