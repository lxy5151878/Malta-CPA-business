/* eslint-disable @next/next/no-img-element */

type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
};

export const BRAND_NAME = "XLOU & ASSOCIATES";
export const LEGAL_NAME = "XLOU & ASSOCIATES";

export default function BrandMark({ inverse = false, compact = false, className = "" }: BrandMarkProps) {
  return (
    <span
      className={`brand-mark${inverse ? " brand-mark--inverse" : ""}${compact ? " brand-mark--compact" : ""}${className ? ` ${className}` : ""}`}
      aria-label={BRAND_NAME}
    >
      <img
        className="brand-mark__image"
        src="/assets/xlou-associates-logo.png"
        alt=""
        width="1200"
        height="199"
      />
    </span>
  );
}
