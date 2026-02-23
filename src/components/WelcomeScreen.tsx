import React from 'react';
import { useTranslation } from 'react-i18next';
import type { WelcomeSection } from '@/types/index';

interface WelcomeScreenProps {
  section: WelcomeSection;
  onNext: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ section, onNext }) => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className='flex justify-center m-auto items-center'>

   
    <div className="flex-1 overflow-y-auto flex  justify-center  " dir={isRTL ? 'rtl' : 'ltr'}
 >

   

      <div className="max-w-2xl mx-auto px-4 py-8 text-center w-full">
        {/* Welcome Title */}
        <h1 className="text-3xl sm:text-5xl  font-semibold text-primary mb-2 sm:mb-8">
          {section.title}
        </h1>

        {/* Welcome Description */}
        <p className="text-base sm:text-2xl text-foreground mb-4 sm:mb-12 whitespace-pre-line leading-relaxed">
          {section.description}
        </p>

        {/* Hello Breda Attribution */}
        <div className="bg-accent/10 border border-secondary rounded-lg p-4 sm:p-2 mb-4 sm:mb-12">
          <p className="text-sm sm:text-base text-foreground mb-1">
            {t('welcome.attribution', 'This site is a translation of')} <strong>Hello Breda</strong>
          </p>
          <p className="text-sm sm:text-sm text-muted-foreground mb-1 inline">
            {t('welcome.visitOriginal', 'Visit the original site')}:    <a
            href="https://stembegeleider.prodemos.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2  text-secondary rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base font-semibold"
          >
            stembegeleider.prodemos.nl
          </a>
          </p>
       
          {/* <img src="" alt="" /> */}
        </div>

        {/* Welcome CTA Button */}
        <button
          onClick={onNext}
          className="w-full bg-primary text-white py-2 sm:py-2 px-6 sm:px-8 rounded-full  text-base sm:text-lg hover:bg-secondary/80 transition-colors shadow-sm active:shadow-md"
        >
          {section.button.label}
        </button>
      </div>
    
     </div>
   
      </div>
  );
};
