import { useState, useMemo, useEffect } from 'react'; // ✅ استبدلنا useEffect بـ useMemo
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '@/i18n/config';
// Sound system removed
import { Header } from '@/components/Header';
import { SectionView } from '@/components/SectionView';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { FinalScreen } from '@/components/FinalScreen';
import { getSections, getWelcomeSection } from '@/services/dataService';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from 'sonner';

function AppContent() {
  const { i18n: i18nInstance } = useTranslation();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showFinalScreen, setShowFinalScreen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // ✅ اشتقاق البيانات حسب اللغة – بدون useEffect ولا setSections
  const sections = useMemo(() => getSections(), [i18nInstance.language]);
  const welcomeSection = useMemo(() => getWelcomeSection(), [i18nInstance.language]);

  const isRTL = i18nInstance.language === 'ar';
useEffect(() => {
  document.documentElement.lang = i18nInstance.language;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
}, [i18nInstance.language, isRTL]);
  // ⚠️ إذا تغيرت اللغة وقد تختلف أطوال المصفوفات، قد تحتاج لإعادة تعيين currentSectionIndex
  // لكننا نتركها كما هي – يمكنك إضافة useEffect منفصل إذا لزم الأمر

  const handleNextFromWelcome = () => {
    setShowWelcome(false);
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      setShowFinalScreen(true);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
      window.scrollTo(0, 0);
    } else if (currentSectionIndex === 0) {
      setShowWelcome(true);
      window.scrollTo(0, 0);
    }
  };

  const handleSectionSelect = (index: number) => {
    setCurrentSectionIndex(index);
    setShowFinalScreen(false);
    setShowWelcome(false);
    window.scrollTo(0, 0);
  };

  const handleRestart = () => {
    setShowWelcome(true);
    setCurrentSectionIndex(0);
    setShowFinalScreen(false);
    window.scrollTo(0, 0);
  };

  const sectionTitles = sections.map((s) => ({ id: s.id, title: s.title }));
  const currentSection = sections[currentSectionIndex];

  return (
    <div
      className="flex flex-col h-screen bg-background overflow-hidden"
      // dir={isRTL ? 'rtl' : 'ltr'}
      // lang={i18n.language}
    >
      <Header
        sections={sectionTitles}
        currentSectionIndex={currentSectionIndex}
        onSectionSelect={handleSectionSelect}
        showWelcome={showWelcome}
      />

      {showWelcome && welcomeSection ? (
        <WelcomeScreen section={welcomeSection} onNext={handleNextFromWelcome} />
      ) : showFinalScreen ? (
        <FinalScreen onRestart={handleRestart} />
      ) : (
        <SectionView
          sections={sectionTitles}
          currentSectionIndex={currentSectionIndex}
          showFinalScreen={showFinalScreen}
          section={currentSection}
          onNext={handleNext}
          onPrev={handlePrev}
          canNext={true}
          canPrev={true}
        />
      )}
    </div>
  );
}

function App() {
  return (


    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppContent />
        </TooltipProvider>
      </ThemeProvider>
    </I18nextProvider>

  );
}

export default App;