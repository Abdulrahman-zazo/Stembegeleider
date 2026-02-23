import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface QuizQuestion {
  question: string;
  options: string[];
  image?: string;
  correct: number;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: () => void;
  isYesNo?: boolean;
}

export const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;
    setSelectedAnswer(answerIndex);
    setAnswered(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete();
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    }
  };

  const isCorrect = selectedAnswer === currentQuestion.correct;

  return (
    <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Question */}
      <div className='flex justify-between'>
        <p className="text-lg font-semibold text-foreground mb-2">
          {currentQuestion.question}
        </p>
        <div className="text-sm text-muted-foreground mb-2">
          {isRTL ? `${questions.length} من ${currentQuestionIndex + 1}` : `${currentQuestionIndex + 1} of ${questions.length}`}
        </div>
      </div>
          {   currentQuestion?.image && 
<img src={currentQuestion.image} alt={currentQuestion.question} loading='lazy' className="w-full h-60   object-cover" />}

      {/* Options */}
      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={answered}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              !answered
                ? 'border-border hover:border-primary cursor-pointer'
                : selectedAnswer === index
                  ? isCorrect
                    ? 'border-green-700 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : index === currentQuestion.correct
                    ? 'border-green-700 bg-green-50'
                    : 'border-border'
            }`}
          >
            <span className="font-semibold">{option}</span>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {answered && (
        <div
          className={`p-4 rounded-lg ${
            isCorrect ? 'bg-green-50 text-green-900' : 'bg-red-100 text-red-900'
          }`}
        >
          <p className="font-semibold mb-2">
            {isCorrect ? `✓ ${t('common.correct')}` : `✗ ${t('common.incorrect')}`}
          </p>
          <p>{currentQuestion.explanation}</p>
        </div>
      )}

      {/* Next Button */}
      {answered && (
        <button
          onClick={handleNext}
          className="w-full bg-primary text-background py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
        >
          {isLastQuestion ? t('common.finish', { defaultValue: 'Finish' }) : t('common.next')}
        </button>
      )}
    </div>
  );
};
