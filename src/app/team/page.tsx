import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <main className="main">
			<section className="grid grid-cols-2 gap-2 w-1/2">
				<UserCard 
					name="limes.eth"
					secondaryName="a.k.a. Dylan"
					pfpLink=""
					fcLink=""
					telegramLink=""
					roles={["ENS Steward", "Tall DAO Member"]}
					/>
				<UserCard 
					name="ncale.eth"
					secondaryName="a.k.a. Nick"
					pfpLink=""
					fcLink=""
					telegramLink=""
					roles={["Full Stack Dev"]}
					/>
			</section>
    </main>
  );
}
