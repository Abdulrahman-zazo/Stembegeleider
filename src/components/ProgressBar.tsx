import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProgressBarProps {
  currentSectionIndex: number;
  totalSections: number;
  showFinalScreen: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentSectionIndex,
  totalSections,
  showFinalScreen,
}) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Calculate progress: sections completed / total sections
  // If on final screen, show 100%
  const progress = showFinalScreen ? 100 : Math.round(((currentSectionIndex + 1) / totalSections) * 100);
  const progressText = isRTL ? `${progress}% مكتمل` : `${progress}% voltooid`;

  return (
    <div className="w-full bg-background">
      <div className={`px-4 py-2 text-xs font-semibold text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
        {progressText}
      </div>
      <div className="relative h-2 bg-muted overflow-hidden">
        {/* Progress fill */}
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};