"use client";

import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function CertificateDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [certificate, setCertificate] = useState<string | null>(null);
  // const router = useRouter();
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   const cert = searchParams.get("certificate");
  //   if (cert) {
  //     setCertificate(decodeURIComponent(cert));
  //     setIsOpen(true);
  //   } else {
  //     setIsOpen(false);
  //   }
  // }, [searchParams]);

  const handleClose = () => {
    // setIsOpen(false);
    // router.push("/");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{certificate}</DialogTitle>
          <DialogDescription>
            Here you can display more details about the {certificate}{" "}
            certificate.
          </DialogDescription>
        </DialogHeader>
        {/* Add more certificate details here */}
      </DialogContent>
    </Dialog>
  );
}
