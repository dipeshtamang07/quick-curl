import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div className={cn("h-full w-full px-2 md:px-36 max-w-screen-2xl mx-auto", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
