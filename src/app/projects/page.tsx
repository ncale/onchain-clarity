import ProjectCard from "@/components/ProjectCard";

const govScoreDesc = "A site that scores Optimism delegates based on transparency of identity, how consistently they vote, and how much voting power they currently have"
const basedFriendsDesc = "Crypto's native friends list - BasedFriends uses the farcaster social graph to allow you to see, of your follows, who is recently online and recently onchain"

export default function Home() {
  return (
    <main className="main">
			<section className="flex flex-col gap-2">
        <ProjectCard 
          name="GovScore"
					desc={govScoreDesc}
          projLink="" 
          imgUrl="/based-friends-thumbnail.png" 
          imgAlt="Gov Score Thumbnail" 
          width={800} height={800} />
        <ProjectCard 
          name="BasedFriends"
					desc={basedFriendsDesc}
          projLink="https://basedfriends.xyz" 
          imgUrl="/based-friends-thumbnail.png" 
          imgAlt="Based Friends Thumbnail" 
          width={800} height={800} />
      </section>
    </main>
  );
}
