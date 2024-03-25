import ProjectCard from "./project-card";

const govScoreDesc = "The onchain score for finding optimal Optimism delegates - GovScore uses a delegate's voting history, voting power, and identity to craft a score that surfaces quality delegates to OP token holders looking to redelegate."
const basedFriendsDesc = "Crypto's native friends list - BasedFriends uses the farcaster social graph to allow you to see, of your follows, who is recently online and recently onchain"

export default function Home() {
  return (
    <main className="main">
			<section className="flex flex-col gap-2">
        <ProjectCard 
          name="GovScore"
					desc={govScoreDesc}
          projLink="https://govscore.xyz/" 
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
