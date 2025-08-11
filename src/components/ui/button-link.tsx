import { cn } from "@/lib/utils";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline";
}

export const ButtonLink = ({
  className,
  size = "default",
  variant = "default",
  ...props
}: ButtonLinkProps) => {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-colors",
        "bg-[#0070F3] hover:bg-[#0056D8] text-white font-medium",
        size === "default" && "h-10 px-6 py-2",
        size === "sm" && "h-8 px-4 text-sm",
        size === "lg" && "h-12 px-8 text-lg",
        variant === "outline" && "bg-transparent border-2 border-[#0070F3] hover:bg-[#0070F3]/10",
        className
      )}
      {...props}
    />
  );
};