'use client';

import Card from '@/components/Card';

export default function ReferentielPage() {
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
    <section className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Référentiel de Compétences</h1>
        <p className="section-subtitle">
          Consultez les compétences evaluées dans chaque module
        </p>

        <div className="space-y-8">
          {modules.map((item, index) => (
            <Card key={index} variant="accent" className="p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                Module {index + 1}: {item.module}
              </h2>

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
            <li>✓ Temps limite: 30 minutes</li>
            <li>✓ Score minimum pour certificat: 60%</li>
            <li>✓ Les questions sont randomisées à chaque tentative</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
