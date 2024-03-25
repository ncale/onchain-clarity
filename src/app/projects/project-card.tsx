import {Card, CardBody, Image } from "@nextui-org/react";

export default function ProjectCard(props: { name: string, desc: string, projLink: string, imgUrl: string, imgAlt: string, width: number, height: number | undefined }) {
	return (
		<a href={props.projLink} target="_blank">
			<Card
				radius="lg"
				className="border-none"
			>
				<CardBody>
					<div className="grid grid-cols-3">
						<div className="relative col-span-1 mr-3">
							<h2 className="text-lg font-bold">{props.name}</h2>
							<p className="text-md font-extralight">{props.desc}</p>
						</div>
						<div className="relative col-span-2 h-72 w-full">
							<Image
								src={props.imgUrl}
								alt={props.imgAlt}
								width={props.width}
								height={props.height}
								removeWrapper
								className="z-0 w-full h-full object-cover object-left-top"
							/>
						</div>
					</div>
				</CardBody>
			</Card>
		</a>
	)
}