import React from "react";

export default function WhatsAppButton() {
  const whatsAppNumber = "5548991575656";
  const message = "Olá! Gostaria de falar com um assessor da Scalle X para entender como escalar minhas vendas nos marketplaces.";
  const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-45 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:shadow-[0_0_30px_rgba(37,211,102,0.85)] transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Fale conosco no WhatsApp"
      id="floating-whatsapp-btn"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-white transition-transform duration-300 group-hover:rotate-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.99C16.246 1.875 13.763 1.043 11.13 1.043c-5.438 0-9.863 4.42-9.867 9.864-.001 1.73.457 3.41 1.32 4.931l-.995 3.635 3.723-.976zm12.114-5.3c-.29-.145-1.713-.847-1.978-.943-.264-.096-.458-.145-.65.145-.19.29-.74.943-.907 1.135-.166.19-.333.213-.623.069-.29-.145-1.22-.449-2.324-1.432-.857-.764-1.436-1.708-1.604-1.998-.168-.29-.018-.446.127-.59.13-.13.29-.338.435-.507.145-.169.193-.29.29-.483.097-.193.048-.361-.024-.507-.072-.145-.65-1.566-.89-2.146-.234-.564-.471-.487-.65-.496l-.554-.01c-.19 0-.498.07-.759.362-.26.29-1.01 1.157-1.01 2.82 0 1.663 1.21 3.27 1.376 3.492.166.222 2.38 3.635 5.766 5.093.805.347 1.433.553 1.923.709.808.257 1.543.221 2.125.134.648-.097 1.714-.7 1.957-1.376.244-.676.244-1.255.17-1.376-.073-.12-.265-.192-.555-.337z" />
      </svg>
      
      {/* Dynamic tech-glow ripple ring вокруг кнопки */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-40 pointer-events-none scale-105" />
    </a>
  );
}
