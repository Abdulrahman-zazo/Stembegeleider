import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from './Modal';
import { Quiz } from './Quiz';
import { ImageButtons } from './ImageButtons';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import type { Section } from '@/types/index';
import { ProgressBar } from './ProgressBar';
import { MultipleChoice } from './DragDrop';

interface SectionViewProps {
  section: Section;
  onNext: () => void;
  onPrev: () => void;
  canNext: boolean;
  canPrev: boolean;
  showFinalScreen: boolean;
  sections: Array<{ id: string; title: string }>;
  currentSectionIndex: number;
}

export const SectionView: React.FC<SectionViewProps> = ({
  section,
  onNext,
  onPrev,
  canNext,
  canPrev,
  showFinalScreen = false,
  sections,
  currentSectionIndex,
}) => {
  const { i18n, t } = useTranslation();
  const [doeModalOpen, setDoeModalOpen] = useState(false);
  const [showImageButtons, setShowImageButtons] = useState(false);

  const [imageLoaded, setImageLoaded] = useState(false);
  const isRTL = i18n.language === 'ar';

  const handleDoeComplete = () => {
    setDoeModalOpen(false);
    setShowImageButtons(true);
  };

  const handleNextClick = () => {
    onNext();
  };

  const prevButtonLabel = isRTL ? 'السابق' : 'Vorige';
  const nextButtonLabel = isRTL ? 'التالي' : 'Volgende';

  return (
    <div className="flex-1 overflow-y-auto pb-32" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        
        <h1 className="text-2xl sm:text-3xl lg:text-3xl text-foreground text-center mb-4">
          {t(`sections.${section?.id}.title`, section?.title)}
        </h1>

   {section?.image && (
  <div className="w-full h-48 sm:h-56 lg:h-64 bg-muted rounded-lg flex items-center justify-center mb-6 sm:mb-8 relative overflow-hidden">
    
    {!imageLoaded && (
      <div className="absolute inset-0 animate-pulse bg-muted" />
    )}

    <img
      key={section.image}
      src={section.image}
      alt={section?.title}
      onLoad={() => setImageLoaded(true)}
      onError={() => setImageLoaded(true)}
      className={`w-full h-full object-contain transition-opacity duration-300 ${
        imageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    />
  </div>
)}
        {/* المرحلة الأولى: النص + زر */}
        {!showImageButtons && section?.description && (
          <p className="text-sm sm:text-base text-foreground my-6 text-start whitespace-pre-line leading-relaxed">
            {t(`sections.${section?.id}.description`, section?.description)}
          </p>
        )}

        {!showImageButtons && section?.button?.action === 'doe' && (
          <button
            onClick={() => setDoeModalOpen(true)}
            className="w-full bg-primary text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-bold hover:bg-secondary/80 transition-colors mb-6 sm:mb-8 text-sm sm:text-base active:shadow-md"
          >
            {t(section?.button.label as string)}
          </button>
        )}

        {/* المرحلة الثانية: ImageButtons */}
        {showImageButtons && section?.imageButtons && (
          <ImageButtons
            buttons={section.imageButtons}
            visible={true}
            isRTL={isRTL}
          />
        )}

        {/* Quiz Modal */}
        {doeModalOpen &&
          section?.doeType === 'quiz' &&
          section?.doeContent && (
            <Modal
              isOpen={true}
              title={t(section?.doeContent.title as string) as string}
              sounds={section?.doeContent.sounds}
              onClose={() => {
                setDoeModalOpen(false);
                setShowImageButtons(true);
              }}
              content={
                <Quiz
                  questions={section?.doeContent.questions}
                  onComplete={handleDoeComplete}
                  isYesNo={
                    section?.doeContent.questions[0]?.options[0] === 'Ja'
                  }
                />
              }
            />
          )}

        {/* DragDrop Modal */}
        {doeModalOpen &&
          section?.doeType === 'dragdrop' &&
          section?.doeContent && (
            <Modal
              isOpen={true}
              title={t(section?.doeContent.title as string) as string}
              onClose={() => {
                setDoeModalOpen(false);
                setShowImageButtons(true);
              }}
              content={
                <MultipleChoice
                  onComplete={handleDoeComplete}
                  items={section?.doeContent.items}
                  correctItems={section?.doeContent.correctItems}
                />
              }
            />
          )}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 w-full">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 sm:py-3 border-t shadow-sm border-border bg-background gap-2 sm:gap-4 lg:gap-8 ${
            isRTL ? 'flex-row-reverse' : ''
          }`}
        >
          <button
            onClick={onPrev}
            disabled={!canPrev}
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-primary text-background rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity text-sm sm:text-base active:shadow-md ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
            title={prevButtonLabel}
          >
            <MdChevronLeft size={20} />
            <span className="hidden sm:inline text-base">
              {prevButtonLabel}
            </span>
          </button>

          <ProgressBar
            currentSectionIndex={currentSectionIndex}
            totalSections={sections.length}
            showFinalScreen={showFinalScreen}
          />

          <button
            onClick={handleNextClick}
            disabled={!canNext}
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-primary text-background rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity text-sm sm:text-base active:shadow-md ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
            title={nextButtonLabel}
          >
            <span className="hidden sm:inline text-base">
              {nextButtonLabel}
            </span>
            <MdChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};