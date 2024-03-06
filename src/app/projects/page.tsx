import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="main">
      <div className="flex flex-col gap-4 mb-10 mt-4">
        <p className="text-center text-lg">
          We&apos;re creating open source solutions for bringing
          <span className="font-bold"> higher visibility to blockchain </span>
          by providing a number of services related to social, governance, and more</p>
        <p className="text-center text-lg">
          You can reach us anytime on Farcaster
          <a href="https://warpcast.com/occ.eth" target="_blank" className="text-blue-500 hover:underline"> @occ.eth</a>
          . We&apos;d love to hear from you, whether you have ideas, feedback, or general thoughts about our mission.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <ProjectCard 
          name="GovScore" 
          projLink="" 
          imgUrl="/based-friends-thumbnail.png" 
          imgAlt="Gov Score Thumbnail" 
          width={800} height={800} />
        <ProjectCard 
          name="BasedFriends" 
          projLink="https://basedfriends.xyz" 
          imgUrl="/based-friends-thumbnail.png" 
          imgAlt="Based Friends Thumbnail" 
          width={800} height={800} />
      </div>
    </main>
  );
}
