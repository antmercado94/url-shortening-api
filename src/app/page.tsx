import { cookies } from "next/headers";
import Image from "next/image";
import heroImg from "@/public/illustration-working.svg";
import bannerImgMobile from "@/public/bg-boost-mobile.svg";
import bannerImgDesktop from "@/public/bg-boost-desktop.svg";
import Links from "./components/ShortenLinks";
import Cards from "./components/Cards";
import Button from "./ui/button";

export default function Home() {
  const cookieStore = cookies();
  const numberOfLinks = cookieStore.get("items")?.value;

  return (
    <main id="main-content">
      <section
        aria-labelledby="section-heading-1"
        className="relative overflow-x-hidden"
        tabIndex={-1}
      >
        {/* hero */}
        <div className="page-margin mt-6 flex flex-col-reverse items-start gap-[max(2.5rem,6.7vw)] md:items-center md:gap-[min(4rem,7.7vw)] lg:mt-[4.875rem] lg:flex-row lg:items-center lg:gap-[2vw] xl:gap-[3vw] 2xl:gap-[4.375rem] 1.5xl:gap-[5.375rem]">
          {/* hero content */}
          <div className="mx-auto flex flex-col items-center gap-3 text-center lg:items-start lg:gap-0 lg:text-left">
            <h1 id="section-heading-1" className="sr-only">
              More than just shorter links
            </h1>
            <h1 aria-hidden="true" className="heading-1">
              More than just{" "}
              <span className="xs:inline-block">shorter links</span>
            </h1>
            <p className="body-text">
              Build your brand&#x2019;s recognition and get detailed insights on
              how your links are performing.
            </p>
            <Button
              as="a"
              className="mt-[1.125rem] lg:mt-[2.188rem]"
              href="#content-container"
            >
              Get Started
            </Button>
          </div>
          {/* hero image */}
          <div className="lg:w-4 lg:min-w-[38%] xl:min-w-[40%] 2xl:h-[37.5rem] 2xl:min-w-[42%] 3xl:h-[40.625rem] 3xl:min-w-[40%]">
            <Image
              priority
              src={heroImg}
              alt="A clipart illustration of a person sitting at a desk using a computer."
              className="min-w-[522px] lg:min-w-fit 2xl:h-full"
            />
          </div>
        </div>
      </section>
      <div>
        <div className="overflow-y-fix relative overflow-y-hidden">
          <div className="page-margin" id="content-container">
            <div>
              <Links linksToRender={numberOfLinks} />
              {/* advanced statistics */}
              <section
                aria-labelledby="section-heading-3"
                className="section-margin"
              >
                <div className="mt-[5.375rem] flex flex-col gap-[6.063rem] pb-20 text-center lg:mt-[7.375rem] lg:pb-[7.563rem]">
                  <div className="flex flex-col items-center gap-4 lg:gap-[0.625rem]">
                    <h3 id="section-heading-3" className="heading-3">
                      Advanced Statistics
                    </h3>
                    <p className="max-w-[30rem] leading-7 text-neutral-grayish-violet md:max-w-[32rem] md:text-lg md:leading-8">
                      Track how your links are performing across the web with
                      our advanced statistics dashboard.
                    </p>
                  </div>
                  <Cards />
                </div>
              </section>
            </div>
            {/* bg */}
            <div className="full-width--hero bg-neutral-very-light-gray"></div>
          </div>
        </div>
        {/* banner */}
        <section aria-labelledby="section-heading-4">
          <div className="full-width bg-primary-dark-violet">
            <div className="relative z-50 mx-4 flex flex-col items-center gap-4 py-[5.8rem] xs:mx-0 md:gap-[1.313rem] md:py-14">
              <h4 id="section-heading-4" className="heading-3--alt text-center">
                Boost your links today
              </h4>
              <Button as="a" href="#content-container">
                Get Started
              </Button>
            </div>
            {/* banner bg */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 z-0 h-full w-full"
            >
              <Image
                src={bannerImgMobile}
                alt=""
                fill
                priority
                className="object-cover lg:hidden"
              />
              <Image
                src={bannerImgDesktop}
                alt=""
                fill
                priority
                className="hidden object-cover lg:block"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
