import UserCard from "./user-card";

export default function Home() {
  return (
    <main className="main">
      <section className="flex flex-wrap justify-center gap-4 pt-4">
        <UserCard
          name="limes.eth"
          secondaryName="a.k.a. Dylan"
          pfpLink="https://i.seadn.io/gae/CsglYc_NZ0lHvdIHH9dXUpiAjL21jXvajIOaqRep64H76yzjsGjVa3z3KcZtNBPoeyuBizJywkWddxQ8t8gQB2sOjPny2WGFj4LEfg?w=500&auto=format"
          fcLink="https://warpcast.com/limes.eth"
          telegramLink="https://t.me/limes_eth"
          roles={["ENS Steward", "Tall DAO Member"]}
        />
        <UserCard
          name="ncale.eth"
          secondaryName="a.k.a. Nick"
          pfpLink="https://i.imgur.com/Sfbunk9.jpg"
          fcLink="https://warpcast.com/ncale.eth"
          telegramLink="https://t.me/nbrodeur"
          roles={["Full Stack Dev"]}
        />
      </section>
    </main>
  );
}
