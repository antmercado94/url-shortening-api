import { Dispatch, SetStateAction, useEffect } from "react";
import { useFormStatus } from "react-dom";
import Button from "@/app/ui/button";

type Props = {
  setIsPending: Dispatch<SetStateAction<boolean>>;
};

function SubmitButton({ setIsPending }: Props) {
  const { pending } = useFormStatus();

  /** loading state */
  useEffect(() => {
    setIsPending(pending);
  }, [pending, setIsPending]);

  return (
    <Button type="submit" size={"lg"} aria-disabled={pending}>
      Shorten It!
    </Button>
  );
}

export default SubmitButton;
