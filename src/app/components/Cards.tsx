import Image from "next/image";
import cardsData from "@/app/lib/cards-data";

export default function Cards() {
  return (
    <div className="cards-presentation flex flex-col gap-[5.625rem] lg:flex-row lg:gap-6 xl:gap-[1.875rem]">
      {cardsData.map(({ img, title, description }, i) => (
        <article
          key={i}
          className="relative mx-auto flex max-w-[21.875rem] flex-col items-center gap-[0.875rem] rounded-lg bg-white px-4 pb-[1.9rem] text-black xs:px-[1.6rem] xs:pb-10 md:max-w-[24rem] md:pb-12 lg:mx-0 lg:max-w-none lg:px-[1.125rem] lg:pb-8 lg:text-left xl:items-start xl:pb-10 xl:pl-8 xl:pr-[1.875rem]"
          style={{ "--step": i } as React.CSSProperties}
        >
          {/* icon */}
          <div
            aria-hidden="true"
            className="absolute -top-[2.65rem] flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-primary-dark-violet"
          >
            <Image src={img} alt="" />
          </div>
          {/* title */}
          <h3 className="card-heading mt-[4.813rem] md:mt-[4.8rem] lg:mt-[4.5rem] xl:mt-[4.813rem]">
            {title}
          </h3>
          {/* description */}
          <p className="card-text">{description}</p>
        </article>
      ))}
    </div>
  );
}
