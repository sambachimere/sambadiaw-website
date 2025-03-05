"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Fade from "embla-carousel-fade";
import { type Certificate } from "@/data/certificates";

interface CertificateImageGalleryProps {
  certificates: Certificate[];
  initialCertificate?: string;
}

export function CertificateImageGallery({
  certificates,
  initialCertificate,
}: CertificateImageGalleryProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(!!initialCertificate);
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      const index = api.selectedScrollSnap();
      setCurrentIndex(index);
      const cert = certificates[index];
      const formattedName = cert.name.toLowerCase().replace(/\s+/g, "-");
      router.push(`/certifications/${formattedName}`, { scroll: false });
    });
  }, [api, certificates, router]);

  useEffect(() => {
    if (initialCertificate) {
      const index = certificates.findIndex(
        (cert) =>
          cert.name.toLowerCase().replace(/\s+/g, "-") === initialCertificate,
      );
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [initialCertificate, certificates]);

  function handleCertificateClick(certificate: Certificate) {
    const index = certificates.findIndex((cert) => cert.id === certificate.id);
    setCurrentIndex(index);
    const formattedName = certificate.name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/certifications/${formattedName}`);
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
    router.push("/certifications");
  }

  function renderDots() {
    return (
      <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {certificates.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index ? "w-4 bg-primary" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="cursor-pointer"
            onClick={() => handleCertificateClick(certificate)}
          >
            <Image
              src={certificate.image}
              alt={certificate.name}
              className="h-full w-full object-center border-[0.5px] dark:border-white transition-opacity duration-150 hover:opacity-80"
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[70] h-screen w-screen bg-black/95">
          <div className="relative flex h-full w-full items-center justify-center">
            <button
              onClick={handleModalClose}
              className="absolute left-4 top-4 z-50 text-white hover:text-primary sm:left-8 sm:top-8"
            >
              <X className="h-5 w-5" />
            </button>

            <Carousel
              setApi={setApi}
              opts={{
                startIndex: currentIndex,
                loop: true,
                align: "center",
              }}
              plugins={[Fade()]}
              className="w-full max-w-screen-3xl items-center px-4 sm:px-8"
            >
              <CarouselContent>
                {certificates.map((certificate) => (
                  <CarouselItem key={certificate.id}>
                    <div className="flex h-full items-center justify-center">
                      <Image
                        src={certificate.image}
                        alt={certificate.name}
                        className="h-auto w-auto max-w-full object-contain md:max-h-[80vh] md:max-w-[80vw]"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <button
                onClick={() => api?.scrollPrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary sm:left-8"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() => api?.scrollNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary sm:right-8"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {renderDots()}
            </Carousel>

            <div className="absolute text-sm left-1/2 top-4 -translate-x-1/2 text-white sm:top-8">
              {currentIndex + 1} / {certificates.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
