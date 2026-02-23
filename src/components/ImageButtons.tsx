import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from './Modal';
import type { ImageButton } from '@/types/index';


interface ImageButtonsProps {
  buttons: ImageButton[];
  visible: boolean;
  isRTL?: boolean;
}

export const ImageButtons: React.FC<ImageButtonsProps> = ({ buttons, visible, isRTL = false }) => {
  const { t } = useTranslation();
  const [selectedButton, setSelectedButton] = useState<ImageButton | null>(null);

  if (!visible) return null;

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => setSelectedButton(button)}
            className="px-4 py-3 border border-primary text-primary rounded-lg hover:bg-secondary hover:text-background transition-colors font-semibold text-sm sm:text-base"
          >
            {t(button.label as string)}
          </button>
        ))}
      </div>

      {selectedButton && (
        <Modal
          isOpen={true}
          title={t(selectedButton.modalTitle as string) as string}
          content={t(selectedButton.modalContent as string) as string}
          sounds={selectedButton.sounds}
          onClose={() => setSelectedButton(null)}
          isRTL={isRTL}
        />
      )}
    </>
  );
};
