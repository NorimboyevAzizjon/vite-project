import { Link } from "react-router-dom";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t mt-10">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Biz haqimizda */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-900">
              Biz haqimizda
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-primary transition text-sm"
                >
                  Topshirish punktlari
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-primary transition text-sm"
                >
                  Vakansiyalar
                </Link>
              </li>
            </ul>
          </div>

          {/* Foydalanuvchilarga */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-900">
              Foydalanuvchilarga
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-primary transition text-sm"
                >
                  Biz bilan bog'lanish
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-primary transition text-sm"
                >
                  Savol-Javob
                </Link>
              </li>
            </ul>
          </div>

          {/* Tadbirkorlarga */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-900">
              Tadbirkorlarga
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-primary transition text-sm"
                >
                  Uzumda soting
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-primary transition text-sm"
                >
                  Sotuvchi kabinetiga kirish
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-primary transition text-sm"
                >
                  Topshirish punktini ochish
                </Link>
              </li>
            </ul>
          </div>

          {/* Ilovani yuklab olish */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-900">
              Ilovani yuklab olish
            </h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:border-gray-400 transition"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-sm font-medium">AppStore</span>
              </a>
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:border-gray-400 transition"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 01-.609-1.606V3.42c0-.614.224-1.18.609-1.606z" />
                  <path fill="#34A853" d="M17.556 8.235l-3.764 3.765 3.764 3.765 4.257-2.427c.709-.404 1.187-1.158 1.187-1.99 0-.832-.478-1.586-1.187-1.99l-4.257-2.123z" />
                  <path fill="#FBBC04" d="M3.609 1.814c.155-.178.345-.33.564-.445L14.91 7.118l-1.118 1.117L3.609 1.814z" />
                  <path fill="#EA4335" d="M14.91 16.882L4.173 22.631a1.904 1.904 0 01-.564-.445l10.183-6.421 1.118 1.117z" />
                </svg>
                <span className="text-sm font-medium">Google Play</span>
              </a>
            </div>

            <h4 className="text-sm font-medium mb-3 text-gray-900">
              Uzum ijtimoiy tarmoqlarda
            </h4>
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                }}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Telegram */}
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.89z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1877f2] rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#ff0000] rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link
              to="/"
              className="text-primary hover:underline font-medium border-b-2 border-primary pb-1"
            >
              Maxfiylik kelishuvi
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary">
              Foydalanuvchi kelishuvi
            </Link>
            <span className="text-gray-600 text-xs md:text-sm">
              SHAXSIY MA'LUMOTLARNI QAYTA ISHLASH NIZOMI «UZUM MARKET» MCHJ XK
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-xs">
              «{new Date().getFullYear()}© XK MCHJ «UZUM MARKET». STIR
              309376127. Barcha huquqlar himoyalangan»
            </span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition"
            >
              <ChevronUpIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
