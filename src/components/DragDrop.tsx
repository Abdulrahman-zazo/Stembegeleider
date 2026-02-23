import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface DragDropItem {
  id: string;
  label: string;
}

interface MultipleChoiceProps {
  items: DragDropItem[];
  correctItems: string[];
  
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  items,
  correctItems,

}) => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string>('');

  const toggleItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  const handleCheck = () => {
    const isCorrect =
      selectedIds.length === correctItems.length &&
      correctItems.every((id) => selectedIds.includes(id));

    if (isCorrect) {
      setFeedback(
        isRTL
          ? '✓ صحيح! لقد اخترت جميع العناصر الصحيحة.'
          : '✓ Correct! Je hebt alle juiste items geselecteerd.'
      );
    } else {
      setFeedback(
        isRTL
          ? '✗ ليس صحيحاً تماماً. حاول مرة أخرى.'
          : '✗ Niet helemaal correct. Probeer het opnieuw.'
      );
    }
  };

  const handleReset = () => {
    setSelectedIds([]);
    setFeedback('');
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

      {feedback && (
        <div
          className={`p-4 rounded-lg ${
            feedback.includes('✓')
              ? 'bg-green-50 text-green-900'
              : 'bg-red-100 text-red-900'
          }`}
        >
          {feedback}
        </div>
      )}

      <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <button
          onClick={handleCheck}
          className="flex-1 bg-primary text-background py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          {isRTL ? 'تحقق' : t('common.check', { defaultValue: 'Check' })}
        </button>

        <button
          onClick={handleReset}
          className="flex-1 bg-secondary text-white py-3 rounded-lg hover:bg-secondary/80 transition-colors"
        >
          {isRTL ? 'إعادة تعيين' : t('common.reset', { defaultValue: 'Reset' })}
        </button>
      </div>
    </div>
  );
};




