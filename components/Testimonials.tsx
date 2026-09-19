/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { SiteCopy } from "@/lib/siteCopy";

declare global {
  interface Window {
    Swiper?: any;
  }
}

export default function Testimonials({ copy }: { copy: SiteCopy }) {
  const items = copy.testimonials.items;
  const [active, setActive] = useState(0);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const fallbackSwiper = useRef<any>(null);

  const activePerson = useMemo(() => items[active % items.length], [active, items]);

  // IMPORTANT: provide options so theme.min.js won't crash
  const swiperOptions = useMemo(
    () =>
      JSON.stringify({
        spaceBetween: 40,
        loop: true,
        autoHeight: true,
        navigation: {
          prevEl: "#prev-testimonial",
          nextEl: "#next-testimonial",
        },
      }),
    []
  );

useEffect(() => {
  const el = sliderRef.current;
  if (!el) return;

  let cancelled = false;
  let timer: number | undefined;

  let boundSwiper: any = null;
  let handler: (() => void) | null = null;

  const bind = (swiper: any) => {
    boundSwiper = swiper;

    handler = () => {
      setActive(swiper.realIndex ?? swiper.activeIndex ?? 0);
    };

    // set initial
    handler();

    // remove then add (requires handler reference!)
    swiper.off?.("realIndexChange", handler);
    swiper.off?.("slideChange", handler);
    swiper.off?.("slideChangeTransitionEnd", handler);

    swiper.on?.("realIndexChange", handler);
    swiper.on?.("slideChange", handler);
    swiper.on?.("slideChangeTransitionEnd", handler);
  };

  const tryAttach = () => {
    if (cancelled) return;

    const swiper = (el as any).swiper;
    if (swiper) {
      bind(swiper);
      return;
    }

    // wait until ClientBoot initializes it
    timer = window.setTimeout(tryAttach, 50);
  };

  tryAttach();

  return () => {
    cancelled = true;
    if (timer) window.clearTimeout(timer);

    if (boundSwiper && handler) {
      boundSwiper.off?.("realIndexChange", handler);
      boundSwiper.off?.("slideChange", handler);
      boundSwiper.off?.("slideChangeTransitionEnd", handler);
    }
  };
}, [items.length]);

  return (
    <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5" id="testimonials">
      <div className="row pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-md-2">
        <div className="col-md-9 col-lg-7 order-md-2">
          <div
            className="swiper swiper-autoheight"
            ref={sliderRef}
            data-swiper-options={swiperOptions}
          >
            <div className="swiper-wrapper">
              {items.map((t, idx) => (
                <div className="swiper-slide" key={`${t.name}-${idx}`}>
                  <div className="d-flex d-md-none pt-3 mb-3">
                    <i className="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
                    <div className="ps-3">
                      <h3 className="h5 mb-0">{t.name}</h3>
                      <p className="text-body-secondary mb-0">{t.role}</p>
                    </div>
                  </div>

                  <h2 className="mb-lg-4">{t.headline}</h2>
                  <p className="lead mb-0">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-3 offset-lg-1 order-md-1 mt-n3">
          <i className="ai-quotes d-none d-md-block text-primary ms-n2 mb-1" style={{ fontSize: 150 }} />

          <div className="h-auto d-none d-md-block">
            <h3 className="h5 mb-1">{activePerson.name}</h3>
            <p className="text-body-secondary mb-0">{activePerson.role}</p>
          </div>

          <div className="d-flex align-items-center pb-2 pb-md-0 pt-4 mt-3">
            <button
              id="prev-testimonial"
              className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3"
              type="button"
              aria-label="Previous testimonial"
            >
              <i className="ai-arrow-left" />
            </button>

            <div className="fw-medium flex-shrink-0 text-center" style={{ width: "3.5rem" }}>
              {((active % items.length) + 1).toString()} / {items.length}
            </div>

            <button
              id="next-testimonial"
              className="btn btn-icon btn-sm btn-outline-primary rounded-circle ms-3"
              type="button"
              aria-label="Next testimonial"
            >
              <i className="ai-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}