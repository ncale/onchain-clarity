import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 pt-10">
      <p className="text-center text-xl w-1/2">We&apos;re creating open source solutions for bringing higher visibility to blockchain by providing a number of services related to social, governance, and more</p>
      <p className="text-center text-xl w-1/2 font-extralight">
        You can reach us anytime on Farcaster
        <a href="https://warpcast.com/occ.eth" target="_blank" className="text-blue-500 hover:underline"> @occ.eth</a>
        . We&apos;d love to hear your ideas or feedback!
      </p>
      <div className="flex gap-6">
        <ProjectCard name="GovScore" imgUrl="/based-friends-thumbnail.png" imgAlt="Gov Score Thumbnail" width={800} height={800} />
        <ProjectCard name="BasedFriends" imgUrl="/based-friends-thumbnail.png" imgAlt="Based Friends Thumbnail" width={800} height={800} />
      </div>
    </main>
  );
}
