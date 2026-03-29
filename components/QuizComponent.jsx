'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import { quizData as importedQuizData } from '@/lib/quizData';

const quizData = importedQuizData;

export default function QuizComponent({ mode = 'training', moduleId = null, fullExam = false }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [selectedModule, setSelectedModule] = useState(
    moduleId ? quizData.find((m) => m.id === parseInt(moduleId, 10)) : quizData[0]
  );
  const [timeLeft, setTimeLeft] = useState(null);
  const [timerStarted, setTimerStarted] = useState(false);
  const [chooseMode, setChooseMode] = useState(true);
  const [moduleSelected, setModuleSelected] = useState(moduleId !== null || selectedModule !== null);

  // Quand mode est 'demo', 'exam', 'module-cert', on passe directement à la sélection des questions
  useEffect(() => {
    if (mode === 'training' || mode === 'module-cert-select') {
      setChooseMode(true);
    } else {
      setChooseMode(false);
    }

    if (mode === 'exam' || mode === 'module-cert') {
      setIsFullExam(true);
    }
  }, [mode]);

  const getMixedQuestions = () => {
    const allQuestions = [];
    quizData.forEach((module) => {
      module.questions.forEach((question) => {
        allQuestions.push({
          ...question,
          moduleId: module.id,
          moduleName: module.module,
        });
      });
    });

    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }

    return allQuestions;
  };

  useEffect(() => {
    const initialTime = mode === 'exam' ? 2100 : mode === 'demo' ? 600 : mode === 'module-cert' ? 600 : null;
    setTimeLeft(initialTime);
    setTimerStarted(initialTime !== null);
  }, [mode]);

  useEffect(() => {
    if (!timerStarted || timeLeft === null || showResults) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowResults(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timerStarted, timeLeft, showResults]);

  const formatTime = (seconds) => {
    if (seconds === null) return '';
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const timeColor = timeLeft <= 300 ? 'text-red-600' : 'text-primary';

  if (!selectedModule && !fullExam) {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-neutral-600">Chargement...</p>
        </div>
      </section>
    );
  }

  if (chooseMode && mode === 'module-cert-select') {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Choisir un module pour certification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {quizData.map((module) => (
              <Card
                key={module.id}
                className="p-6 cursor-pointer hover:shadow-xl transition-all border-2 border-neutral-200 hover:border-accent"
                onClick={() => window.location.href = `/certification/module-cert?module=${module.id}`}
              >
                <p className="text-2xl font-heading font-bold text-primary mb-2">{module.module}</p>
                <p className="text-sm text-neutral-600 mb-4">{module.questions.length} questions</p>
                <CTAButton variant="primary" size="md" onClick={() => window.location.href = `/certification/module-cert?module=${module.id}`} className="w-full">Passer le certificat</CTAButton>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <CTAButton href="/certification" variant="outline">← Retour à la certification</CTAButton>
          </div>
        </div>
      </section>
    );
  }
  if (chooseMode && mode === 'training') {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Choisir un mode d'entraînement</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-8 cursor-pointer hover:shadow-lg transition-shadow border-2 border-neutral-200 hover:border-accent">
              <div className="text-4xl mb-4">📘</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Module par module</h3>
              <p className="text-neutral-600 mb-6">Pratiquez chaque module séparément à votre rythme</p>
              <CTAButton variant="primary" size="lg" onClick={() => setChooseMode(false)} className="w-full">Continuer avec les modules</CTAButton>
            </Card>
            <Card className="p-8 cursor-pointer hover:shadow-lg transition-shadow border-2 border-[var(--color-ocre-terre)]">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-heading font-bold text-[var(--color-ocre-terre)] mb-4">Entraînement complet</h3>
              <p className="text-neutral-600 mb-6">Mélange de questions de tous les modules</p>
              <CTAButton
                variant="secondary"
                size="lg"
                onClick={() => {
                  setChooseMode(false);
                  setIsFullExam(true);
                  setCurrentQuestion(0);
                  setScore(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                className="w-full"
              >
                Entraînement complet
              </CTAButton>
            </Card>
          </div>

          <div className="text-center">
            <CTAButton href="/certification" variant="outline">← Retour à la certification</CTAButton>
          </div>
        </div>
      </section>
    );
  }

  const isDemoMode = mode === 'demo';
  const isFinalExam = fullExam || isFullExam || mode === 'exam';
  const isModuleCert = mode === 'module-cert';
  const mixedQuestions = isFinalExam || isDemoMode || isModuleCert ? getMixedQuestions() : [];
  const demoQuestions = isDemoMode ? mixedQuestions.slice(0, 5) : [];
  const moduleCertQuestions = isModuleCert && selectedModule ? selectedModule.questions : [];
  const questionList = isDemoMode ? demoQuestions : isFinalExam ? mixedQuestions : isModuleCert ? moduleCertQuestions : (!chooseMode ? selectedModule?.questions || [] : []);
  const questions = questionList;

  if (!chooseMode && !isFinalExam && !isDemoMode && !isModuleCert && !moduleSelected && questions.length === 0) {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Choisir un module</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {quizData.map((module) => (
              <Card
                key={module.id}
                className="p-6 cursor-pointer hover:shadow-xl transition-all border-2 border-neutral-200 hover:border-accent"
                onClick={() => {
                  setSelectedModule(module);
                  setModuleSelected(true);
                }}
              >
                <p className="text-2xl font-heading font-bold text-primary mb-2">{module.module}</p>
                <p className="text-sm text-neutral-600 mb-4">{module.questions.length} questions</p>
                <CTAButton variant="primary" size="md" onClick={() => setSelectedModule(module)} className="w-full">? Commencer</CTAButton>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <CTAButton href="/certification" variant="outline">? Retour</CTAButton>
          </div>
        </div>
      </section>
    );
  }
  if (questions.length === 0) {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-neutral-600">Chargement des questions...</p>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];
  if (!question) {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-neutral-600">Aucune question disponible pour le moment.</p>
        </div>
      </section>
    );
  }

  const answered = answers[currentQuestion] !== undefined;

  const handleAnswer = (optionIndex) => {
    if (answered) return;
    const isCorrect = optionIndex === question.correct;
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion((prev) => prev - 1);
  };

  const handleNext = () => {
    // In exam modes, require answering before moving forward
    if ((isFinalExam || isModuleCert) && !answered) {
      return; // Don't allow moving forward without answering in exam modes
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const percentage = Math.round((score / questions.length) * 100);
  const level = percentage >= 80 ? 'AVANCÉ' : percentage >= 60 ? 'INTERMÉDIAIRE' : 'DÉBUTANT';
  const levelColor = percentage >= 80 ? 'text-accent' : percentage >= 60 ? 'text-secondary' : 'text-neutral-500';

  if (showResults) {
    const getLevelEmoji = () => {
      if (percentage >= 80) return '??';
      if (percentage >= 60) return '?';
      return '??';
    };
    return (
      <section className="py-20 bg-neutral-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">{getLevelEmoji()}</div>
            <h2 className="text-4xl font-heading font-bold text-primary mb-2">Bravo!</h2>
            <p className="text-xl text-neutral-600 mb-8">Vous avez terminé {isFinalExam ? "l'examen complet" : isModuleCert ? `le certificat "${selectedModule?.module}"` : `le module \"${selectedModule?.module}\"`}</p>
            <Card className="mb-8">
              <div className="text-center">
                <p className="text-6xl font-bold text-accent mb-4">{percentage}%</p>
                <p className={`text-3xl font-heading font-bold ${levelColor} mb-4`}>{level}</p>
                <p className="text-neutral-600">Score: {score} sur {questions.length} bonnes réponses</p>
              </div>
            </Card>
            {percentage >= 60 && (
              <Card variant="accent" className="mb-8">
                <p className="text-lg text-green-700 mb-4">✅ Vous êtes admissible pour obtenir un certificat!</p>
                <p className="text-neutral-600">Pour obtenir votre certificat officiel, passez l'examen complet.</p>
              </Card>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton onClick={() => { setCurrentQuestion(0); setScore(0); setAnswers({}); setShowResults(false); }} variant="primary" size="lg">🔄 Réessayer</CTAButton>
              {mode === 'training' && !isFinalExam && !isModuleCert && <CTAButton href="/certification/examen" variant="secondary" size="lg">🎓 Passer l'examen</CTAButton>}
              {isModuleCert && <CTAButton href="/certification/module-cert" variant="secondary" size="lg">🎓 Autre module</CTAButton>}
              <CTAButton href="/certification" variant="outline" size="lg">← Retour</CTAButton>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {moduleId === null && (
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Choisir un module</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizData.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setSelectedModule(module)}
                  className={`p-6 rounded-lg text-left transition-all ${
                    selectedModule?.id === module.id ? 'bg-[var(--color-ocre-terre)] text-white shadow-lg' : 'bg-white border-2 border-neutral-200 hover:border-accent'
                  }`}
                >
                  <p className="font-heading font-bold">{module.module}</p>
                  <p className="text-sm opacity-80">{module.questions.length} questions</p>
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-primary">Question {currentQuestion + 1} sur {questions.length}</span>
            <div className="flex gap-4">
              <span className="text-neutral-600">Score: {score}/{questions.length}</span>
              {timeLeft !== null && <span className={`font-bold ${timeColor}`}>?? {formatTime(timeLeft)}</span>}
            </div>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-[var(--color-blue-savant)] to-[var(--color-ocre-terre)] h-full transition-all duration-300" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
          </div>
        </div>
        <Card className="mb-8" variant="default">
          <div className="mb-8">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">{question.text}</h3>
          </div>
          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  answered && index === question.correct
                    ? 'border-[var(--color-emerald-green)] bg-[var(--color-emerald-green)]/10 text-[var(--color-emerald-green)]'
                    : answered && index === answers[currentQuestion] && index !== question.correct
                    ? 'border-[var(--color-danger)] bg-[var(--color-danger)]/10 text-[var(--color-danger)]'
                    : answered
                    ? 'border-neutral-200 bg-neutral-50 text-neutral-400'
                    : 'border-neutral-200 hover:border-[var(--color-ocre-terre)] cursor-pointer'
                }`}
              >
                <p className="font-semibold">{option}</p>
              </button>
            ))}
          </div>
          <div className="flex gap-4 justify-center mt-8">
            {currentQuestion > 0 && !(isFinalExam || isModuleCert) && (
              <button onClick={handlePrev} className="px-6 py-3 bg-neutral-200 text-neutral-900 rounded-lg font-semibold hover:shadow-lg transition-shadow">← Précédent</button>
            )}
            <button onClick={handleNext} className="px-6 py-3 bg-[var(--color-ocre-terre)] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow" disabled={(isFinalExam || isModuleCert) && !answered}>{currentQuestion === questions.length - 1 ? '✓ Voir les résultats' : 'Suivant →'}</button>
          </div>
          {answered && (
            <div className={`p-4 rounded-lg text-center ${answers[currentQuestion] === question.correct ? 'bg-[var(--color-emerald-green)]/10 border border-[var(--color-emerald-green)]' : 'bg-[var(--color-danger)]/10 border border-[var(--color-danger)]'}`}>
              <p className={`font-semibold ${answers[currentQuestion] === question.correct ? 'text-[var(--color-emerald-green)]' : 'text-[var(--color-danger)]'}`}>
                {answers[currentQuestion] === question.correct ? '✅ Bonne réponse!' : '❌ Mauvaise réponse'}
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}

