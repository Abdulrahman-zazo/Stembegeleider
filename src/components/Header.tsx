import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import { LanguageSelector } from './LanguageSelector';
import Logos from './Logos';

interface HeaderProps {
  sections: Array<{ id: string; title: string }>;
  currentSectionIndex: number;
  onSectionSelect: (index: number) => void;
  showFinalScreen?: boolean;
  showWelcome?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ sections, currentSectionIndex, onSectionSelect }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSectionSelect = (index: number) => {
    onSectionSelect(index);
    setMenuOpen(false);
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm" dir='rtl'>
      <div className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 gap-2 sm:gap-4 `}>
        
        {/* Menu Button - Always Visible */}
        <div className='flex items-center gap-2'>
        <div className={`relative  shrink-0  `}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors active:bg-muted/80"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            title={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div
              className={`absolute  mt-2 bg-background border border-border rounded-lg shadow-xl z-50 min-w-64 max-h-96 overflow-y-auto`}
            >
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionSelect(index)}
                  className={`w-full px-4 py-3 hover:bg-muted transition-colors text-${isRTL ? 'right' : 'left'} border-b border-border last:border-b-0 ${
                    currentSectionIndex === index ? 'bg-primary text-background font-semibold' : 'text-foreground'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          )}
        </div>
            <div className={`flex items-center gap-2 shrink-0 ${isRTL ? 'order-2' : 'order-3'}`}>
          <LanguageSelector />
        </div></div>

        {/* Logos - Hidden on very small screens */}
        <div className={` sm:block shrink-0 `}>
          <Logos />
        </div>

   
      
      </div>
    </header>
  );
};