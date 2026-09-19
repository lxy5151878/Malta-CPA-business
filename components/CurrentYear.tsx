"use client";

import { useSyncExternalStore } from "react";

function subscribeToYearChange(onStoreChange: () => void) {
  const now = new Date();
  const nextYear = new Date(now.getFullYear() + 1, 0, 1);
  const timeout = window.setTimeout(onStoreChange, nextYear.getTime() - now.getTime());

  return () => window.clearTimeout(timeout);
}

function getCurrentYear() {
  return new Date().getFullYear();
}

export default function CurrentYear() {
  const year = useSyncExternalStore(subscribeToYearChange, getCurrentYear, getCurrentYear);

  return <>{year}</>;
}
