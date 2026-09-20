"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventLocation: string;
  children: ReactNode;
};

export default function TrackedLink({ eventName, eventLocation, children, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent(eventName, { link_location: eventLocation });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}

