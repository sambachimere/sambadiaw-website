import { StaticImageData } from "next/image";

import TheLLMCourse from "@/public/certifications/the-llm-course-hugging-face-certification.webp";
import FundamentalsOfAgents from "@/public/certifications/fundamental-of-agents-hugging-face-certification.webp";
import ProjectManagement from "@/public/certifications/project-management-google-certification.png";
import EthBlockchainDeveloper from "@/public/certifications/eth-blockchain-developer-consensys-certification.png";
import ITSupport from "@/public/certifications/it-support-google-certification.png";
import CS50 from "@/public/certifications/cs50-harvard-certification.png";
import JSAlgoAndDS from "@/public/certifications/js-algorithms-and-data-structure-fcc-certification.png";
import FullStackCoding from "@/public/certifications/full-stack-coding-bootcamp-le-wagon-certification.png";
import BusinessEntrepreneuriatInternational from "@/public/certifications/business-entrepreneuriat-international-u-laval-certification.png";

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  image: StaticImageData;
}

export const certificates: Certificate[] = [
  // {
  //   id: 0,
  //   name: "Fundamentals of Agents",
  //   issuer: "Hugging Face",
  //   date: "2025-02-25",
  //   image: FundamentalsOfAgents,
  // },
  {
    id: 0,
    name: "The LLM Course",
    issuer: "Hugging Face",
    date: "2025-08-18",
    image: TheLLMCourse,
  },
  {
    id: 1,
    name: "Project Management",
    issuer: "Google",
    date: "2022-12-10",
    image: ProjectManagement,
  },
  {
    id: 2,
    name: "Ethereum Blockchain Developer Bootcamp",
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
    name: "CS50 Introduction to Computer Science",
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
    name: "Full Stack Coding Bootcamp",
    issuer: "Le Wagon",
    date: "2019-08-23",
    image: FullStackCoding,
  },
  {
    id: 7,
    name: "Business Entrepreneuriat International",
    issuer: "Université Laval",
    date: "2018-08-29",
    image: BusinessEntrepreneuriatInternational,
  },
];
