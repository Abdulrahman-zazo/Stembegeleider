import React from 'react';
import { MdClose } from 'react-icons/md';
interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string | React.ReactNode;
  onClose: () => void;
  sounds?: string[];
  isRTL?: boolean;
  
}

export const Modal: React.FC<ModalProps> = ({  isOpen, title, content, onClose, isRTL = false }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`bg-background flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            aria-label="Close modal"
          >
            <MdClose size={24} />
          </button>
        </div>

        {/* Content */}
        <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
          {typeof content === 'string' ? (
            <div
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
};
