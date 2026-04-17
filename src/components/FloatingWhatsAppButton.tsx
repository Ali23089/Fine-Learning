import React from "react";

export default function FloatingWhatsAppButton() {
  const whatsappLink = "https://wa.me/447984084470"; // Updated phone number

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 text-white p-3 sm:p-4 md:p-5 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      {/* WhatsApp Icon as SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.74 5.51 2.03 7.84L0 32l8.48-2.03A15.91 15.91 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.41 23.59c-.35.98-2.04 1.91-2.82 1.98-.72.06-1.62.28-5.57-1.17-4.69-1.84-7.67-6.39-7.9-6.69-.22-.3-1.88-2.5-1.88-4.77 0-2.28 1.19-3.41 1.62-3.88.35-.41.94-.5 1.25-.5.3 0 .62.01.88.02.28.01.66-.11 1.03.78.35.88 1.2 3.03 1.3 3.25.1.22.18.5.03.8-.15.3-.22.5-.44.78-.22.28-.47.62-.68.83-.22.22-.45.46-.2.9.25.44 1.1 1.8 2.37 2.9 1.63 1.44 3.02 1.88 3.47 2.1.44.22.7.18.96-.1.28-.3 1.1-1.28 1.4-1.72.3-.44.6-.37 1.03-.22.44.15 2.8 1.32 3.28 1.56.47.22.78.37.9.57.1.2.1 1.15-.25 2.13z" />
      </svg>
    </a>
  );
}