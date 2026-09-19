// components/FloatingWhatsApp.tsx
type Props = {
  /** Digits only, with country code. Example: "35699123456" */
  phone: string;
  message?: string;
};

export default function FloatingWhatsApp({ phone, message }: Props) {
  const clean = (phone || "").replace(/[^\d]/g, "");
  if (!clean) return null;

  const url = `https://wa.me/${clean}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="btn btn-success btn-icon btn-lg rounded-circle shadow position-fixed"
      style={{
        right: 18,
        bottom: 18,
        zIndex: 1030, // above most UI
        width: 56,
        height: 56,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* If your Around icons include WhatsApp, this will work */}
      <i className="ai-whatsapp fs-3" />

      {/* If you DON'T have ai-whatsapp, replace the <i> above with this SVG:
      <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.53c-.23-.11-1.37-.68-1.58-.76-.21-.08-.37-.11-.52.11-.15.23-.6.76-.74.92-.14.15-.27.17-.5.06-.23-.11-.97-.36-1.85-1.15-.68-.61-1.14-1.37-1.28-1.6-.13-.23-.01-.35.1-.46.1-.1.23-.27.35-.4.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.11-.52-1.26-.71-1.72-.19-.46-.38-.4-.52-.41h-.44c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9 0 1.12.82 2.2.93 2.35.11.15 1.61 2.46 3.89 3.45.54.23.97.37 1.3.47.55.18 1.05.15 1.45.09.44-.07 1.37-.56 1.56-1.11.19-.55.19-1.02.13-1.11-.06-.09-.21-.15-.44-.26z" />
        <path d="M26.67 5.33A14.56 14.56 0 0 0 16.01 1C8.01 1 1.5 7.51 1.5 15.51c0 2.55.67 5.03 1.95 7.22L1 31l8.41-2.4a14.5 14.5 0 0 0 6.6 1.59h.01c8 0 14.51-6.51 14.51-14.51 0-3.87-1.51-7.51-4.36-10.35zM16.01 27.7h-.01a12.1 12.1 0 0 1-6.17-1.7l-.44-.26-4.99 1.42 1.33-4.86-.29-.5a12.07 12.07 0 0 1-1.85-6.29C3.59 9.02 9.52 3.1 16 3.1c3.22 0 6.24 1.25 8.52 3.53a11.98 11.98 0 0 1 3.54 8.54c0 6.48-5.93 12.53-12.05 12.53z"/>
      </svg>
      */}
    </a>
  );
}