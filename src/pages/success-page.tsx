import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export const SuccessPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
        <div className="flex justify-center mb-6">
          <CheckCircleIcon className="w-24 h-24 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Tabriklaymiz!
        </h1>
        
        <p className="text-gray-600 text-lg mb-6">
          Sizning buyurtmangiz muvaffaqiyatli amalga oshirildi. 
          Tez orada mahsulotlaringiz yetkazib beriladi!
        </p>
        
        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Bosh sahifaga qaytish
          </Link>
          
          <Link
            to="/favorites"
            className="block w-full border border-primary text-primary py-3 px-6 rounded-lg hover:bg-primary/10 transition-colors"
          >
            Xarid qilishni davom ettirish
          </Link>
        </div>
      </div>
    </div>
  );
};
