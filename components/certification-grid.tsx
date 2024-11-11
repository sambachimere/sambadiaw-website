"use client";

import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  image: StaticImageData;
}

interface CertificateGridProps {
  certificates: Certificate[];
}

export default function CertificateGrid({
  certificates,
}: CertificateGridProps) {
  const router = useRouter();

  // const handleCertificateClick = (certificateName: string) => {
  //   router.push(`/certifications/${encodeURIComponent(certificateName)}`);
  // };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {certificates.map((cert) => (
        // <Card
        //   key={cert.id}
        //   className="cursor-pointer hover:shadow-lg transition-shadow"
        //   onClick={() => handleCertificateClick(cert.name)}
        // >
        //   <CardHeader>
        //     <CardTitle>{cert.name}</CardTitle>
        //   </CardHeader>
        //   <CardContent>
        //     <p>Issuer: {cert.issuer}</p>
        //     <p>Date: {cert.date}</p>
        //   </CardContent>
        // </Card>
        <div key={cert.id}>
          <Image
            src={cert.image}
            alt={cert.name}
            className="h-full w-full object-center border-[0.5px] dark:border-white"
          />
        </div>
      ))}
    </div>
  );
}
