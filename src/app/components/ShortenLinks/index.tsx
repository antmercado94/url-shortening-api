"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { type ProcessedLink } from "@/app/lib/definitions";
import { getLocalStorage } from "@/app/lib/data";
import Input from "./Input";
import LinkList from "./LinkList";
import formImgMobile from "@/public/bg-shorten-mobile.svg";
import formImgDesktop from "@/public/bg-shorten-desktop.svg";

type Props = {
  linksToRender: string | undefined;
};

export default function ShortenLinks({ linksToRender }: Props) {
  const [links, setLinks] = useState<ProcessedLink[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isLsPending, setIsLsPending] = useState<boolean>(!!linksToRender);
  const MAX_DUMMY_LINKS: number = linksToRender ? +linksToRender : 0;

  /** Get LS */
  useEffect(() => {
    const lsLinks = getLocalStorage();
    if (!lsLinks || !lsLinks.length) return;

    setLinks(lsLinks);
    setIsLsPending(false);
  }, []);

  return (
    <>
      <section aria-label="Shorten a Link" className="section-margin">
        {/* form */}
        <div className="relative mt-[5.5rem] rounded-lg bg-primary-dark-violet p-6 lg:mt-[4.25rem] lg:rounded-lgr lg:px-16 lg:py-[3.25rem]">
          <Input
            links={links}
            setLinks={setLinks}
            setIsPending={setIsPending}
          />
          {/* form bg img */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 z-0 rounded-tr-lg lg:h-full lg:w-full lg:rounded-r-lgr lg:rounded-bl-lgr"
          >
            <Image
              src={formImgMobile}
              alt=""
              priority
              className="rounded-tr-lg lg:hidden"
            />
            <Image
              src={formImgDesktop}
              alt=""
              fill
              priority
              className="hidden rounded-r-lgr rounded-bl-lgr object-cover lg:block"
            />
          </div>
        </div>
      </section>
      {/* list */}
      <section
        aria-labelledby="section-heading-2"
        className="section-margin"
        aria-live="polite"
        aria-atomic="true"
        aria-busy={isPending}
      >
        <LinkList
          links={links}
          isPending={isPending}
          isLsPending={isLsPending}
          linksToRender={MAX_DUMMY_LINKS}
        />
      </section>
    </>
  );
}
