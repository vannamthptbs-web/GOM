
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.tsx';
import AdminLoginModal from './AdminLoginModal.tsx';

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-brand-sand">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-brand-clay text-white w-10 h-10 rounded-lg flex items-center justify-center text-2xl shadow-inner">
              🏺
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-terracotta leading-none">
                MỸ THIỆN
              </h1>
              <p className="text-[10px] md:text-xs text-brand-dark tracking-[0.2em] font-bold uppercase mt-1">Làng gốm Quảng Ngãi</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-dark">
            <a href="#gioi-thieu" className="hover:text-brand-clay transition-colors">Câu chuyện</a>
            <a href="#quy-trinh" className="hover:text-brand-clay transition-colors">Quy trình</a>
            <a href="#san-pham" className="hover:text-brand-clay transition-colors">Bộ sưu tập</a>
            <a href="#sang-tao" className="bg-brand-clay text-white px-4 py-2 rounded-full hover:bg-brand-terracotta transition-colors shadow-sm">Xưởng AI</a>
          </nav>

          <div>
            {isLoggedIn ? (
              <button
                onClick={logout}
                className="text-sm font-bold text-brand-accent border-2 border-brand-accent hover:bg-brand-accent hover:text-white py-2 px-5 rounded-full transition-all"
              >
                Đăng xuất
              </button>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-sm font-bold text-brand-clay hover:text-brand-terracotta py-2 px-4 transition-colors"
              >
                Quản trị viên
              </button>
            )}
          </div>
        </div>
      </header>
      {!isLoggedIn && <AdminLoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Header;
