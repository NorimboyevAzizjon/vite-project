
const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-2">Biz haqimizda</h3>
          <ul className="space-y-1 text-gray-500">
            <li>Topshirish punktlari</li>
            <li>Vakansiyalar</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Foydalanuvchilarga</h3>
          <ul className="space-y-1 text-gray-500">
            <li>Biz bilan bog'lanish</li>
            <li>Savol-Javob</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Tadbirkorlarga</h3>
          <ul className="space-y-1 text-gray-500">
            <li>Uzumda soting</li>
            <li>Sotuvchi kabinetiga kirish</li>
            <li>Topshirish punktini ochish</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Ilovani yuklab olish</h3>
          <div className="flex items-center gap-4 mb-4">
            <a href="https://apps.apple.com/uz/app/uzum-market/id1643612600" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-app-store fa-2x"></i>
            </a>
            <a href="https://play.google.com/store/apps/details?id=uz.uzum.app" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-google-play fa-2x"></i>
            </a>
          </div>
          <h3 className="font-bold mb-2">Uzum ijtimoiy tarmoqlarda</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://instagram.com/uzum.market" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram fa-2x" style={{ color: '#E4405F' }}></i>
            </a>
            <a href="https://t.me/uzum_market" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-telegram fa-2x" style={{ color: '#229ED9' }}></i>
            </a>
            <a href="https://facebook.com/uzummarket" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook fa-2x" style={{ color: '#1877F3' }}></i>
            </a>
            <a href="https://youtube.com/@uzummarket" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube fa-2x" style={{ color: '#FF0000' }}></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
