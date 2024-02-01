// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function LinkCardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-md bg-white p-4 lg:flex lg:items-center lg:gap-6 lg:px-6 lg:py-4`}
    >
      <div className="h-6 truncate rounded-md bg-gray-200 tracking-[-0.01em] lg:h-10 lg:basis-full lg:text-xl lg:leading-[1.875rem] lg:tracking-[0.005em]"></div>
      <hr className="invisible my-[0.663rem] lg:hidden" />
      <div className="h-6 rounded-md bg-gray-200 tracking-[-0.01em] lg:h-10 lg:w-full lg:text-right lg:text-xl lg:leading-[1.875rem] lg:tracking-[0.005em]"></div>
      <div className="mt-[0.813rem] h-10 w-full rounded-md bg-gray-200 lg:mt-0 lg:w-min lg:min-w-[6.438rem] lg:px-[1.87rem]"></div>
    </div>
  );
}
