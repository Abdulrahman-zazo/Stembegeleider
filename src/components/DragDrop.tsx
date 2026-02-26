import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface DragDropItem {
  id: string;
  label: string;
}

interface MultipleChoiceProps {
  items: DragDropItem[];
  correctItems: string[];
  onComplete: () => void;
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  items,
  correctItems,
  onComplete,
}) => {
  const {  t } = useTranslation();
  // const isRTL = i18n.language === 'ar';

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const toggleItem = (id: string) => {
    if (checked) return;

    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  const isCorrect =
    selectedIds.length === correctItems.length &&
    correctItems.every((id) => selectedIds.includes(id));

  const handleCheck = () => {
    setChecked(true);
  };

  const handleNext = () => {
    if (isCorrect) {
      onComplete();
    } else {
      setChecked(false);
      setSelectedIds([]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {items.map((item) => (
          <label
            key={item.id}
            className="flex items-center gap-3 bg-card p-3 rounded-lg border border-border cursor-pointer hover:shadow-sm transition"
          >
            <input
              type="checkbox"
              checked={selectedIds.includes(item.id)}
              onChange={() => toggleItem(item.id)}
              className="w-4 h-4"
            />
            <span>{t(item.label)}</span>
          </label>
        ))}
      </div>

      {checked && (
        <div
          className={`p-4 rounded-lg ${
            isCorrect
              ? 'bg-green-50 text-green-900'
              : 'bg-red-100 text-red-900'
          }`}
        >
          {isCorrect
            ? `✓ ${t('common.correct')}`
            : `✗ ${t('common.incorrect')}`}
        </div>
      )}

      {!checked ? (
        <button
          onClick={handleCheck}
          className="w-full bg-primary text-background py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          {t('common.check', { defaultValue: 'Check' })}
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="w-full bg-primary text-background py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          {isCorrect
            ? t('common.finish', { defaultValue: 'Finish' })
            : t('common.retry', { defaultValue: 'Try Again' })}
        </button>
      )}
    </div>
  );
};