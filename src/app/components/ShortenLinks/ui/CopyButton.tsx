import { ButtonHTMLAttributes, useState } from "react";
import Button from "@/app/ui/button";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

export default function CopyButton({
  valueToCopy,
  className,
  ...props
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  return (
    <Button
      {...props}
      onClick={() => {
        // copy to clipboard
        void navigator.clipboard.writeText(valueToCopy);
        setIsCopied(true);
      }}
      className={className}
      variant={"copy"}
      aria-disabled={isCopied}
      aria-description="Copy shortened link"
    >
      {!isCopied ? "Copy" : "Copied!"}
    </Button>
  );
}
