'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import {
  getModuleQuestionsWithRepeat,
  getMixedQuestions,
  calculateScore,
  isPassing,
  formatTime,
  isTimeCritical,
  randomizeAnswerOptions,
  EXAM_CONFIG,
} from '@/lib/examService';

/**
 * Composant de certificat
 * - 35 questions
 * - 35 minutes
 * - Pas de feedback pendant l'examen
 * - Certificat si ≥ 60%
 * - Résultats enregistrés
 */
export default function CertificationQuizComponent({ 
  mode = 'global', // 'global' ou 'module'
  moduleId = null,
  certificateType = null 
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [timeLeft, setTimeLeft] = useState(EXAM_CONFIG.CERTIFICATION.DURATION);
  const [timerStarted, setTimerStarted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialiser les questions au montage
  useEffect(() => {
    setIsMounted(true);
    loadQuestions();
  }, []);

  // Timer avec soumission auto
  useEffect(() => {
    if (!timerStarted || showResults) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Soumission automatique
          setShowResults(true);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerStarted, showResults]);

  // Sauvegarde automatique (toutes les 10 secondes)
  useEffect(() => {
    if (!timerStarted || showResults) return;

    const interval = setInterval(() => {
      // TODO: Envoyer answers vers API
      localStorage.setItem('exam_backup', JSON.stringify({ questions, answers }));
    }, 10000);

    return () => clearInterval(interval);
  }, [answers, timerStarted, showResults]);

  const loadQuestions = () => {
    let quizQuestions = [];

    if (mode === 'module' && moduleId !== null) {
      quizQuestions = getModuleQuestionsWithRepeat(
        moduleId,
        EXAM_CONFIG.CERTIFICATION.QUESTIONS_COUNT
      );
    } else {
      quizQuestions = getMixedQuestions(EXAM_CONFIG.CERTIFICATION.QUESTIONS_COUNT);
    }

    // Randomiser les réponses
    quizQuestions = quizQuestions.map(randomizeAnswerOptions);

    setQuestions(quizQuestions);
    setLoading(false);
  };

  const handleStartExam = () => {
    setShowInstructions(false);
    setTimerStarted(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-neutral-600">Chargement de l'examen...</p>
        </div>
      </section>
    );
  }

  if (!isMounted || questions.length === 0) {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen flex items-center justify-center">
        <p className="text-lg text-neutral-600">Erreur lors du chargement</p>
      </section>
    );
  }

  // AFFICHER INSTRUCTIONS
  if (showInstructions) {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="p-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Instructions de l'examen
            </h2>

            <div className="space-y-4 mb-8 text-neutral-700">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold mb-2">📋 Nombre de questions:</p>
                <p>35 questions mixtes</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold mb-2">⏱ Durée:</p>
                <p>35 minutes (1 minute par question)</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold mb-2">✅ Pour réussir:</p>
                <p>Vous devez obtenir un score d'au moins 60%</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold mb-2">📜 Certificat:</p>
                <p>Un certificat officiel sera généré si vous réussissez</p>
              </div>

              <div className="space-y-2 text-sm">
                <p><strong>⚠️ Règles importantes:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Une seule réponse possible par question</li>
                  <li>Vous ne pouvez pas revenir en arrière</li>
                  <li>Le timer démarre immédiatement et ne peut pas être arrêté</li>
                  <li>Soumission automatique à la fin du temps</li>
                  <li>Les réponses sont sauvegardées automatiquement</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <CTAButton
                variant="primary"
                size="lg"
                onClick={handleStartExam}
                className="w-full md:w-auto"
              >
                Commencer l'examen
              </CTAButton>
              <CTAButton
                variant="outline"
                size="lg"
                href="/certification"
                className="w-full md:w-auto"
              >
                Annuler
              </CTAButton>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];
  const answered = answers[currentQuestion] !== undefined;

  // AFFICHER RÉSULTATS
  if (showResults) {
    const scoreData = calculateScore(
      Object.entries(answers).map(([qIdx, ans]) => ({
        questionId: questions[qIdx].id,
        userAnswer: ans,
      })),
      questions
    );

    const passed = isPassing(scoreData.percentage);
    const emoji = scoreData.percentage >= 80 ? '🏆' : scoreData.percentage >= 60 ? '✅' : '❌';

    return (
      <section className="py-20 bg-neutral-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">{emoji}</div>
            <h2 className="text-4xl font-heading font-bold text-primary mb-2">
              {passed ? 'Bravo!' : 'Certificat non obtenu'}
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Vous avez terminé l'examen de certification
            </p>

            <Card className="mb-8">
              <div className="text-center">
                <p className="text-6xl font-bold text-accent mb-4">{scoreData.percentage}%</p>
                <p className="text-neutral-600">
                  Score: {scoreData.correct} sur {scoreData.total} bonnes réponses
                </p>
              </div>
            </Card>

            {passed && (
              <Card variant="accent" className="mb-8 bg-green-50 border-l-4 border-green-500">
                <p className="text-lg text-green-700 mb-4">✅ Vous avez réussi!</p>
                <p className="text-neutral-600">
                  Un certificat officiel a été généré et est disponible à télécharger.
                </p>
              </Card>
            )}

            {!passed && (
              <Card className="mb-8 bg-orange-50 border-l-4 border-orange-500">
                <p className="text-lg text-orange-700 mb-4">⚠️ Résultat insuffisant</p>
                <p className="text-neutral-600">
                  Vous avez besoin d'au moins 60% pour obtenir le certificat. Vous pouvez retenter l'examen.
                </p>
              </Card>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {passed && (
                <CTAButton
                  href={`/certificate/${Math.random()}`} // Placeholder - remplacer par vrai ID
                  variant="primary"
                  size="lg"
                >
                  📜 Télécharger le certificat
                </CTAButton>
              )}
              <CTAButton
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                  setShowInstructions(true);
                  setTimeLeft(EXAM_CONFIG.CERTIFICATION.DURATION);
                  setTimerStarted(false);
                  window.location.reload();
                }}
                variant={passed ? 'outline' : 'primary'}
                size="lg"
              >
                {passed ? '← Retour' : '🔄 Retenter'}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // AFFICHER QUESTION
  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b">
            <div>
              <p className="text-sm text-neutral-600">
                Question {currentQuestion + 1} / {questions.length}
              </p>
              <div className="mt-2 bg-neutral-200 rounded-full h-2">
                <div
                  className="bg-accent h-2 rounded-full transition-all"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className={`text-lg font-bold ${isTimeCritical(timeLeft) ? 'text-red-600' : 'text-primary'}`}>
              ⏱ {formatTime(timeLeft)}
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <p className="text-xl font-semibold text-neutral-800 mb-6">{question.text}</p>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAnswers({ ...answers, [currentQuestion]: index });
                  }}
                  disabled={answered}
                  className={`w-full p-4 text-left rounded-lg border-2 font-semibold transition-all ${
                    answers[currentQuestion] === index
                      ? 'border-accent bg-accent/10'
                      : 'border-neutral-200 hover:border-accent cursor-pointer'
                  } ${answered ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 justify-between">
            {currentQuestion > 0 && (
              <button
                onClick={handlePrevious}
                className="px-6 py-3 bg-neutral-200 text-neutral-900 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                ← Précédent
              </button>
            )}
            <div className="flex-1" />
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!answered}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  answered
                    ? 'bg-accent text-white hover:shadow-lg cursor-pointer'
                    : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                }`}
              >
                Suivant →
              </button>
            ) : (
              <button
                onClick={() => setShowResults(true)}
                disabled={!answered}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  answered
                    ? 'bg-green-600 text-white hover:shadow-lg cursor-pointer'
                    : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                }`}
              >
                ✓ Soumettre
              </button>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
