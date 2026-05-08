import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-foreground focus-visible:ring-0 disabled:cursor-not-allowed disabled:bg-secondary disabled:text-[color:var(--stone)] disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-0 md:text-sm",
        className
      )}
      {...props} />
  );
}

export { Textarea }
