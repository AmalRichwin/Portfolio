import {
  AWSIcon,
  CypressIcon,
  DigitalOceanIcon,
  ExpressIcon,
  FigmaIcon,
  GitIcon,
  IllustratorIcon,
  JestIcon,
  LernaIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  PhotoshopIcon,
  TypeScriptIcon,
  WebpackIcon,
} from "./icons";
import DockerIcon from "./icons/DockerIcon";
import FirebaseIcon from "./icons/FirebaseIcon";

const tech = [
  {
    text: "TypeScript",
    icon: <TypeScriptIcon size={14} className="fill-blue-500" />,
  },
  {
    text: "Next.js (SSR/SSG)",
    icon: <NextIcon size={15} />,
  },
  {
    text: "Node.js",
    icon: <NodeIcon size={14} className="fill-green-500" />,
  },
  {
    text: "Docker",
    icon: <DockerIcon height={14} width={14} className="fill-green-500" />,
  },
  {
    text: "Express",
    icon: <ExpressIcon />,
  },
  {
    text: "MongoDB",
    icon: <MongoIcon className="fill-green-500" />,
  },
  {
    text: "Lerna Monorepos",
    icon: <LernaIcon />,
  },
  {
    text: "Module Federation",
    icon: <WebpackIcon className="fill-cyan-500" />,
  },
  {
    text: "AWS",
    icon: <AWSIcon className="fill-yellow-500" />,
  },
  {
    text: "DigitalOcean",
    icon: <DigitalOceanIcon />,
  },
  {
    text: "Firebase",
    icon: <FirebaseIcon />,
  },
  {
    text: "Git",
    icon: <GitIcon />,
  },
  {
    text: "Github",
    icon: <></>
  },
  {
    text: "GitLab",
    icon: <></>
  },
  {
    text: "Jest",
    icon: <JestIcon size={15} />,
  },
  {
    text: "Cypress",
    icon: <CypressIcon className="fill-cyan-500" />,
  },

];

const TechTagsMarquee = () => (
  <div className="flex flex-wrap">
    {tech.map((tech) => (
      <div className="text-xs mr-2 mb-1.5 inline-flex items-center font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
        <div className="mr-2">{tech.icon}</div>

        {tech.text}
      </div>
    ))}
  </div>
);

const TechTags = () => {
  return (
    <div className="mt-6">
      <TechTagsMarquee />
    </div>
  );
};

export default TechTags;
