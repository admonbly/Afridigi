'use client';

import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import { quizData } from '@/lib/quizData';

/**
 * Page d'accueil formation/entrainement
 * Permettre aux utilisateurs de choisir entre:
 * - Entraînement par module (5 questions, 10 min)
 * - Entraînement mixte (5 questions mélangées, 10 min)
 */
export default function TrainingPage() {
  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-bold text-primary mb-4">
            📚 Formations Gratuites
          </h1>
          <p className="text-xl text-neutral-600">
            Entraînez-vous sans limite de temps. Pas de certificat, mais du feedback immédiat.
          </p>
        </div>

        {/* Modes d'entrainement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Entrainement par module */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">📘</div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">
              Entraînement par Module
            </h2>
            <p className="text-neutral-600 mb-6">
              Pratiquez les compétences d'un module spécifique avec des questions ciblées.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-neutral-700">
              <li>✅ 5 questions du module</li>
              <li>✅ 10 minutes</li>
              <li>✅ Feedback immédiat</li>
              <li>✅ Recommencez autant que vous voulez</li>
            </ul>
            <CTAButton
              href="#modules"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Sélectionner un module
            </CTAButton>
          </Card>

          {/* Entraînement mixte */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">
              Test Rapide Global
            </h2>
            <p className="text-neutral-600 mb-6">
              Testez vos connaissances avec un mélange de questions de tous les modules.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-neutral-700">
              <li>✅ 5 questions mélangées</li>
              <li>✅ Tous les modules</li>
              <li>✅ 10 minutes</li>
              <li>✅ Feedback immédiat</li>
            </ul>
            <CTAButton
              href="/training/mixed"
              variant="secondary"
              size="lg"
              className="w-full"
            >
              Démarrer le test rapide
            </CTAButton>
          </Card>
        </div>

        {/* Modules */}
        <div id="modules" className="mt-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            Sélectionner un Module
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizData.map((module) => (
              <Link key={module.id} href={`/training/module/${module.id}`}>
                <Card className="p-6 cursor-pointer hover:shadow-xl transition-all border-2 border-neutral-200 hover:border-accent h-full">
                  <p className="text-2xl font-heading font-bold text-primary mb-2">
                    {module.module}
                  </p>
                  <p className="text-sm text-neutral-600 mb-4">
                    {module.questions.length} questions disponibles
                  </p>
                  <div className="text-sm text-neutral-700 mb-6">
                    <p className="font-semibold mb-2">Dans cet entraînement:</p>
                    <ul className="space-y-1">
                      <li>• 5 questions aléatoires</li>
                      <li>• 10 minutes</li>
                      <li>• Complètement gratuit</li>
                    </ul>
                  </div>
                  <CTAButton
                    variant="primary"
                    size="md"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="w-full"
                  >
                    S'entraîner
                  </CTAButton>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Info badge */}
        <Card className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 text-center">
          <p className="text-lg text-primary font-semibold mb-2">
            💡 Prêt pour la véritable certification?
          </p>
          <p className="text-neutral-600 mb-4">
            Créez un compte pour passer l'examen officiel et obtenir un certificat reconnu.
          </p>
          <CTAButton
            href="/certification"
            variant="primary"
            size="lg"
          >
            Voir la certification officielle
          </CTAButton>
        </Card>
      </div>
    </section>
  );
}
