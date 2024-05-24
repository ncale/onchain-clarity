import * as React from "react";

import { cn } from "@/lib/utils";

const InlinePill = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("inline-block rounded-lg px-1", className)}
    {...props}
  />
));
InlinePill.displayName = "InlinePill";

export { InlinePill };
