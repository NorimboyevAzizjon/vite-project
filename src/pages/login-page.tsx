import { useState } from 'react';
import { useAuth } from '../context/auth.context';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  
  const { signIn, signUp, isConfigured } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = (location.state as { from?: string })?.from || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConfigured) {
      toast.error('Supabase sozlanmagan. .env faylini tekshiring.');
      return;
    }
    
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password);
        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Ro'yxatdan o'tish muvaffaqiyatli! Email tasdiqlang.");
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          toast.error(error.message);
        } else {
          toast.success('Muvaffaqiyatli kirdingiz!');
          navigate(from, { replace: true });
        }
      }
    } catch {
      toast.error("Xatolik yuz berdi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignUp ? "Ro'yxatdan o'tish" : 'Kirish'}
        </h2>
        
        {!isConfigured && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4 flex items-start gap-3">
            <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div className="text-sm text-yellow-800">
              <p className="font-medium">Supabase sozlanmagan!</p>
              <p className="mt-1">.env faylida VITE_SUPABASE_URL va VITE_SUPABASE_ANON_KEY ni to'ldiring.</p>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="email@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Parol
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading || !isConfigured}
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Yuklanmoqda...' : isSignUp ? "Ro'yxatdan o'tish" : 'Kirish'}
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary hover:underline"
          >
            {isSignUp ? 'Akkauntingiz bormi? Kirish' : "Akkauntingiz yo'qmi? Ro'yxatdan o'tish"}
          </button>
        </div>
        
        <div className="mt-4 text-center">
          <Link to="/" className="text-gray-500 hover:underline text-sm">
            ← Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
};
