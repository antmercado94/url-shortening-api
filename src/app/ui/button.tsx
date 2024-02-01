import { forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/utils/cn";

export const buttonVariants = cva(
  "flex items-center justify-center rounded-full font-bold transition-colors bg-primary-cyan text-white hover:bg-[hsla(179,56%,75%,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-[hsl(257,27%,45%)]",
  {
    variants: {
      variant: {
        default: "aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        copy: "aria-disabled:bg-primary-dark-violet aria-disabled:cursor-default",
      },
      size: {
        default: "h-[3.563rem] text-xl px-[2.55rem]",
        sm: "h-10 tracking-[-0.01em] px-6",
        lg: "lg:rounded-lgr h-12 rounded-md text-lg lg:h-16 lg:min-w-[11.75rem] lg:text-xl",
        full: "h-12 w-full sm:h-14 sm:text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  as?: "button" | "a";
  type?: "button" | "submit" | "reset";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      variant,
      size,
      as: Component = "button",
      ...rest
    } = props;
    const btnProps = { ...ref, ...rest };

    return (
      <Component
        {...btnProps}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </Component>
    );
  },
);
Button.displayName = "Button";

export default Button;
