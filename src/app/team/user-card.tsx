import {Card, CardBody, CardHeader, Divider, User } from "@nextui-org/react";
import Image from "next/image";
import fcIcon from "@/../public/icons/fc-icon.svg"
import tgIcon from "@/../public/icons/tg-icon.svg";

export default function UserCard(props: { 
	name: string
	secondaryName: string
	pfpLink: string
	fcLink: string
	telegramLink: string
	roles: string[]
}) {
	return (
		<Card className="w-80">
			<CardHeader className="">
				<User 
					name={(<span className="leading-none text-lg">{props.name}</span>)}
					description={(
						<div>
							<span className="leading-none block">{props.secondaryName}</span>
							<div className="flex items-center gap-1 mt-0.5">
								<a href={props.fcLink} target="_blank" className="flex items-center gap-1">
									<Image
										src={fcIcon}
										alt="Farcaster icon"
										width={14}
										/>
										<span>Farcaster</span>
								</a>
								<a href={props.telegramLink} target="_blank" className="flex items-center gap-1">
									<Image
										src={tgIcon}
										alt="Telegram icon"
										width={14}
										/>
										<span>Telegram</span>
								</a>
							</div>
						</div>
					)}
					avatarProps={{
						src: props.pfpLink,
						size: "lg",
						radius: "sm",
						isBordered: false,
					}}
					/>
			</CardHeader>
			<Divider/>
			<CardBody>
				<ul className="role-list">
					{props.roles.map((role, i) => <li key={i}>{role}</li>)}
				</ul>
			</CardBody>
		</Card>
	)
}