'use client';

// Données de quiz provenant de QUESTIONS-COMPLETES.md
// Les questions suivantes sont inspirées et synchronisées avec le contenu de la banque de questions complète.
// Pour ajouter de nouvelles questions, compléter ce fichier puis mettre à jour le markdown QUESTIONS-COMPLETES.md.

export const quizData = [
  {
    id: 0,
    module: 'Démo (Mixte)',
    mode: 'demo',
    time: 600,
    description: 'Test de démo (10 minutes)',
    questions: [
      {
        id: 1,
        text: 'Quel raccourci clavier permet de copier un fichier sous Windows ?',
        options: ['Ctrl+V', 'Ctrl+X', 'Ctrl+C', 'Ctrl+Alt+C'],
        correct: 2,
      },
      {
        id: 2,
        text: 'Qu\'est-ce qu\'un moteur de recherche sur Internet ?',
        options: [
          'Un navigateur web',
          'Un outil pour chercher des informations sur Internet',
          'Un virus informatique',
          'Un type de fichier',
        ],
        correct: 1,
      },
      {
        id: 3,
        text: 'Vous recevez un email suspect demandant de cliquer sur un lien pour vérifier votre identité. Que faites-vous ?',
        options: [
          'Je clique immédiatement sur le lien',
          'Je supprime sans ouvrir',
          'Je vérifie l\'adresse et reste méfiant',
          'Je réponds avec mes infos',
        ],
        correct: 2,
      },
      {
        id: 4,
        text: 'Quelle est la structure correcte d\'une adresse email ?',
        options: [
          'nom.domaine@com',
          'nom@domaine.extension',
          '@nomdiffrandomdom',
          'domaine.nom@',
        ],
        correct: 1,
      },
      {
        id: 5,
        text: 'Quel portfolio numérique montrer à des recruteurs ?',
        options: [
          'Aucun, juste CV papier',
          'Profil LinkedIn, portfolio en ligne, projets GitHub',
          'Certificats imprimés uniquement',
          'Rien, juste appel téléphonique',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 1,
    module: 'IT (Ordinateur)',
    time: null,
    description: 'Module informatique de base',
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
          'Clic droit sur Poste de travail > Propriétés',
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
  // Modules Internet & Email etc. peuvent être ajoutés ici de manière complète
];
