'use client';

// Données de quiz provenant de QUESTIONS-COMPLETES.md
// Les questions sont synchronisées avec le contenu de la banque de questions complète.
// Total: 215 questions (5 démo + 7 modules × 30 questions)

export const quizData = [
  // MODULE 1: INFORMATIQUE (ORDINATEUR) - 30 Questions
  {
    id: 0,
    module: 'IT (Ordinateur)',
    time: null,
    description: 'Module informatique de base (30 questions)',
    questions: [
      {
        id: 1,
        text: 'Lequel de ces éléments est un périphérique de sortie (qui affiche ou communique des données) ?',
        options: ['Clavier', 'Souris', 'Écran d\'affichage', 'Microphone'],
        correct: 2,
      },
      {
        id: 2,
        text: 'À quoi sert la mémoire vive (RAM) dans un ordinateur ?',
        options: [
          'Stocker définitivement vos fichiers',
          'Permettre au processeur d\'accéder rapidement aux données en cours d\'utilisation',
          'Recharger la batterie',
          'Afficher les images sur l\'écran',
        ],
        correct: 1,
      },
      {
        id: 3,
        text: 'Votre ordinateur est très lent et fait beaucoup de bruits. Quel est probablement le problème ?',
        options: [
          'Le clavier est cassé',
          'Vous avez trop de programmes ouverts ou le disque est presque plein',
          'C\'est normal, tous les ordinateurs sont lents',
          'L\'écran consomme trop d\'énergie',
        ],
        correct: 1,
      },
      {
        id: 4,
        text: 'Quel système d\'exploitation n\'existe PAS ?',
        options: ['Windows (Microsoft)', 'Système macOS (Apple)', 'Linux (gratuit, accès source)', 'Chromesoft'],
        correct: 3,
      },
      {
        id: 5,
        text: 'Quel est le principal avantage d\'un disque SSD par rapport à un disque dur mécanique ?',
        options: [
          'Plus d\'espace de stockage disponible',
          'Plus rapide, plus silencieux, pas de pièces mobiles',
          'Moins cher à l\'achat',
          'Meilleur pour les jeux vidéo',
        ],
        correct: 1,
      },
      {
        id: 6,
        text: 'Le processeur d\'un ordinateur est connu pour être le "cerveau" de l\'ordinateur. Pourquoi ?',
        options: [
          'Il stocke tous vos fichiers',
          'Il exécute toutes les instructions et contrôle les autres composants',
          'Il affiche les images sur l\'écran',
          'Il crée Internet',
        ],
        correct: 1,
      },
      {
        id: 7,
        text: 'Dans Windows, à quoi sert l\'explorateur de fichiers ?',
        options: [
          'À supprimer automatiquement les virus',
          'À naviguer dans la structure des dossiers et fichiers de votre ordinateur',
          'À télécharger Internet',
          'À changer la couleur de votre bureau',
        ],
        correct: 1,
      },
      {
        id: 8,
        text: 'Vous cliquez droit sur un fichier et sélectionnez "Propriétés". Quelle information pouvez-vous voir ?',
        options: [
          'Seulement le nom du fichier',
          'La taille, la date de création, le chemin d\'accès, le type de fichier',
          'Un accès direct à Internet',
          'Le mot de passe de votre ordinateur',
        ],
        correct: 1,
      },
      {
        id: 9,
        text: 'Comment libérer de l\'espace sur le disque dur de votre ordinateur ?',
        options: [
          'Éteindre l\'ordinateur plusieurs fois par jour',
          'Supprimer les fichiers inutiles, les anciens téléchargements, les fichiers temporaires',
          'Augmenter le volume des haut-parleurs',
          'Mettre à jour le système d\'exploitation',
        ],
        correct: 1,
      },
      {
        id: 10,
        text: 'Lequel est un format de fichier image couramment utilisé ?',
        options: ['JPEG', 'DOCX', 'XLSX', 'MPEG'],
        correct: 0,
      },
      {
        id: 11,
        text: 'Pourquoi est-il important d\'avoir un antivirus sur votre ordinateur ?',
        options: [
          'Pour accélérer Internet',
          'Pour protéger votre ordinateur contre les virus, logiciels malveillants et menaces informatiques',
          'Pour augmenter la taille du disque',
          'Pour changer le fond d\'écran',
        ],
        correct: 1,
      },
      {
        id: 12,
        text: 'Que fait une mise à jour système sur votre ordinateur ?',
        options: [
          'Rend votre ordinateur plus lent',
          'Corrige les failles de sécurité, ajoute des fonctionnalités, améliore la stabilité',
          'Supprime tous vos fichiers',
          'Change votre mot de passe automatiquement',
        ],
        correct: 1,
      },
      {
        id: 13,
        text: 'À quoi sert un port USB sur un ordinateur ?',
        options: [
          'À chauffer l\'ordinateur',
          'À connecter des périphériques comme une souris, clé USB, imprimante, etc.',
          'À émettre Internet',
          'À afficher les images',
        ],
        correct: 1,
      },
      {
        id: 14,
        text: 'Qu\'est-ce que le Wi-Fi sur un ordinateur ?',
        options: [
          'Un type de virus informatique',
          'Une technologie pour se connecter à Internet sans fil',
          'Un nom de processeur',
          'Un type de fichier à télécharger',
        ],
        correct: 1,
      },
      {
        id: 15,
        text: 'Quelle est la différence entre un simple clic et un double clic de souris ?',
        options: [
          'Aucune différence',
          'Le simple clic sélectionne, le double clic ouvre généralement le fichier ou programme',
          'Le double clic est plus lent',
          'Le simple clic rend l\'ordinateur plus rapide',
        ],
        correct: 1,
      },
      {
        id: 16,
        text: 'À quoi sert la barre des tâches au bas de votre écran Windows ?',
        options: [
          'À jouer de la musique',
          'À afficher les programmes ouverts, l\'heure, et permettre de lancer des programmes',
          'À afficher les images uniquement',
          'À charger les jeux vidéo',
        ],
        correct: 1,
      },
      {
        id: 17,
        text: 'Quel est l\'avantage d\'avoir deux écrans connectés au même ordinateur ?',
        options: [
          'C\'est deux fois plus lent',
          'Augmente l\'espace de travail, améliore la productivité',
          'C\'est seulement pour les jeux vidéo',
          'Cela rend l\'ordinateur cassé',
        ],
        correct: 1,
      },
      {
        id: 18,
        text: 'Pourquoi la batterie d\'un ordinateur portable se décharge avec le temps ?',
        options: [
          'Le disque dur consomme toute l\'électricité',
          'Les composants de l\'ordinateur consomment l\'énergie stockée dans la batterie',
          'Parce que vous oubliez d\'éteindre l\'ordinateur',
          'La batterie devient automatiquement cassée',
        ],
        correct: 1,
      },
      {
        id: 19,
        text: 'Que signifie "permissions de lecture et d\'écriture" pour un fichier ?',
        options: [
          'Les deux signifient la même chose',
          'Lecture = voir le contenu, Écriture = modifier le contenu',
          'Les deux permettent de supprimer le fichier',
          'Les deux permettent de partager le fichier en ligne',
        ],
        correct: 1,
      },
      {
        id: 20,
        text: 'À quoi sert la défragmentation d\'un disque dur ?',
        options: [
          'À supprimer tous vos fichiers',
          'À réorganiser les données pour que le disque accède plus rapidement aux fichiers',
          'À augmenter la vitesse d\'Internet',
          'À charger les jeux vidéo instantanément',
        ],
        correct: 1,
      },
      {
        id: 21,
        text: 'Quelle est la principale différence entre Bloc-notes et un logiciel de traitement de texte ?',
        options: [
          'Aucune différence, ce sont les mêmes',
          'Bloc-notes = texte brut simple, Traitement de texte = formatage avancé',
          'Bloc-notes est plus lent',
          'Traitement de texte n\'existe pas sur ordinateur',
        ],
        correct: 1,
      },
      {
        id: 22,
        text: 'Pourquoi compresser un fichier ou un dossier en ZIP ?',
        options: [
          'Pour l\'ouvrir plus rapidement',
          'Pour prendre moins d\'espace disque et faciliter le partage',
          'Pour protéger le fichier des virus',
          'Pour le partager uniquement par e-mail',
        ],
        correct: 1,
      },
      {
        id: 23,
        text: 'Quelle est la différence entre mettre son ordinateur en veille et l\'arrêter complètement ?',
        options: [
          'Il n\'y a pas de différence',
          'Veille = consomme peu d\'énergie et peut redémarrer vite. Arrêt = éteint complètement',
          'La veille est plus rapide mais coûte plus cher',
          'L\'arrêt est seulement pour les ordinateurs portables',
        ],
        correct: 1,
      },
      {
        id: 24,
        text: 'Qu\'est-ce qu\'un logiciel d\'espionnage (spyware) ?',
        options: [
          'Un logiciel qui améliore votre ordinateur',
          'Un logiciel malveillant qui collecte vos données personnelles sans permission',
          'Un jeu vidéo espion',
          'Un système d\'exploitation nouveau',
        ],
        correct: 1,
      },
      {
        id: 25,
        text: 'À quoi sert le raccourci clavier Alt+Tab ?',
        options: [
          'À créer une nouvelle fenêtre',
          'À basculer rapidement entre les programmes ouverts',
          'À fermer tous les programmes',
          'À sauvegarder votre travail',
        ],
        correct: 1,
      },
      {
        id: 26,
        text: 'Dans une fenêtre de programme, qu\'indique le bouton en haut à droite avec deux carrés ?',
        options: [
          'C\'est le bouton pour fermer',
          'C\'est le bouton pour agrandir en plein écran ou redimensionner la fenêtre',
          'C\'est le bouton pour lancer une nouvelle application',
          'C\'est le bouton pour émettre du son',
        ],
        correct: 1,
      },
      {
        id: 27,
        text: 'Pourquoi certaines actions sur votre ordinateur demandent un mot de passe administrateur ?',
        options: [
          'Pour ralentir votre ordinateur',
          'Pour protéger l\'ordinateur contre les modifications non autorisées',
          'Pour réduire votre productivité',
          'C\'est juste une erreur du système',
        ],
        correct: 1,
      },
      {
        id: 28,
        text: 'Qu\'est-ce que le "Registre Windows" ?',
        options: [
          'Un fichier contenant vos documents',
          'Une base de données contenant toutes les configurations système, logiciels et préférences',
          'Un type de fichier image',
          'Un programme pour jouer aux jeux vidéo',
        ],
        correct: 1,
      },
      {
        id: 29,
        text: 'Qu\'est-ce qu\'un fichier "sauvegarde" ou "backup" ?',
        options: [
          'Un fichier temporaire qui ralentit l\'ordinateur',
          'Une copie de vos données importantes pour les récupérer en cas de perte',
          'Un fichier qui se supprime automatiquement',
          'Un format de fichier spécial pour les jeux',
        ],
        correct: 1,
      },
      {
        id: 30,
        text: 'Qu\'est-ce que la fréquence d\'un processeur mesurée en GHz (Gigahertz) ?',
        options: [
          'La quantité de mémoire RAM de l\'ordinateur',
          'La vitesse d\'exécution des instructions du processeur',
          'Le poids de l\'ordinateur en grammes',
          'La taille de l\'écran en pouces',
        ],
        correct: 1,
      },
    ],
  },

  // MODULE 2: INTERNET & GOOGLE - 5 Questions
  {
    id: 1,
    module: 'Internet & Google',
    time: null,
    description: 'Internet et moteurs de recherche (5 questions)',
    questions: [
      {
        id: 1,
        text: 'Qu\'est-ce qu\'une URL (adresse web) ?',
        options: [
          'Un type de virus informatique',
          'L\'adresse d\'une page sur Internet (exemple: www.google.com)',
          'Un fichier téléchargé sur votre ordinateur',
          'Une ligne dans un email',
        ],
        correct: 1,
      },
      {
        id: 2,
        text: 'Comment s\'appelle le logiciel qui vous permet de consulter des pages internet ?',
        options: ['Moteur de recherche', 'Navigateur web', 'Système d\'exploitation', 'Antivirus'],
        correct: 1,
      },
      {
        id: 3,
        text: 'Vous cherchez des informations en français. Lequel utiliseriez-vous ?',
        options: [
          'Google Africa (n\'existe pas officiellement)',
          'Google.com avec la langue définie en français ou Google.ci pour Côte d\'Ivoire',
          'Yahoo du Sénégal',
          'Bing uniquement pour l\'Afrique',
        ],
        correct: 1,
      },
      {
        id: 4,
        text: 'Que veut dire "HTTPS" dans une URL ?',
        options: [
          'C\'est plus rapide que HTTP',
          'C\'est une version ancienne d\'Internet',
          'La connexion est chiffrée et sécurisée',
          'C\'est un fournisseur d\'accès Internet',
        ],
        correct: 2,
      },
      {
        id: 5,
        text: 'Vous trouvez une information on Internet qui semble incroyable. Comment vérifier sa crédibilité ?',
        options: [
          'Vous la partagez immédiatement sur le réseau social',
          'Vous vérifiez la source, cherchez d\'autres sources fiables, analysez les dates',
          'Vous acceptez tout ce que vous lisez',
          'Vous demandez simplement à vos amis sur WhatsApp',
        ],
        correct: 1,
      },
    ],
  },

  // MODULE 3: EMAIL - 5 Questions
  {
    id: 2,
    module: 'Email',
    time: null,
    description: 'Communication par email (5 questions)',
    questions: [
      {
        id: 1,
        text: 'Quelle est la structure correcte d\'une adresse email ?',
        options: ['nom.domaine@com', 'nom@domaine.extension', '@nomdiffrandomdom', 'domaine.nom@'],
        correct: 1,
      },
      {
        id: 2,
        text: 'Que signifie "CC" dans un email ?',
        options: [
          'Confidentiel Crypté',
          'Copie Conforme (copie visible de l\'email)',
          'Confirmation de Compte',
          'Code de Connexion',
        ],
        correct: 1,
      },
      {
        id: 3,
        text: 'Vous recevez un email vous demandant de "vérifier votre compte PayPal en cliquant ici". Quelle est la bonne action ?',
        options: [
          'Cliquer sur le lien fourni',
          'Répondre avec votre mot de passe',
          'Aller directement sur PayPal.com sans cliquer le lien',
          'Partager l\'email avec vos amis',
        ],
        correct: 2,
      },
      {
        id: 4,
        text: 'En Afrique, pour envoyer de l\'argent par email, lequel utiliseriez-vous ?',
        options: [
          'L\'email standard Gmail',
          'Un service de paiement mobile africain (Orange Money, MTN Mobile Money, Wave)',
          'Yahoo Mail pour envoyer de l\'argent',
          'Aucun, cela n\'existe pas',
        ],
        correct: 1,
      },
      {
        id: 5,
        text: 'Vous devez envoyer un document confidentiel par email à votre patron. Que faites-vous ?',
        options: [
          'Vous l\'envoyez en clair (lisible directement)',
          'Vous chiffrez le PDF avec un mot de passe et l\'envoyez séparément du mot de passe',
          'Vous ne l\'envoyez pas du tout',
          'Vous le postez sur votre compte Facebook',
        ],
        correct: 1,
      },
    ],
  },

  // MODULE 4: BUREAUTIQUE - 5 Questions
  {
    id: 3,
    module: 'Bureautique',
    time: null,
    description: 'Outils bureautiques (5 questions)',
    questions: [
      {
        id: 1,
        text: 'Quel logiciel utilise-t-on pour créer un document texte ?',
        options: ['Microsoft Excel', 'Microsoft Word ou LibreOffice Writer', 'Microsoft PowerPoint', 'Adobe Photoshop'],
        correct: 1,
      },
      {
        id: 2,
        text: 'Pour faire des calculs et des graphiques, quel logiciel utilisez-vous ?',
        options: ['Word', 'PowerPoint', 'Excel ou LibreOffice Calc', 'Notepad'],
        correct: 2,
      },
      {
        id: 3,
        text: 'En Afrique, vous devez créer un budget pour un petit commerce. Quel outil est le mieux ?',
        options: [
          'Vous notez en papier',
          'Un tableur (Excel ou Calc) avec des catégories, des calculs automatiques',
          'Google Docs (document texte)',
          'Un email',
        ],
        correct: 1,
      },
      {
        id: 4,
        text: 'Comment insérer une image dans un document Word ?',
        options: [
          'Vous ne pouvez pas',
          'Insertion > Image > Sélectionner le fichier',
          'Vous devez payer pour ça',
          'Ce n\'est possible que en version en ligne',
        ],
        correct: 1,
      },
      {
        id: 5,
        text: 'Vous devez formater un CV professionnel. Que ne faites-vous PAS ?',
        options: [
          'Ajouter des couleurs sobres',
          'Utiliser des fonts lisibles',
          'Avec un design complètement fou et de la Comic Sans',
          'Garder une structure claire',
        ],
        correct: 2,
      },
    ],
  },

  // MODULE 5: CYBERSÉCURITÉ - 5 Questions
  {
    id: 4,
    module: 'Cybersécurité',
    time: null,
    description: 'Protection et sécurité informatique (5 questions)',
    questions: [
      {
        id: 1,
        text: 'Un mot de passe sûr doit contenir :',
        options: [
          'Uniquement votre nom',
          'Uniquement des chiffres',
          'Lettres (majuscules + minuscules) + chiffres + caractères spéciaux',
          'Votre date de naissance',
        ],
        correct: 2,
      },
      {
        id: 2,
        text: 'Que signifie "malware" ?',
        options: [
          'Un logiciel utile',
          'Un virus ou logiciel malveillant',
          'Un système d\'exploitation',
          'Un type de processeur',
        ],
        correct: 1,
      },
      {
        id: 3,
        text: 'Vous utilisez le WiFi public d\'un café en Afrique. Comment protégez-vous vos données ?',
        options: [
          'Vous faites vos transactions bancaires directement',
          'Vous utilisez un VPN pour chiffrer votre connexion',
          'Vous ignorez la sécurité',
          'Vous utilisez Facebook uniquement',
        ],
        correct: 1,
      },
      {
        id: 4,
        text: 'Un virus peut se propager par :',
        options: [
          'L\'air',
          'Les emails avec pièces jointes malveillantes',
          'Juste en regardant votre écran',
          'Les livres',
        ],
        correct: 1,
      },
      {
        id: 5,
        text: 'Après un achat en ligne, vous recevez un SMS "Cliquez pour confirmer votre livraison". C\'est quoi ?',
        options: [
          'Un vrai message de livraison',
          'Une tentative de vol d\'identité (smishing) - ne cliquez pas',
          'Un service premium à acheter',
          'Un message de votre banque',
        ],
        correct: 1,
      },
    ],
  },

  // MODULE 6: INTELLIGENCE ARTIFICIELLE - 5 Questions
  {
    id: 5,
    module: 'Intelligence Artificielle',
    time: null,
    description: 'IA et technologies intelligentes (5 questions)',
    questions: [
      {
        id: 1,
        text: 'Qu\'est-ce que l\'Intelligence Artificielle (IA) ?',
        options: [
          'Un film de science-fiction',
          'Un ensemble de technologies imitant l\'intelligence humaine',
          'Un virus informatique',
          'Un navigateur Internet',
        ],
        correct: 1,
      },
      {
        id: 2,
        text: 'ChatGPT est :',
        options: [
          'Un email gratuit',
          'Un modèle de langage IA pour converser',
          'Un jeu vidéo',
          'Un fournisseur d\'accès Internet',
        ],
        correct: 1,
      },
      {
        id: 3,
        text: 'En Afrique, une small business peut utiliser l\'IA pour :',
        options: [
          'Remplacer tous les employés (mauvaise idée!)',
          'Améliorer le service client (chatbot), analyse de données, recommandations',
          'Rien, c\'est trop compliqué',
          'Juste pour faire du marketing',
        ],
        correct: 1,
      },
      {
        id: 4,
        text: 'L\'IA générative peut créer :',
        options: ['Que du texte', 'Texte, images, vidéos, code, musique', 'Rien', 'Que des images'],
        correct: 1,
      },
      {
        id: 5,
        text: 'Quels sont les risques éthiques de l\'IA ?',
        options: [
          'Pas de risques',
          'Biais dans les algorithmes, privacy, deepfakes, dépendance',
          'Aucun risque techniquement',
          'Juste un hype sans importance',
        ],
        correct: 1,
      },
    ],
  },

  // MODULE 7: EMPLOYABILITÉ - 5 Questions
  {
    id: 6,
    module: 'Employabilité',
    time: null,
    description: 'Emploi et développement de carrière (5 questions)',
    questions: [
      {
        id: 1,
        text: 'Pour chercher un emploi en ligne, le premier outil est :',
        options: [
          'Facebook',
          'LinkedIn ou les jobboards locaux africains',
          'Appel téléphonique',
          'Votre CV papier',
        ],
        correct: 1,
      },
      {
        id: 2,
        text: 'Qu\'est-ce qu\'un portfolio numérique ?',
        options: [
          'Un dossier papier',
          'Une collection de vos projets, compétences, résultats en ligne',
          'Une formation payante',
          'Un CV word classique',
        ],
        correct: 1,
      },
      {
        id: 3,
        text: 'En Afrique, quel est l\'avantage d\'avoir des certifications numériques ?',
        options: [
          'Aucun intérêt',
          'Différenciation face aux concurrents, preuve de compétences vérifiées',
          'Uniquement pour les riches',
          'Juste pour décorer votre CV',
        ],
        correct: 1,
      },
      {
        id: 4,
        text: 'Le networking numérique signifie :',
        options: [
          'Acheter des ordinateurs',
          'Créer des contacts professionnels en ligne (LinkedIn, events virtuels)',
          'Installer un réseau WiFi',
          'Aucun rapport avec l\'emploi',
        ],
        correct: 1,
      },
      {
        id: 5,
        text: 'Quel est le meilleur stratégie pour une carrière tech durable en Afrique ?',
        options: [
          'Acquérir une compétence et rester statique',
          'Apprendre continuellement, réseauter, avoir un portfolio visible, être flexible',
          'Attendre une opportunité',
          'Copier exactement ce que les autres font',
        ],
        correct: 1,
      },
    ],
  },
];
