"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  image: StaticImageData;
}

interface CertificateCarouselProps {
  certificates: Certificate[];
  initialSlide: string;
}

export function CertificateCarousel({
  certificates,
  initialSlide,
}: CertificateCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const index = certificates.findIndex(
      (cert) => cert.name.toLowerCase().replace(/\s+/g, "-") === initialSlide,
    );
    if (index !== -1) {
      setStartIndex(index);
    }
  }, [initialSlide, certificates]);

  return (
    <Carousel className="w-full max-w-4xl mx-auto" opts={{ startIndex }}>
      <CarouselContent>
        {certificates.map((cert) => (
          <CarouselItem key={cert.id}>
            <div className="p-1">
              <Image
                src={cert.image}
                alt={cert.name}
                className="w-full h-auto object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
