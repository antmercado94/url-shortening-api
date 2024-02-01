import Image from "next/image";
import Link from "next/link";
import { pageLinksData, socialLinksData } from "@/app/lib/links-data";
import logoAltImg from "@/public/logo-alt.svg";
import getSocialIcon from "@/app/utils/getSocialIcon";

export default function Footer() {
  return (
    <footer>
      <div className="page-margin flex flex-col items-center gap-12 pt-[3.375rem] md:flex-row md:items-start md:justify-between md:pb-[4.438rem] md:pt-[4.438rem]">
        {/* logo */}
        <div>
          <Image priority src={logoAltImg} alt="Shortly website logo" />
        </div>
        {/* links */}
        <div className="flex flex-col gap-[2.938rem] md:flex-row md:gap-0 xl:gap-[2.063rem]">
          {/* page links */}
          <section
            id="footer-nav"
            role="navigation"
            aria-label="Footer"
            className="flex flex-col items-center gap-[2.375rem] md:mb-0 md:flex-row md:items-start md:gap-4 xl:gap-10"
          >
            {pageLinksData.map(({ heading, links }) => (
              <ul
                key={heading}
                aria-label={heading}
                className="list-heading list-items flex flex-col gap-[0.563rem] text-center before:mb-3 before:block before:content-[attr(aria-label)] md:w-[max(7rem,14vw)] md:text-left lg:w-[min(9.375rem,13vw)]"
              >
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </section>
          {/* social media links */}
          <section id="socials" aria-label="Social Media Links">
            <ul className="mb-14 flex items-center gap-6 md:gap-[min(1.5rem,2.3vw)] xl:gap-6">
              {socialLinksData.map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    className="group"
                    aria-label={`Follow us on ${link.name}`}
                  >
                    {getSocialIcon(link.name)}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
