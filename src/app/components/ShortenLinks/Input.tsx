import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { type ProcessedLink } from "@/app/lib/definitions";
import { type ErrorState, createProcessedLink } from "@/app/lib/actions";
import { createCookie, setLocalStorage } from "@/app/lib/data";
import { cn } from "@/app/utils/cn";
import SubmitButton from "./ui/SubmitButton";

type Props = {
  links: ProcessedLink[];
  setLinks: Dispatch<SetStateAction<ProcessedLink[]>>;
  setIsPending: Dispatch<SetStateAction<boolean>>;
};

export default function Input({ links, setLinks, setIsPending }: Props) {
  const initialState = { message: "", errors: {} };
  const [input, setInput] = useState<string>("");
  const [state, dispatch] = useFormState(createProcessedLink, initialState);
  const inputRef = useRef<HTMLInputElement>(null);
  const linksListRef = useRef<ProcessedLink[]>(links);
  const errors = (state as ErrorState).errors;

  /** Set LS */
  useEffect(() => {
    if (!links.length) return;

    linksListRef.current = links; // update ref
    setLocalStorage(linksListRef.current);
    createCookie(links.length);
  }, [links]);

  /** Update state */
  useEffect(() => {
    if (!errors) {
      setLinks([...linksListRef.current, state as ProcessedLink]);
      // clear input
      setInput("");
      inputRef?.current?.blur();
    }
  }, [state, setLinks, errors]);

  return (
    <form
      id="shorten-link-form"
      className="relative z-50 flex flex-col gap-4 lg:flex-row lg:gap-6"
      action={dispatch}
    >
      <div className="flex w-full flex-col gap-4">
        <label htmlFor="url" className="sr-only">
          Url
        </label>
        <input
          ref={inputRef}
          className={cn(
            "h-12 px-4 text-neutral-very-dark-blue md:h-16 lg:w-full lg:rounded-lgr lg:px-8 lg:text-xl lg:tracking-[0.0075em]",
            {
              "rounded-sm outline outline-secondary-red placeholder:text-secondary-red/50":
                errors?.url,
              "rounded-md": !errors?.url,
            },
          )}
          id="url"
          name="url"
          type="text"
          placeholder="Shorten a link here..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
          aria-describedby="url-error"
        />
        <div
          id="url-error"
          aria-live="polite"
          aria-atomic="true"
          className="-mb-[0.063rem] -mt-[0.688rem] lg:-mb-[1.375rem] lg:-mt-[0.375rem] lg:h-0"
        >
          {errors?.url &&
            errors.url?.map((error: string) => (
              <p
                className="text-xs italic leading-[1.125rem] text-secondary-red lg:text-base"
                key={error}
              >
                {error}
              </p>
            ))}
        </div>
      </div>
      <SubmitButton setIsPending={setIsPending} />
    </form>
  );
}
