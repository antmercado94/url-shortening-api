import { ProcessedLink } from "@/app/lib/definitions";
import CopyButton from "./ui/CopyButton";

function LinkItem({ url, shortLink }: ProcessedLink) {
  return (
    <li className="rounded-md bg-white p-4 lg:flex lg:items-center lg:gap-6 lg:px-6 lg:py-4">
      <p
        aria-label="Old Link"
        className="truncate tracking-[-0.01em] text-neutral-very-dark-blue lg:basis-full lg:text-xl lg:leading-[1.875rem] lg:tracking-[0.005em]"
      >
        {/* original link */}
        {url}
      </p>
      <hr aria-hidden="true" className="my-[0.663rem] lg:hidden" />
      <p
        aria-label="New Link"
        className="tracking-[-0.01em] text-primary-cyan lg:w-full lg:text-right lg:text-xl lg:leading-[1.875rem] lg:tracking-[0.005em]"
      >
        {/* generated link */}
        {shortLink}
      </p>
      <CopyButton
        valueToCopy={shortLink}
        className="mt-[0.813rem] h-10 w-full rounded-md lg:mt-0 lg:w-min lg:max-w-[6.438rem] lg:px-[1.87rem]"
      />
    </li>
  );
}

export default LinkItem;
