'use client';

import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import { quizData } from '@/lib/quizData';

/**
 * Hub de certification
 * Affiche les options:
 * - Examen global (35 q, 35 min)
 * - Examen par module (35 q, 35 min) x 7 certificats
 */
export default function CertificationPage() {
  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-bold text-primary mb-4">
            🏆 Certification Officielle
          </h1>
          <p className="text-xl text-neutral-600">
            Obtenez des certificats reconnus en passant les examens officiels.
          </p>
        </div>

        {/* Examen Global */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">
            1️⃣ Examen Global
          </h2>

          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                  Certificat de Compétences Numériques
                </h3>
                <p className="text-neutral-600 mb-6">
                  L'examen principal qui certifie vos compétences numériques globales avec un certificat officiel.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    <span className="text-neutral-700"><strong>35 questions</strong> mélangées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⏱</span>
                    <span className="text-neutral-700"><strong>35 minutes</strong> (1 min/question)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    <span className="text-neutral-700"><strong>60% minimum</strong> pour réussir</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📜</span>
                    <span className="text-neutral-700"><strong>Certificat PDF</strong> téléchargeable</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-4">✨ À savoir:</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>✓ Questions de tous les modules mélangées aléatoirement</li>
                  <li>✓ Timer verrouillé - soumission automatique à 0</li>
                  <li>✓ Una seule tentative active à la fois</li>
                  <li>✓ Sauvegarde automatique</li>
                  <li>✓ Résultats enregistrés sur votre compte</li>
                  <li>✓ Certificat partageable (QR code, LinkedIn, etc.)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <CTAButton
                href="/exam/global"
                variant="primary"
                size="lg"
              >
                Passer l'examen global
              </CTAButton>
            </div>
          </Card>
        </div>

        {/* Examens par Module */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">
            2️⃣ Examens par Module (7 certificats)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {quizData.map((module) => (
              <Card key={module.id} className="p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {module.module}
                </h3>
                <p className="text-neutral-600 mb-6">
                  Obtenez un certificat pour ce module spécifique.
                </p>

                <div className="space-y-2 mb-6 text-sm text-neutral-700">
                  <div className="flex items-center gap-2">
                    <span>📋</span>
                    <span><strong>35 questions</strong> du module</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⏱</span>
                    <span><strong>35 minutes</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✅</span>
                    <span><strong>60% minimum</strong></span>
                  </div>
                </div>

                <CTAButton
                  href={`/exam/module/${module.id}`}
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  Tester le module
                </CTAButton>
              </Card>
            ))}
          </div>
        </div>

        {/* Info final */}
        <Card className="bg-green-50 border-l-4 border-green-500 p-6 text-center">
          <p className="text-lg font-semibold text-primary mb-2">💡 Astuce</p>
          <p className="text-neutral-600 mb-4">
            Pratiquez d'abord dans l'espace "Formations Gratuites" avant de passer les examens officiels!
          </p>
          <CTAButton href="/training" variant="outline" size="lg">
            Aller aux formations
          </CTAButton>
        </Card>
      </div>
    </section>
  );
}
