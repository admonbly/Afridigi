'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';

const quizData = [
  {
    id: 1,
    module: 'IT (Ordinateur)',
    questions: [
      {
        id: 1,
        text: 'Quel est le rôle principal du processeur (CPU)?',
        options: [
          'Stocker les données de manière permanente',
          'Exécuter les instructions et traiter les données',
          'Afficher les images à l\'écran',
          'Contrôler les périphériques externes',
        ],
        correct: 1,
      },
      {
        id: 2,
        text: 'Quelle est la différence entre RAM et disque dur?',
        options: [
          'RAM est plus rapide mais perd ses données à l\'extinction',
          'Disque dur est plus rapide que la RAM',
          'RAM et disque dur sont identiques',
          'RAM ne peut stocker que des documents',
        ],
        correct: 0,
      },
      {
        id: 3,
        text: 'Que signifie BIOS?',
        options: [
          'Basic Input Output System',
          'Binary Integrated Operating Software',
          'Basic Internet Online Storage',
          'Built-in Input Output Socket',
        ],
        correct: 0,
      },
      {
        id: 4,
        text: 'Comment vérifier la quantité de RAM installée sur un ordinateur Windows?',
        options: [
          'Clic droit sur le bureau > Paramètres',
          'Clic droit sur "Poste de travail" > Propriétés',
          'Menu Démarrer > Exécuter > taskmgr',
          'Ouvrir le Panneau de contrôle > Système',
        ],
        correct: 1,
      },
      {
        id: 5,
        text: 'Quelle action peut aider à améliorer les performances d\'un ordinateur lent?',
        options: [
          'Augmenter la résolution de l\'écran',
          'Désinstaller les programmes inutilisés',
          'Augmenter la taille de la corbeille',
          'Augmenter la luminosité de l\'écran',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 2,
    module: 'Internet & Google',
    questions: [
      {
        id: 1,
        text: 'Qu\'est-ce qu\'une URL?',
        options: [
          'Un virus informatique',
          'L\'adresse web d\'un site internet',
          'Un logiciel d\'édition',
          'Une pièce jointe d\'email',
        ],
        correct: 1,
      },
      {
        id: 2,
        text: 'Quel est le rôle d\'un moteur de recherche comme Google?',
        options: [
          'Créer des sites web',
          'Héberger des fichiers',
          'Indexer et afficher des résultats de recherche',
          'Envoyer des emails',
        ],
        correct: 2,
      },
      {
        id: 3,
        text: 'Comment effectuer une recherche avancée sur Google?',
        options: [
          'Utiliser les guillemets pour les phrases exactes',
          'Cliquer simplement sur le bouton "Avancé"',
          'Utiliser le menu Outils > Recherche avancée',
          'a et c sont corrects',
        ],
        correct: 3,
      },
      {
        id: 4,
        text: 'Que signifie HTTPS?',
        options: [
          'Hyper Text Transfer Protocol Secure',
          'High Technology Terminal Services',
          'Hyperlink Transfer Technology Protocol',
          'HTTP Enhanced Security',
        ],
        correct: 0,
      },
      {
        id: 5,
        text: 'Comment reconnaître un site web sécurisé?',
        options: [
          'Par la présence d\'un logo "Sécurisé"',
          'Par le cadenas 🔒 dans la barre d\'adresse et HTTPS',
          'Par le nombre d\'images sur le site',
          'Par le bouton "Connexion" en haut à droite',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 3,
    module: 'Email & Communication',
    questions: [
      {
        id: 1,
        text: 'Quel est le protocole le plus courant pour envoyer des emails?',
        options: [
          'POP3',
          'IMAP',
          'SMTP',
          'HTTP',
        ],
        correct: 2,
      },
      {
        id: 2,
        text: 'Qu\'est-ce qu\'une pièce jointe?',
        options: [
          'Un lien cliquable dans un email',
          'Un fichier envoyé avec un email',
          'Un dossier d\'emails',
          'Une signature électronique',
        ],
        correct: 1,
      },
      {
        id: 3,
        text: 'Comment identifier un email de phishing?',
        options: [
          'Par l\'adresse d\'expéditeur suspecte',
          'Par les demandes d\'informations personnelles',
          'Par les liens vers des sites externes',
          'Toutes les réponses ci-dessus',
        ],
        correct: 3,
      },
      {
        id: 4,
        text: 'Que significa "BCC" dans un email?',
        options: [
          'Before Carbon Copy',
          'Blind Carbon Copy',
          'Back-up Classical Copy',
          'Broad Copy Configuration',
        ],
        correct: 1,
      },
      {
        id: 5,
        text: 'Quel est le nombre maximal de caractères recommandé pour une adresse email?',
        options: [
          '50 caractères',
          '100 caractères',
          '254 caractères',
          '500 caractères',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 4,
    module: 'Sécurité & Confidentialité',
    questions: [
      {
        id: 1,
        text: 'Qu\'est-ce qu\'un mot de passe fort?',
        options: [
          'Plus de 10 caractères',
          'Mélange de lettres, chiffres et symboles',
          'Fait de mots courants',
          'Identique pour tous les comptes',
        ],
        correct: 1,
      },
      {
        id: 2,
        text: 'Que signifie "VPN"?',
        options: [
          'Virtual Personal Network',
          'Virtual Private Network',
          'Verified Personal Network',
          'Very Powerful Network',
        ],
        correct: 1,
      },
      {
        id: 3,
        text: 'Quel est le risque principal de partager votre mot de passe?',
        options: [
          'Accès non autorisé à votre compte',
          'Vol d\'identité',
          'Usurpation de compte',
          'Tous les risques ci-dessus',
        ],
        correct: 3,
      },
      {
        id: 4,
        text: 'Qu\'est-ce qu\'un antivirus?',
        options: [
          'Un programme pour créer des sites web',
          'Un logiciel qui détecte et supprime les malveillances',
          'Un type de pare-feu',
          'Un service de sauvegarde cloud',
        ],
        correct: 1,
      },
      {
        id: 5,
        text: 'Que faire si vous soupçonnez que votre compte a été piraté?',
        options: [
          'Ignorer le problème',
          'Changer immédiatement votre mot de passe',
          'Signaler le problème au support',
          'À et C sont corrects',
        ],
        correct: 3,
      },
    ],
  },
  {
    id: 5,
    module: 'Productivité & Outils',
    questions: [
      {
        id: 1,
        text: 'Quel est l\'avantage principal du cloud computing?',
        options: [
          'Accès aux données partout et toujours',
          'Coût de maintenance réduit',
          'Partage facile des fichiers',
          'Tous les avantages ci-dessus',
        ],
        correct: 3,
      },
      {
        id: 2,
        text: 'Qu\'est-ce qu\'un navigateur web?',
        options: [
          'Un système d\'exploitation',
          'Un logiciel pour accéder à Internet',
          'Un langage de programmation',
          'Un type de serveur',
        ],
        correct: 1,
      },
      {
        id: 3,
        text: 'Quel est le raccourci clavier pour copier du texte?',
        options: [
          'Ctrl+C',
          'Ctrl+V',
          'Ctrl+X',
          'Ctrl+Z',
        ],
        correct: 0,
      },
      {
        id: 4,
        text: 'Qu\'est-ce qu\'un lien hypertexte?',
        options: [
          'Du texte en gras',
          'Du texte cliquable qui renvoie vers une autre page',
          'Une image zoomée',
          'Un bouton interactif',
        ],
        correct: 1,
      },
      {
        id: 5,
        text: 'Comment effectuer une recherche rapide sur une page?',
        options: [
          'Ctrl+F',
          'Alt+F',
          'Ctrl+G',
          'Shift+F',
        ],
        correct: 0,
      },
    ],
  },
];

export default function QuizComponent({ mode = 'training', moduleId = null, fullExam = false }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [selectedModule, setSelectedModule] = useState(
    moduleId ? quizData.find((m) => m.id === parseInt(moduleId)) : quizData[0]
  );
  const [timeLeft, setTimeLeft] = useState(null);
  const [timerStarted, setTimerStarted] = useState(false);
  const [chooseMode, setChooseMode] = useState(true); // Pour choisir module vs examen complet
  const [isFullExam, setIsFullExam] = useState(fullExam); // État pour tracker examen complet

  // Fonction pour mélanger les questions de tous les modules
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
    // Shuffle Fisher-Yates
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    return allQuestions;
  };

  // Configure timer based on mode
  useEffect(() => {
    const initialTime = mode === 'exam' ? 2100 : mode === 'demo' ? 600 : null;
    setTimeLeft(initialTime);
    setTimerStarted(initialTime !== null);
  }, [mode]);

  // Timer countdown effect
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

  // Format time display
  const formatTime = (seconds) => {
    if (seconds === null) return '';
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const timeColor = timeLeft <= 300 ? 'text-red-600' : 'text-primary';

  // Guard against undefined selectedModule
  if (!selectedModule && !fullExam) {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-neutral-600">Chargement...</p>
        </div>
      </section>
    );
  }

  // Mode choix: module par module ou examen complet
  if (chooseMode && mode === 'training') {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            Choisir un mode d'entraînement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Module par module */}
            <Card className="p-8 cursor-pointer hover:shadow-lg transition-shadow border-2 border-neutral-200 hover:border-accent">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Module par module
              </h3>
              <p className="text-neutral-600 mb-6">
                Pratiquez chaque module séparément à votre rythme
              </p>
              <CTAButton
                variant="primary"
                size="lg"
                onClick={() => setChooseMode(false)}
                className="w-full"
              >
                Continuer avec les modules
              </CTAButton>
            </Card>

            {/* Examen complet */}
            <Card className="p-8 cursor-pointer hover:shadow-lg transition-shadow border-2 border-accent">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-heading font-bold text-accent mb-4">
                Entraînement complet
              </h3>
              <p className="text-neutral-600 mb-6">
                Mélange de questions de tous les modules
              </p>
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
            <CTAButton href="/certification" variant="outline">
              ← Retour à la certification
            </CTAButton>
          </div>
        </div>
      </section>
    );
  }

  // Déterminer les questions à utiliser
  const isFinalExam = fullExam || isFullExam;
  const mixedQuestions = isFinalExam ? getMixedQuestions() : [];
  const questionList = isFinalExam
    ? mixedQuestions
    : (chooseMode ? [] : selectedModule?.questions || []);
  
  const questions = questionList;

  // Si on est en mode "module par module" et qu'on a choisi ce mode mais pas de questions, afficher le sélecteur
  if (!chooseMode && !isFinalExam && questions.length === 0 && moduleId === null) {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            Choisir un module
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {quizData.map((module) => (
              <Card
                key={module.id}
                className="p-6 cursor-pointer hover:shadow-xl transition-all border-2 border-neutral-200 hover:border-accent"
                onClick={() => setSelectedModule(module)}
              >
                <p className="text-2xl font-heading font-bold text-primary mb-2">{module.module}</p>
                <p className="text-sm text-neutral-600 mb-4">{module.questions.length} questions</p>
                <CTAButton
                  variant="primary"
                  size="md"
                  onClick={() => setSelectedModule(module)}
                  className="w-full"
                >
                  ✓ Commencer
                </CTAButton>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <CTAButton href="/certification" variant="outline">
              ← Retour
            </CTAButton>
          </div>
        </div>
      </section>
    );
  }

  // Protection: s'assurer que questions n'est pas vide avant d'accéder à question
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
  const answered = answers[currentQuestion] !== undefined;

  const handleAnswer = (optionIndex) => {
    if (answered) return;

    const isCorrect = optionIndex === question.correct;
    setAnswers({ ...answers, [currentQuestion]: optionIndex });

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const percentage = Math.round((score / questions.length) * 100);
  const level =
    percentage >= 80 ? 'AVANCÉ' : percentage >= 60 ? 'INTERMÉDIAIRE' : 'DÉBUTANT';
  const levelColor =
    percentage >= 80 ? 'text-accent' : percentage >= 60 ? 'text-secondary' : 'text-neutral-500';

  if (showResults) {
    const getLevelEmoji = () => {
      if (percentage >= 80) return '🏆';
      if (percentage >= 60) return '⭐';
      return '📚';
    };

    return (
      <section className="py-20 bg-neutral-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">{getLevelEmoji()}</div>
            <h2 className="text-4xl font-heading font-bold text-primary mb-2">
              Bravo!
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Vous avez terminé {isFinalExam ? "l'examen complet" : `le module "${selectedModule?.module}"`}
            </p>

            <Card className="mb-8">
              <div className="text-center">
                <p className="text-6xl font-bold text-accent mb-4">{percentage}%</p>
                <p className={`text-3xl font-heading font-bold ${levelColor} mb-4`}>
                  {level}
                </p>
                <p className="text-neutral-600">
                  Score: {score} sur {questions.length} bonnes réponses
                </p>
              </div>
            </Card>

            {percentage >= 60 && (
              <Card variant="accent" className="mb-8">
                <p className="text-lg text-green-700 mb-4">
                  ✅ Vous êtes admissible pour obtenir un certificat!
                </p>
                <p className="text-neutral-600">
                  Pour obtenir votre certificat officiel, passez l'examen complet.
                </p>
              </Card>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                variant="primary"
                size="lg"
              >
                🔄 Réessayer
              </CTAButton>
              {mode === 'training' && !isFinalExam && (
                <CTAButton
                  href="/certification/examen"
                  variant="secondary"
                  size="lg"
                >
                  🎓 Passer l'examen
                </CTAButton>
              )}
              <CTAButton
                href="/certification"
                variant="outline"
                size="lg"
              >
                ← Retour
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Module Selection */}
        {moduleId === null && (
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Choisir un module
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizData.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setSelectedModule(module)}
                  className={`p-6 rounded-lg text-left transition-all ${
                    selectedModule.id === module.id
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-white border-2 border-neutral-200 hover:border-accent'
                  }`}
                >
                  <p className="font-heading font-bold">{module.module}</p>
                  <p className="text-sm opacity-80">{module.questions.length} questions</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-primary">
              Question {currentQuestion + 1} sur {questions.length}
            </span>
            <div className="flex gap-4">
              <span className="text-neutral-600">
                Score: {score}/{questions.length}
              </span>
              {timeLeft !== null && (
                <span className={`font-bold ${timeColor}`}>
                  ⏱️ {formatTime(timeLeft)}
                </span>
              )}
            </div>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-accent to-orange-500 h-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-8" variant="default">
          <div className="mb-8">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              {question.text}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  answered && index === question.correct
                    ? 'border-green-500 bg-green-50 text-green-900'
                    : answered && index === answers[currentQuestion] && index !== question.correct
                    ? 'border-red-500 bg-red-50 text-red-900'
                    : answered
                    ? 'border-neutral-200 bg-neutral-50 text-neutral-400'
                    : 'border-neutral-200 hover:border-accent cursor-pointer'
                }`}
              >
                <p className="font-semibold">{option}</p>
              </button>
            ))}
          </div>

            {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            {currentQuestion > 0 && (
              <button
                onClick={handlePrev}
                className="px-6 py-3 bg-neutral-200 text-neutral-900 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                ← Précédent
              </button>
            )}
            
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              {currentQuestion === questions.length - 1 
                ? '✓ Voir les résultats' 
                : 'Suivant →'}
            </button>
          </div>

          {answered && (
            <div className={`p-4 rounded-lg text-center ${
              answers[currentQuestion] === question.correct
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}>
              <p className={`font-semibold ${
                answers[currentQuestion] === question.correct
                  ? 'text-green-900'
                  : 'text-red-900'
              }`}>
                {answers[currentQuestion] === question.correct
                  ? '✅ Bonne réponse!'
                  : '❌ Mauvaise réponse'}
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
