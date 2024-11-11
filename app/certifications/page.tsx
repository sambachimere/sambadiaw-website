import { Header } from "../header";
import CertificateGrid from "@/components/certification-grid";
import { CertificateDialog } from "@/components/certification-dialog";

import ProjectManagement from "@/public/certifications/project-management-google-certification.png";
import EthBlockchainDeveloper from "@/public/certifications/eth-blockchain-developer-consensys-certification.png";
import ITSupport from "@/public/certifications/it-support-google-certification.png";
import CS50 from "@/public/certifications/cs50-harvard-certification.png";
import JSAlgoAndDS from "@/public/certifications/js-algorithms-and-data-structure-fcc-certification.png";
import FullStackCoding from "@/public/certifications/full-stack-coding-bootcamp-le-wagon-certification.png";
import BusinessEntrepreneuriatInternational from "@/public/certifications/business-entrepreneuriat-international-u-laval-certification.png";

const certificates = [
  {
    id: 1,
    name: "Project Management",
    issuer: "Google",
    date: "2022-12-10",
    image: ProjectManagement,
  },
  {
    id: 2,
    name: "Ehtereum Blockchain Developer Bootcamp",
    issuer: "Université Laval",
    date: "2022-02-08",
    image: EthBlockchainDeveloper,
  },
  {
    id: 3,
    name: "IT Support",
    issuer: "Google",
    date: "2020-08-20",
    image: ITSupport,
  },
  {
    id: 4,
    name: "CS50 - Introduction to Computer Science",
    issuer: "Harvard",
    date: "2020-08-14",
    image: CS50,
  },
  {
    id: 5,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "2018-07-20",
    image: JSAlgoAndDS,
  },
  {
    id: 6,
    name: "Business entrepreneuriat international ",
    issuer: "Université Laval",
    date: "2019-08-23",
    image: FullStackCoding,
  },
  {
    id: 7,
    name: "Business entrepreneuriat international ",
    issuer: "Université Laval",
    date: "2018-08-29",
    image: BusinessEntrepreneuriatInternational,
  },
];

export default function CertificationsPage() {
  return (
    <div className="p-5 md:pt-5 min-h-screen max-w-[2500px]	m-auto">
      <Header />

      {/* <h1 className="text-2xl font-bold mb-4">My Certificates</h1> */}
      <CertificateGrid certificates={certificates} />
      <CertificateDialog />
    </div>
  );
}
