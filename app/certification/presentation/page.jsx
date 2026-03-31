'use client';

import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function PresentationPage() {
  const modules = [
    {
      module: 'IT (Ordinateur)',
      topics: [
        'Architecture d\'un ordinateur (processeur, RAM, disque dur)',
        'Système d\'exploitation (Windows, Mac, Linux)',
        'Installation et désinstallation de logiciels',
        'Gestion des fichiers et dossiers',
        'Maintenance et optimisation de l\'ordinateur',
      ],
    },
    {
      module: 'Internet & Google',
      topics: [
        'Navigation internet et URL',
        'Moteurs de recherche (Google, Bing)',
        'Recherche avancée et filtrages',
        'Sécurité des sites web (HTTPS, certificats)',
        'Favoris et historique',
      ],
    },
    {
      module: 'Email',
      topics: [
        'Créer un compte email (Gmail, Outlook)',
        'Composer et envoyer des emails',
        'Pièces jointes et formats',
        'Organisation des emails (dossiers, libellés)',
        'Gestion de la signature et des contacts',
      ],
    },
    {
      module: 'Bureautique',
      topics: [
        'Traitement de texte (Word, Google Docs)',
        'Feuilles de calcul (Excel, Google Sheets)',
        'Présentations (PowerPoint)',
        'Formatage et mise en page',
        'Collaboration et partage de documents',
      ],
    },
    {
      module: 'Cybersécurité',
      topics: [
        'Mots de passe forts et authentification',
        'Hameçonnage et escroqueries en ligne',
        'Malware, virus, et ransomware',
        'Sauvegarde des données',
        'Confidentialité en ligne',
      ],
    },
    {
      module: 'Intelligence Artificielle',
      topics: [
        'Définition et principes de l\'IA',
        'Assistants IA (ChatGPT, Claude)',
        'Génération d\'images (DALL-E, Midjourney)',
        'Applications pratiques de l\'IA',
        'Éthique et responsabilité de l\'IA',
      ],
    },
    {
      module: 'Employabilité',
      topics: [
        'Création de profil LinkedIn',
        'CVs et lettres de motivation numériques',
        'Communication professionnelle en ligne',
        'Visiophonie et réunions en ligne',
        'Outils collaboratifs (Teams, Slack, Zoom)',
      ],
    },
  ];

  return (
    <>
      {/* Section 1: Présentation */}
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
                description="Quand vous êtes prêt, passez l'examen officiel. 35 questions randomisées, 35 minutes."
              />
              <Card
                icon="3️⃣"
                title="Obtenir le certificat"
                description="Si vous obtenez 60%, vous recevez un certificat numérique que vous pouvez télécharger et partager."
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
              <CTAButton href="/training/mixed" size="lg">
                🏋️ S'entraîner d'abord
              </CTAButton>
              <CTAButton href="/exam/global" variant="secondary" size="lg">
                🎓 Passer l'examen
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Référentiel des Compétences */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Référentiel de Compétences</h2>
          <p className="section-subtitle mb-12">
            Consultez les compétences evaluées dans chaque module
          </p>

          <div className="space-y-8">
            {modules.map((item, index) => (
              <Card key={index} variant="accent" className="p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                  Module {index + 1}: {item.module}
                </h3>

                <ul className="space-y-3">
                  {item.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex gap-3 text-neutral-700">
                      <span className="text-accent font-bold">✓</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-accent/10 to-secondary/10">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">
              📋 À savoir
            </h3>
            <ul className="space-y-2 text-neutral-700">
              <li>✓ Chaque module contient 5 questions</li>
              <li>✓ Total: 35 questions</li>
              <li>✓ Temps limite: 35 minutes</li>
              <li>✓ Score minimum pour certificat: 60%</li>
              <li>✓ Les questions sont randomisées à chaque tentative</li>
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}
