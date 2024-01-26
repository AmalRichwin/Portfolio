import {
  AWSIcon,
  CypressIcon,
  DigitalOceanIcon,
  ExpressIcon, GitIcon, JestIcon,
  LernaIcon,
  MongoIcon,
  NextIcon,
  NodeIcon, TypeScriptIcon,
  WebpackIcon
} from "./icons";
import DockerIcon from "./icons/DockerIcon";
import ElasticStack from "./icons/ElasticIcon";
import FirebaseIcon from "./icons/FirebaseIcon";
import GitLabIcon from "./icons/GitLabIcon";
import GolangIcon from "./icons/GolangIcon";
import MochaIcon from "./icons/MochaIcon";
import PythonIcon from "./icons/PythonIcon";

const tech = [
  {
    text: "TypeScript",
    icon: <TypeScriptIcon size={14} className="fill-blue-500" />,
  },
  {
    text: "Next.js (SSR/SSG)",
    icon: <NextIcon size={15} className="text-gray-900 dark:text-white" />,
  },
  {
    text: "Node.js",
    icon: <NodeIcon size={14} className="fill-green-500" />,
  },
  {
    text: "Golang",
    icon: <GolangIcon width={15} height={15} className="text-gray-900 dark:text-white" />,
  },
  {
    text: "Docker",
    icon: <DockerIcon height={14} width={14} className="fill-green-500" />,
  },
  {
    text: "Express",
    icon: <ExpressIcon className="text-gray-900 dark:text-white" />,
  },
  {
    text: "Python",
    icon: <PythonIcon className="w-5 h-5" />,
  },
  {
    text: "MongoDB",
    icon: <MongoIcon className="fill-green-500" />,
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
    text: "Elastic Stack",
    icon: <ElasticStack width={15} height={15} />,
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
    icon: <i
      className='fa-brands fa-github text-gray-900 dark:text-white'
      aria-hidden='true'
      title='GitHub'></i>
  },
  {
    text: "GitLab",
    icon: <GitLabIcon size={15} />
  },
  {
    text: "Jest",
    icon: <JestIcon size={15} />,
  },
  {
    text: "Mocha",
    icon: <MochaIcon width={15} height={15} />,
  },
  {
    text: "Lerna Monorepos",
    icon: <LernaIcon className="text-gray-900 dark:text-white" />,
  },
  {
    text: "Module Federation",
    icon: <WebpackIcon className="" />,
  },
  {
    text: "Cypress",
    icon: <CypressIcon className=" " />,
  },

];

const TechTagsMarquee = () => (
  <div className="flex flex-wrap">
    {tech.map((tech) => (
      <div key={tech.text} className="text-xs mr-2 mb-1.5 inline-flex items-center font-semibold tracking-wider uppercase px-3 py-1 rounded-full dark:bg-gray-800 border border-gray-700 hover:transition hover:duration-300 hover:ease-in-out">
        <div className="mr-2 text-white">{tech.icon}</div>
        <p className="text-gray-900 dark:text-white">
          {tech.text}
        </p>

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
