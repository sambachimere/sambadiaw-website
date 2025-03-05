"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

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

export function CertificateGrid({ certificates }: CertificateGridProps) {
  const router = useRouter();

  const handleCertificateClick = (name: string) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/certifications/${formattedName}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {certificates.map((cert) => (
        <div
          key={cert.id}
          onClick={() => handleCertificateClick(cert.name)}
          className="cursor-pointer transition-transform hover:scale-[1.02]"
        >
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
