import { ProcessedLink } from "@/app/lib/definitions";
import { LinkCardSkeleton } from "@/app/ui/skeletons";
import LinkItem from "./LinkItem";

function renderListSkeleton(val: number) {
  return new Array(val).fill("").map((_, i) => <LinkCardSkeleton key={i} />);
}

type Props = {
  links: ProcessedLink[];
  isPending: boolean;
  isLsPending: boolean;
  linksToRender: number;
};

export default function LinkList({
  links,
  isPending,
  isLsPending,
  linksToRender,
}: Props) {
  const sortedLinks = [...links].reverse();

  return (
    <>
      <h2 id="section-heading-2" className="sr-only">
        List of Links
      </h2>
      <ul className="links-spacing flex flex-col gap-6 lg:gap-4">
        {isPending && <LinkCardSkeleton />}
        {isLsPending && linksToRender > 0 && renderListSkeleton(linksToRender)}
        {sortedLinks.map((link) => (
          <LinkItem key={link.id} {...link} />
        ))}
      </ul>
    </>
  );
}
