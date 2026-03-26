'use client';

import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function CertificationPage() {
  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-bold text-primary mb-4">
            🎓 Certification AfridigiNet
          </h1>
          <p className="text-xl text-neutral-600">
            Choisissez le type de formation qui vous convient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* S'entrainer */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">📚</div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">
              S'entrainer
            </h2>
            <p className="text-neutral-600 mb-6">
              Pratiquez module par module à votre rythme sans limite de temps
            </p>
            <ul className="space-y-2 mb-8 text-sm text-neutral-700">
              <li>✅ Pas de limite de temps</li>
              <li>✅ Un module à la fois</li>
              <li>✅ Retour aux questions précédentes</li>
              <li>✅ Feedback immédiat</li>
            </ul>
            <CTAButton
              href="/certification/s-entrainer"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Démarrer l'entraînement
            </CTAButton>
          </Card>

          {/* Passer un test de démo */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">
              Test de démo
            </h2>
            <p className="text-neutral-600 mb-6">
              Essayez un test limité pour comprendre le format de l'examen
            </p>
            <ul className="space-y-2 mb-8 text-sm text-neutral-700">
              <li>⏱️ 10 minutes limitées</li>
              <li>✅ Un module au hasard</li>
              <li>✅ Retour aux questions précédentes</li>
              <li>✅ Format d'examen réel</li>
            </ul>
            <CTAButton
              href="/certification/demo"
              variant="secondary"
              size="lg"
              className="w-full"
            >
              Commencer le test de démo
            </CTAButton>
          </Card>

          {/* Passer l'examen */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🏆</div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">
              Passer l'examen complet
            </h2>
            <p className="text-neutral-600 mb-6">
              Examen officiel avec questions de tous les modules mélangées
            </p>
            <ul className="space-y-2 mb-8 text-sm text-neutral-700">
              <li>⏱️ 35 minutes limitées</li>
              <li>✅ Questions mélangées</li>
              <li>✅ Tous les modules</li>
              <li>✅ Certificat si ≥ 60%</li>
            </ul>
            <CTAButton
              href="/certification/examen"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Passer l'examen complet
            </CTAButton>
          </Card>

          {/* Référentiel */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">📖</div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">
              Ressources
            </h2>
            <p className="text-neutral-600 mb-6">
              Consultez le référentiel et les supports d'apprentissage
            </p>
            <ul className="space-y-2 mb-8 text-sm text-neutral-700">
              <li>✅ Guide complet</li>
              <li>✅ Glossaire</li>
              <li>✅ Conseils pratiques</li>
              <li>✅ Ressources externes</li>
            </ul>
            <CTAButton
              href="/certification/referentiel"
              variant="outline"
              size="lg"
              className="w-full"
            >
              Consulter les ressources
            </CTAButton>
          </Card>
        </div>

        {/* Info */}
        <Card className="bg-accent/10 border-2 border-accent p-8 text-center">
          <p className="text-lg text-primary">
            💡 Pour obtenir un certificat, vous devez obtenir au minimum <strong>60%</strong> à l'examen complet
          </p>
        </Card>
      </div>
    </section>
  );
}
