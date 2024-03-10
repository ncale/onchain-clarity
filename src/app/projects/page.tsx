import ProjectCard from "@/components/ProjectCard";

const govScoreDesc = "Coming Soon!"
const basedFriendsDesc = "Crypto's native friends list - BasedFriends uses the farcaster social graph to allow you to see, of your follows, who is recently online and recently onchain"

export default function Home() {
  return (
    <main className="main">
			<section className="flex flex-col gap-2">
        <ProjectCard 
          name="GovScore"
					desc={govScoreDesc}
          projLink="https://onchainclarity.co/projects" 
          imgUrl="/images/gov-score-thumbnail.png" 
          imgAlt="Gov Score Thumbnail" 
          width={800} height={800} />
        <ProjectCard 
          name="BasedFriends"
					desc={basedFriendsDesc}
          projLink="https://basedfriends.xyz" 
          imgUrl="/images/based-friends-thumbnail.png" 
          imgAlt="Based Friends Thumbnail" 
          width={800} height={800} />
      </section>
    </main>
  );
}
