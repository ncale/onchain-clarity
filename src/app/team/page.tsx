import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <main className="main">
			<section className="grid grid-cols-2 gap-2 w-1/2">
				<UserCard 
					name="limes.eth"
					secondaryName="a.k.a. Dylan"
					pfpLink="https://i.seadn.io/gae/CsglYc_NZ0lHvdIHH9dXUpiAjL21jXvajIOaqRep64H76yzjsGjVa3z3KcZtNBPoeyuBizJywkWddxQ8t8gQB2sOjPny2WGFj4LEfg?w=500&auto=format"
					fcLink="https://warpcast.com/limes.eth"
					telegramLink=""
					roles={["ENS Steward", "Tall DAO Member"]}
					/>
				<UserCard 
					name="ncale.eth"
					secondaryName="a.k.a. Nick"
					pfpLink="https://i.imgur.com/Sfbunk9.jpg"
					fcLink="https://warpcast.com/ncale.eth"
					telegramLink=""
					roles={["Full Stack Dev"]}
					/>
			</section>
    </main>
  );
}
