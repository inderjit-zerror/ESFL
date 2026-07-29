"use client";

import { FaWhatsapp } from "react-icons/fa6";

/**
 * Floating WhatsApp chat button.
 *
 * Usage: drop <WhatsAppButton /> once near the root of your layout
 * (e.g. in app/layout.jsx alongside <Header /> and children).
 */
export default function WhatsAppButton({
  phone = "919999999999", // country code + number, no + sign, no spaces/dashes
  message = "Hi! I'd like to know more about your products.",
}) {
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-110"
    >
      {/* Ping animation ring */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>

      <FaWhatsapp size={30} className="relative text-white" />
    </a>
  );
}