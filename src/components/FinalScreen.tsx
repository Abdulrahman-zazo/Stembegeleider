import React from 'react';
import { useTranslation } from 'react-i18next';

interface FinalScreenProps {
  onRestart: () => void;
}

export const FinalScreen: React.FC<FinalScreenProps> = ({ onRestart }) => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="flex-1 flex flex-col overflow-y-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Blue Section */}
      <div className="flex-1 bg-background text-primary flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-3 sm:mb-4 lg:mb-6">ProDemos</h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 lg:mb-8">{t('finalScreen.congratulations')}</h2>
          <p className="text-lg sm:text-2xl lg:text-3xl leading-relaxed">{t('finalScreen.subtitle')}</p>
        </div>
      </div>

      {/* White Section */}
      <div className="flex-1 bg-background text-foreground flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className={` max-w-2xl w-full text-center`}>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">{t('finalScreen.success')}</h3>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">{t('finalScreen.successMessage')}</p>
          <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 leading-relaxed">{t('finalScreen.ready')}</p>

          <div className={`flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a
              href="https://youngvoice.nl/"
              target='_blank'
              className="px-4 sm:px-6 py-2 sm:py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/80 transition-colors text-xs sm:text-sm lg:text-base active:shadow-md"
            >
              {t('finalScreen.youngVoice')}
            </a>
            <a
              href="https://stemwijzer.nl/"
              target='_blank'
              className="px-4 sm:px-6 py-2 sm:py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/80 transition-colors text-xs sm:text-sm lg:text-base active:shadow-md"
            >
              {t('finalScreen.stemWijzer')}
            </a>
            <button
              onClick={onRestart}
              className="px-4 sm:px-6 py-2 sm:py-3 border border-primary text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity text-xs sm:text-sm lg:text-base active:shadow-md"
            >
              {t('finalScreen.restart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalScreen;
