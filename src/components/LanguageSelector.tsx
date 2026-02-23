import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Language {
  code: string;
  label: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: 'nl', label: 'Nederlands', flag: '/flag-netherlands.png' },
  { code: 'ar', label: 'العربية', flag: '/flag-saudi-arabia.png' },
  { code: 'ps', label: 'Afghanistan', flag: '/flag-afghanistan.png' },
  { code: 'ti', label: 'Eritrea', flag: '/flag-eritrea.png' },
];

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
const [open , setOpen] = React.useState(false);
  // const handleLanguageChange = (languageCode: string) => {
  //   i18n.changeLanguage(languageCode);
  //   document.documentElement.dir = languageCode === 'ar' ? 'rtl' : 'ltr';
  // };
  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };
    i18n.on('languageChanged', handleLanguageChanged);
    // Set initial direction
    handleLanguageChanged(i18n.language);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  },);

  const currentLanguage = LANGUAGES.find((lang) => lang.code === i18n.language);

  return (
    <div className="relative group inline-block" dir={isRTL ? 'rtl' : 'ltr'}>
      <button
onClick={()=>setOpen(!open)}
        className={`flex items-center gap-2 px-3 py-2 bg-muted hover:bg-accent rounded-md transition-colors font-semibold text-sm border border-border ${
          isRTL ? 'flex-row-reverse' : ''
        }`}
        aria-label="Select language"
      >
        <img src={currentLanguage?.flag || '/flag-default.png'} alt={currentLanguage?.label || 'Default flag'} className="w-5 h-5 rounded-sm" />
        <span className="hidden sm:inline">{currentLanguage?.label}</span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute bg-background mt-2 w-48 bg-card border border-border rounded-md shadow-lg ${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200 z-50 ${
          isRTL ? '-left-40' : '-left-40'
        }`}
      >
        {LANGUAGES.map((language) => (
          <button
            key={language.code}
            onClick={() => {
              handleLanguageChange(language.code);
              setOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary/10 cursor-pointer transition-colors first:rounded-t-md last:rounded-b-md ${
              i18n.language === language.code ? 'bg-primary text-background' : 'text-foreground'
            } ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <img src={language.flag} alt={language.label} className="w-6 h-6 rounded-sm shrink-0" />
            <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
              <span className="font-semibold">{language.label}</span>
              <span className="text-xs opacity-75">{language.code.toUpperCase()}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
