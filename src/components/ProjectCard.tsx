import {Card, CardFooter, Image } from "@nextui-org/react";


export default function ProjectCard(props: { name: string, projLink: string, imgUrl: string, imgAlt: string, width: number, height: number | undefined }) {
	return (
		<a href={props.projLink} target="_blank">
		<Card
			isFooterBlurred
			radius="lg"
			className="border-none w-80 h-80"
			isPressable
		>
			<Image
				src={props.imgUrl}
				alt={props.imgAlt}
				width={props.width}
				removeWrapper
				className="z-0 w-full h-full object-cover"
			/>
			<CardFooter className="bg-black/50 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-2xl text-white/80">{props.name}</p>
      </CardFooter>
		</Card>
		</a>
	)
}