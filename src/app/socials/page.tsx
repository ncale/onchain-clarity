import SocialsCard from "./socials-card";
import fcIcon from "../../../public/icons/fc-icon.svg";
import pgIcon from "../../../public/icons/paragraph-icon.svg";

export default function Home() {
  return (
    <main className="main">
			<section className="flex flex-col gap-2">
				<SocialsCard 
					message="Follow us on Farcaster"
					link="https://warpcast.com/occ.eth"
					iconSrc={fcIcon}
					iconAlt="Farcaster icon"
					/>
				<SocialsCard 
					message="Subscribe to our Paragraph blog"
					link="https://paragraph.xyz/@occ.eth"
					iconSrc={pgIcon}
					iconAlt="Paragraph icon"
					/>
			</section>
    </main>
  );
}
