"use client";

import Image from "next/image";
import heroImage from "@/../public/images/hero-image.gif";
import { ChevronDown, MoveRight } from "lucide-react";
import IconX from "@/components/icons/x";
import IconFarcaster from "@/components/icons/farcaster";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { scrolltoHash } from "@/lib/utils";
import IconLink from "@/components/icons/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { InlinePill } from "@/components/ui/inline-pill";

export default function Home() {
  return (
    <main className="lg:[&>*]:px-32">
      {/* Hero Section */}
      <section id="home" className="relative space-y-24 pb-10 pt-8">
        {/* Hero */}
        <div className="grid grid-cols-1 items-center gap-0 px-4 lg:grid-cols-2 lg:gap-24 lg:px-0">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="font-title text-6xl">Onchain is the new online</h1>
            <p className="text-2xl leading-10">
              Building{" "}
              <InlinePill className="bg-amber-100 leading-8 text-amber-800">
                transparency
              </InlinePill>{" "}
              and{" "}
              <InlinePill className="bg-lime-100 leading-8 text-lime-800">
                accountability
              </InlinePill>{" "}
              with innovative solutions for the future of the web
            </p>
          </div>
          {/* Image */}
          <div>
            <Image
              src={heroImage}
              width={800}
              height={800}
              alt="Hero image"
              unoptimized
            />
          </div>
        </div>
        {/* Divider */}
        <div className="mx-auto hidden w-fit lg:block">
          <div
            onClick={() => scrolltoHash("initiatives")}
            className="flex cursor-pointer flex-col items-center"
          >
            <p>Read more</p>
            <ChevronDown />
          </div>
        </div>
        <WavyTransition1 />
      </section>

      {/* Initiatives Section */}
      <section
        id="initiatives"
        className="relative space-y-12 bg-zinc-100 pb-36 pt-10"
      >
        {/* Title */}
        <h2 className="px-4 text-4xl">Our initiatives</h2>
        {/* Cards */}
        <div className="flex flex-col-reverse gap-8 px-4 lg:grid lg:grid-cols-3">
          <div className="grid grid-cols-10 gap-8 lg:col-span-2">
            {initiativesList.map((item, i) => (
              <Card key={i} className="col-span-9 px-10 py-8 even:col-start-2">
                <CardHeader className="space-y-2">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end">
                  <a
                    href={item.link}
                    className="flex items-center space-x-1 text-lg hover:underline"
                  >
                    <div>See more</div>
                    <MoveRight />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="space-y-4 text-xl leading-8">
            <p>
              {"We're "}
              <InlinePill className="bg-emerald-100 leading-6 text-emerald-800">
                🏡 community members
              </InlinePill>
              {", "}
              <InlinePill className="bg-cyan-100 leading-6 text-cyan-800">
                🛠️ builders
              </InlinePill>
              {", and "}
              <InlinePill className="bg-indigo-100 leading-6 text-indigo-800">
                ✨ experimentooors
              </InlinePill>
              .
            </p>
            <p>Check out our latest initiatives here.</p>
          </div>
        </div>
        {/* Divider */}
        <WavyTransition2 />
      </section>

      {/* Team Section */}
      <section id="team" className="space-y-12 bg-zinc-200 px-4 pb-52 pt-10">
        <h2 className="text-4xl">Meet the team</h2>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
          <div className="space-y-4 text-xl leading-8">
            <p>
              {"We're also "}
              <InlinePill className="bg-cyan-100 leading-6 text-cyan-800">
                {"collaborators"}
              </InlinePill>
              {", "}
              <InlinePill className="bg-lime-100 leading-6 text-lime-800">
                {"hard workers"}
              </InlinePill>
              {", and "}
              <InlinePill className="bg-pink-100 leading-6 text-pink-800">
                {"thinkers"}
              </InlinePill>
              {
                "⎯constantly trying new things and searching for what we don't know."
              }
            </p>
            <p>
              {"The best way to reach onchain clarity is by "}
              <a
                href="mailto:contact@onchainclarity.co"
                className="text-blue-500 underline hover:text-blue-400 active:text-blue-600"
              >
                {"email"}
              </a>
              {"."}
            </p>
          </div>
          <div className="flex justify-center gap-4 lg:col-span-2 lg:justify-start">
            {teamList.map((member, i) => (
              <Card key={i} className="w-min p-6">
                <CardHeader className="space-y-1">
                  <div className="w-28 overflow-hidden rounded-md lg:w-48">
                    <AspectRatio ratio={1} className="relative">
                      <Image
                        src={member.image}
                        width={240}
                        height={240}
                        alt={`${member.name} profile picture`}
                        className={`absolute ${member.name === "ncale.eth (a.k.a. Nick)" ? "-top-7" : ""} object-cover`}
                      />
                    </AspectRatio>
                  </div>
                  <CardTitle className="text-md">{member.name}</CardTitle>
                  <CardDescription className="leading-none text-zinc-400">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center">
                    <a href={member.linkX} target="_blank">
                      <IconX />
                    </a>
                    <a
                      href={member.linkFarcaster}
                      target="_blank"
                      className="ml-1.5"
                    >
                      <IconFarcaster />
                    </a>
                    {member.linkWebsite ? (
                      <a
                        href={member.linkWebsite}
                        target="_blank"
                        className="ml-0.5"
                      >
                        <IconLink />
                      </a>
                    ) : null}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

type InitiativesListType = { title: string; desc: string; link: string }[];
const initiativesList: InitiativesListType = [
  {
    title: "DAO Delegate",
    desc: "We put decentralization at the forefront, participating as a delegate for Optimism DAO.",
    link: "https://vote.optimism.io/delegates/occ.eth",
  },
  {
    title: "GovScore",
    desc: "We're building solutions for delegate discovery and analytics in DAOs.",
    link: "https://govscore.xyz",
  },
];

type TeamListType = {
  image: string;
  name: string;
  role: string;
  linkX: string;
  linkFarcaster: string;
  linkWebsite: string;
}[];
const teamList: TeamListType = [
  {
    image:
      "https://i.seadn.io/gae/CsglYc_NZ0lHvdIHH9dXUpiAjL21jXvajIOaqRep64H76yzjsGjVa3z3KcZtNBPoeyuBizJywkWddxQ8t8gQB2sOjPny2WGFj4LEfg?w=500&auto=format",
    name: "limes.eth (a.k.a. Dylan)",
    role: "Co-creator",
    linkX: "https://twitter.com/limes_eth",
    linkFarcaster: "https://warpcast.com/limes.eth",
    linkWebsite: "",
  },
  {
    image: "https://i.imgur.com/Sfbunk9.jpg",
    name: "ncale.eth (a.k.a. Nick)",
    role: "Technical Co-creator",
    linkX: "https://twitter.com/nick_brodeur",
    linkFarcaster: "https://warpcast.com/ncale.eth",
    linkWebsite: "https://nickbrodeur.com",
  },
];

function WavyTransition1() {
  return (
    <div className="absolute bottom-0 left-0 -z-50 w-full rotate-180 overflow-hidden leading-none">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block h-[110px] w-full"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-zinc-100"
        ></path>
      </svg>
    </div>
  );
}
function WavyTransition2() {
  return (
    <div className="absolute bottom-0 left-0 z-50 w-full rotate-180 overflow-hidden leading-none">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block h-[171px] w-[120%]"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-zinc-200"
        ></path>
      </svg>
    </div>
  );
}

// We pursue
// challenges and value hard lessons. We're trying to make a
// difference.
