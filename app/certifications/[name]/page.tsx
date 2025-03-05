import { Header } from "../../header";
import { CertificateImageGallery } from "@/components/certificate-image-gallery";
import { certificates } from "@/data/certificates";

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <div className="p-5 md:pt-5 min-h-screen max-w-[2500px] m-auto">
      <Header />
      <CertificateImageGallery
        certificates={certificates}
        initialCertificate={name}
      />
    </div>
  );
}
