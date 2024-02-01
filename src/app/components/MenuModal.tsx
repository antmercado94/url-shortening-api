import Link from "next/link";
import Button from "@/app/ui/button";
import { cn } from "@/app/utils/cn";

type Props = {
  isMenuToggled: boolean;
};

export default function MenuModal({ isMenuToggled }: Props) {
  return (
    <nav
      id="mobile-nav"
      aria-label="Main"
      className={cn(
        "absolute -top-[30rem] z-50 w-full rounded-lg bg-primary-dark-violet px-6 py-10 transition-transform duration-300 sm:px-24 sm:py-12",
        {
          "translate-y-[30rem]": isMenuToggled,
          "-translate-y-[30rem]": !isMenuToggled,
        },
      )}
    >
      <ul className="menu-items flex flex-col items-center gap-[1.875rem]">
        <li>
          <Link href="#">Features</Link>
        </li>
        <li>
          <Link href="#">Pricing</Link>
        </li>
        <li>
          <Link href="#">Resources</Link>
        </li>
      </ul>
      <hr aria-hidden="true" className="my-[1.875rem] opacity-15" />
      <ul className="menu-items flex flex-col items-center gap-[1.563rem]">
        <li>
          <Link href="#">Login</Link>
        </li>
        <li className="w-full">
          <Button size={"full"}>Sign Up</Button>
        </li>
      </ul>
    </nav>
  );
}
