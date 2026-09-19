/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    AOS?: {
      init: (opts?: any) => void;
      refresh: () => void;
      refreshHard?: () => void;
    };
    Swiper?: any;
  }
}

function initSwipers(): boolean {
  if (!window.Swiper) return false;

  const els = document.querySelectorAll<HTMLElement>(".swiper[data-swiper-options]");
  if (!els.length) return true; // nothing to do, but no error

  els.forEach((el) => {
    // prevent double init
    if ((el as any).swiper) return;

    let opts: any = {};
    try {
      opts = JSON.parse(el.dataset.swiperOptions || "{}");
    } catch {
      opts = {};
    }

    try {
      new window.Swiper(el, opts);
    } catch {
      // ignore init errors so one bad slider doesn't break the page
    }
  });

  return true;
}

export default function ClientBoot() {
  useEffect(() => {
    // Bootstrap JS (dropdowns / collapse / accordions)
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    } catch {}

    // AOS: template CSS sets [data-aos] to opacity:0 until init runs
    const initAos = () => {
      if (!window.AOS) return false;

      window.AOS.init({
        duration: 700,
        offset: 180,
        once: true,
      });

      window.AOS.refreshHard?.();
      window.AOS.refresh?.();
      return true;
    };

    // try now
    const aosOk = initAos();
    const swiperOk = initSwipers();
    if (aosOk && swiperOk) return;

    // retry (covers script load timing + delayed DOM)
    let tries = 0;
    const t = window.setInterval(() => {
      tries += 1;

      const a = initAos();
      const s = initSwipers();

      if ((a && s) || tries > 40) window.clearInterval(t); // ~4s max
    }, 100);

    return () => window.clearInterval(t);
  }, []);

  return null;
}