import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export default function ProjectCard(props: {
  name: string;
  desc: string;
  projLink: string;
  imgUrl: string;
  imgAlt: string;
}) {
  return (
    <a href={props.projLink} target="_blank">
      <Card radius="lg" className="border-none">
        <CardHeader>
          <div>
            <p className="text-lg font-bold">{props.name}</p>
            <p className="text-md">{props.desc}</p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="relative w-80 h-48 rounded-md overflow-hidden mx-auto md:mx-0">
            <Image
              src={props.imgUrl}
              alt={props.imgAlt}
              width={800}
              height={800}
              className="z-0 w-full h-full object-cover object-left-top"
            />
          </div>
        </CardBody>
      </Card>
    </a>
  );
}
