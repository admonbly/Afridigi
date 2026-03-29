'use client';

import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function PresentationPage() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Certification des Compétences Numériques</h1>

        <div className="prose prose-lg max-w-none text-neutral-700">
          <p className="text-xl leading-relaxed mb-8">
            Syllabix offre une certification reconnue des compétences numériques essentielles.
            Notre plateforme évalue vos compétences à travers 7 modules couvrant tous les domaines
            critiques de l'informatique moderne.
          </p>

          <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
            Comment ça marche?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
            <Card
              icon="1️⃣"
              title="S'entraîner"
              description="Testez vos connaissances sur chaque module. Pas de limite, entraînez-vous autant que vous voulez."
            />
            <Card
              icon="2️⃣"
              title="Passer l'examen"
              description="Quand vous êtes prêt, passez l'examen officiel. 35 questions randomisées, 30 minutes."
            />
            <Card
              icon="3️⃣"
              title="Obtenir le certificat"
              description="Si vous obtenez 60%, vous recevez un certificat numérique que vous pouvez télécharger et partager."
            />
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
            Les 7 modules d'évaluation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <Card
              icon="💻"
              title="Module 1: IT (Ordinateur)"
              description="Comprendre les composants d'un ordinateur, l'installation de logiciels, et les opérations de base."
            />
            <Card
              icon="🌐"
              title="Module 2: Internet & Google"
              description="Naviguer sur le web, utiliser les outils Google, et rechercher efficacement des informations."
            />
            <Card
              icon="📧"
              title="Module 3: Email"
              description="Créer un compte email, envoyer des emails, gérer les pièces jointes, et l'organisation."
            />
            <Card
              icon="📄"
              title="Module 4: Bureautique"
              description="Word, Excel, PowerPoint. Créer des documents, feuilles de calcul, et présentations."
            />
            <Card
              icon="🔒"
              title="Module 5: Cybersécurité"
              description="Mots de passe sécurisés, hameçonnage, malware, et bonnes pratiques de sécurité."
            />
            <Card
              icon="🤖"
              title="Module 6: Intelligence Artificielle"
              description="Qu'est-ce que l'IA? Chatbots, génération d'images, et applications pratiques."
            />
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
            Système de scoring
          </h2>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-8 my-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-2xl font-bold text-accent mb-2">80-100%</p>
                <p className="text-neutral-700 font-semibold">AVANCÉ</p>
                <p className="text-sm text-neutral-600">Certificat Premium</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary mb-2">60-79%</p>
                <p className="text-neutral-700 font-semibold">INTERMÉDIAIRE</p>
                <p className="text-sm text-neutral-600">Certificat Standard</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-500 mb-2">&lt;60%</p>
                <p className="text-neutral-700 font-semibold">DÉBUTANT</p>
                <p className="text-sm text-neutral-600">Pas de certificat</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
            Prêt à commencer?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <CTAButton href="/certification/s-entrainer" size="lg">
              🏋️ S'entraîner d'abord
            </CTAButton>
            <CTAButton href="/certification/examen" variant="secondary" size="lg">
              🎓 Passer l'examen
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
