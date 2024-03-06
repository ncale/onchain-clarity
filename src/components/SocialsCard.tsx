import {Card, CardBody, CardHeader, Divider, User } from "@nextui-org/react";
import Image from "next/image";

export default function SocialsCard(props: { 
	message: string
	link: string
	iconSrc: string
	iconAlt: string
}) {
	return (
		<a href={props.link}>
			<Card>
				<CardBody>
					<div className="flex items-center gap-3 pr-2 font-light">
						<Image 
							src={props.iconSrc}
							alt={props.iconAlt}
							width={40}
							/>
						<h2 className="text-lg">{props.message}</h2>
					</div>
				</CardBody>
			</Card>
		</a>
	)
}