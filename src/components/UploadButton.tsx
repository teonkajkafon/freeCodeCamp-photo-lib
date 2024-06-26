"use client";
import { Upload } from "lucide-react";

import { CldUploadButton } from "next-cloudinary";

<CldUploadButton uploadPreset="<Upload Preset>" />;

const UploadButton = () => {
  return (
    <CldUploadButton signatureEndpoint="/api/sign-cloudinary-params">
      <span className="flex gap-2 items-center">
        <Upload className="w-4 h-4" /> Upload
      </span>
    </CldUploadButton>
  );
};

export default UploadButton;
