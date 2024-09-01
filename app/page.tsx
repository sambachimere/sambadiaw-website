import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import { GitHubIcon, LinkedInIcon, XIcon, MailIcon } from "@/components/icons";

import logoIteru from "@/public/logos/squaredBg/iteru.svg";
import logoIcea from "@/public/logos/squaredBg/icea.svg";
import logoStoneRealEstate from "@/public/logos/squaredBg/stone-real-estate.svg";
import logoDreamkeys from "@/public/logos/squaredBg/dreamkeys.svg";
import logoMonarchAviation from "@/public/logos/squaredBg/monarch-aviation.svg";
import logoEgCarrosserie from "@/public/logos/squaredBg/eg-carrosserie.svg";
import logoMbs from "@/public/logos/squaredBg/mbs.svg";
import logoIfdia from "@/public/logos/squaredBg/ifdia.svg";

export default function Home() {
  return (
    <div className="space-y-10 md:space-y-20 pb-10">
      <Card className="w-full p-0 border-0 shadow-none bg-background">
        <CardContent className="flex items-start space-x-6 p-0">
          <div className="flex-1 space-y-3">
            <Avatar className="h-24 w-24">
              <AvatarImage alt="Samba Diaw" src="/samba.jpeg" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <h2 className="text-4xl font-bold tracking-tight">Samba Diaw</h2>
            <p className="text-2xl text-muted-foreground">Développeur</p>
            <div className="flex items-center gap-6 pt-2">
              <SocialLink
                href="https://github.com/sambachimere"
                aria-label="Follow on GitHub"
                icon={({ className }) => (
                  <GitHubIcon className={`dark:fill-white ${className}`} />
                )}
              />
              <SocialLink
                href="https://www.linkedin.com/in/sambadiaw/"
                aria-label="Follow on LinkedIn"
                icon={({ className }) => (
                  <LinkedInIcon className={`dark:fill-white ${className}`} />
                )}
              />
              <SocialLink
                href="https://x.com/SambaDiaw_"
                aria-label="Follow on X"
                icon={({ className }) => (
                  <XIcon className={`dark:fill-white ${className}`} />
                )}
              />
              <SocialLink
                href="mailto:sambachimerediaw@gmail.com"
                aria-label="Contact by Email"
                icon={({ className }) => (
                  <MailIcon
                    className={`dark:fill-none stroke-current ${className}`}
                  />
                )}
              />
              <a href="https://cv.sambadiaw.com/" target="_blank">
                CV
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
      <Projects />
    </div>
  );
}

function SocialLink({
  icon: Icon,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}) {
  return (
    <a href={href} target="_blank" className="group -m-1 p-1">
      <Icon className="h-6 w-6" />
    </a>
  );
}

const projects = [
  {
    name: "Iteru",
    description: "Agence de développement web et mobile",
    link: { href: "https://www.iteru.agency", label: "iteru.agency" },
    logo: logoIteru,
  },
  {
    name: "ICEA",
    description: "Entreprise de courtage en assurance",
    link: {
      href: "https://www.icea-assurances.fr",
      label: "icea-assurances.fr",
    },
    logo: logoIcea,
  },
  {
    name: "StoneRealEstate",
    description: "Plateforme d'investissemment immobilier fractionné",
    link: {
      href: "https://www.stone-real-estate.fr",
      label: "stone-real-estate.fr",
    },
    logo: logoStoneRealEstate,
  },
  {
    name: "DreamKeys",
    description: "Agence immobilière en ligne",
    link: { href: "https://www.dreamkeys.com", label: "dreamkeys.com" },
    logo: logoDreamkeys,
  },
  {
    name: "Monarch Aviation",
    description: "Entreprise spécialisée dans l'affrètement de jet privé",
    link: {
      href: "https://www.monarch-aviation.com",
      label: "monarch-aviation.com",
    },
    logo: logoMonarchAviation,
  },
  {
    name: "EG Carrosserie",
    description:
      "Entreprise spécialisée dans la carrosserie, la mécanique, et le vitrage de véhicules",
    link: { href: "https://www.egcarrosserie.fr", label: "egcarrosserie.fr" },
    logo: logoEgCarrosserie,
  },
  {
    name: "MBS Services & Travaux",
    description:
      "Entreprise spécialisée dans les recherches de fuites et les dégorgements, la plomberie, l'assainissement, la couverture, l'étanchéité",
    link: { href: "https://www.mbs-services.fr", label: "mbs-services.fr" },
    logo: logoMbs,
  },
  {
    name: "IFDIA",
    description: "Think tank africain",
    link: { href: "https://www.ifdiafrica.org", label: "ifdiafrica.org" },
    logo: logoIfdia,
  },
];

function Projects() {
  return (
    <div className="space-y-7">
      <h1 className="text-2xl font-semibold">Projets</h1>
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-7">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="border-x-0 border-t-0 border-gray-200 dark:border-[#313131] rounded-none pb-7 last:border-b-0 shadow-none border-b gap-5 flex flex-col sm:flex-row bg-background"
          >
            <div className="flex items-center gap-5">
              <div className="relative z-10 flex h-20 w-20 items-center justify-center bg-gray-200 dark:bg-[#313131] shadow-md ring-1 ring-gray-200 dark:border dark:border-[#313131] dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-18 w-18 object-contain"
                  unoptimized
                />
              </div>
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 sm:hidden">
                <a href={project.link.href} target="_blank">
                  {project.name}
                </a>
              </h2>
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 hidden sm:block">
                <a href={project.link.href} target="_blank">
                  {project.name}
                </a>
              </h2>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.link.href}
                target="_blank"
                className="relative z-10 mt-4 flex text-sm items-center font-medium transition"
              >
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </a>
            </div>
          </Card>
        ))}
      </ul>
    </div>
  );
}

function LinkIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}
