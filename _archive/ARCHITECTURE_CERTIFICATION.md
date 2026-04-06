# Architecture Complète - Refonte Certification Syllabix

## 📋 Vue d'ensemble

### Deux espaces distincts:
- **ENTRAINEMENT**: Public, gratuit, sans compte, sans certificat
- **CERTIFICATION**: Avec compte, examen officiel, certificat PDF

---

## 🎯 ESPACE 1 - ENTRAINEMENT (PUBLIC)

### Routes
- `/training` → Sélection du mode
- `/training/module/:id` → 5 questions du module
- `/training/mixed` → 5 questions mélangées

### Caractéristiques
- **Questions**: 5 aléatoires
- **Durée**: 10 minutes
- **Feedback**: Immédiat après chaque réponse
- **Résultats**: Affichés mais non enregistrés
- **Certificat**: Aucun
- **Enregistrement**: Non

### Flow utilisateur
1. Sélectionner mode (module ou mixte)
2. Répondre à 5 questions (10 min)
3. Voir le score
4. Pouvoir refaire l'entraînement

---

## 🏆 ESPACE 2 - CERTIFICATION (AVEC COMPTE)

### Routes
- `/certification` → Hub certification
- `/exam/global` → Examen global 35 questions
- `/exam/module/:id` → Examen module 35 questions
- `/results/:attemptId` → Résultats avec certificat
- `/certificate/:id` → Télécharger certificat PDF
- `/verify-certificate/:id` → Vérifier certificat (public)

### Examen Global
- **Questions**: 35 aléatoires (tous modules mélangés)
- **Durée**: 35 minutes
- **Seuil réussite**: ≥60%
- **Certificat**: "Certificat de Compétences Numériques"
- **Tentatives**: 1 active à la fois (possibilité de retenter après résultats)

### Examen par Module (7 certificats)
Pour CHAQUE module:
- **Questions**: 35 aléatoires du module
- **Durée**: 35 minutes
- **Seuil réussite**: ≥60%
- **Certificat**: "Certificat – [Nom Module]"
- **Tentatives**: 1 active par module

---

## 📊 STRUCTURE DES DONNÉES

### Table: users
```sql
id (UUID)
email (unique)
fullName
createdAt
updatedAt
```

### Table: questions
```sql
id (UUID)
text (question)
options (JSON array)
correctAnswer (index 0-3)
module (enum: email, office, google, it, ia, cybersecurity, communication)
difficulty (easy, medium, hard)
createdAt
```

### Table: exam_attempts
```sql
id (UUID)
userId (FK)
type (global, module)
moduleId (si type=module)
startedAt
completedAt
timeSpent (secondes)
score (0-100)
status (in_progress, completed, abandoned)
answers (JSON array)
```

### Table: certificates
```sql
id (UUID)
userId (FK)
examAttemptId (FK)
type (global, module)
moduleName (si type=module)
score
issuedAt
certificateNumber (unique)
qrCode (data URL)
```

---

## 🔐 Logique d'Examen

### Timer
- Verrouillé (pas d'arrêt)
- Soumission automatique à 0
- Affichage temps restant

### Questions
- Aléatoires non répétées par session
- Réponses randomisées par question
- Un seul choix possible à la fois

### Anti-triche
- Sauvegarde automatique responses
- Détection refresh/fermeture onglet
- Une tentative active maximum

### Scoring
- 1 point par bonne réponse
- Score % = (bonnes réponses / 35) × 100
- Arrondi à l'entier

---

## 📜 Certificat PDF

### Contenu
```
┌─────────────────────────────────────────┐
│       SYLLABIX CERTIFICATION            │
│                                         │
│  Certificat de Compétences Numériques   │
│                                         │
│  Décerné à:                             │
│  [Nom Complet Utilisateur]              │
│                                         │
│  Score: [Score]%                        │
│  Date: [Date ISO]                       │
│  ID: CERT-[random]                      │
│                                         │
│  [QR Code]                              │
│  https://syllabix.com/verify/[ID]       │
│                                         │
│  Signature institutionnelle             │
└─────────────────────────────────────────┘
```

### Actions
- Téléchargement PDF
- Partage social (Twitter, LinkedIn)
- QR code scannable

---

## 🗂️ Structure Fichiers Frontend

```
app/
├── (public)/
│   └── training/
│       ├── page.jsx              (Hub sélection)
│       ├── module/
│       │   └── [id]/page.jsx      (Entraînement module)
│       └── mixed/page.jsx         (Entraînement mixte)
│
├── (auth)/
│   └── certification/
│       ├── page.jsx              (Hub certification)
│       ├── exam/
│       │   ├── global/page.jsx    (Examen global)
│       │   └── module/
│       │       └── [id]/page.jsx  (Examen module)
│       └── results/
│           └── [attemptId]/page.jsx
│
└── public/
    ├── certificate/[id]/page.jsx
    └── verify-certificate/[id]/page.jsx

components/
├── TrainingQuizComponent.jsx      (5 questions, 10 min)
├── CertificationQuizComponent.jsx (35 questions, 35 min)
├── CertificateGenerator.jsx
└── CertificateVerification.jsx

lib/
├── quizData.js                   (Données questions)
├── certificateService.js
└── examService.js
```

---

## 🔄 Migration depuis Ancien Système

### À SUPPRIMER:
- `/certification/demo` ❌ (déjà fait)
- `/certification/s-entrainer` → REMPLACER par `/training/module`
- `/certification/examen` → REMPLACER par `/exam/global`
- `/certification/module-cert` → REMPLACER par `/exam/module/[id]`
- Page certification accueil (restructurer)
- Tous les modes "demo" du QuizComponent

### À CRÉER:
- Système d'authentification (si pas setup)
- Tables base de données
- Logique certificat PDF
- Pages new training
- Pages certification avec middleware auth

---

## 🚀 Phases d'Implémentation

**Phase 1**: Structures de données + pages routes
**Phase 2**: Composants Training/Certification
**Phase 3**: Système certificat
**Phase 4**: Authentication + base de données
**Phase 5**: Tests et vérification

---

## 📈 Flux Utilisateur Complet

### Sans compte:
```
Accueil → Training → Choisir mode → 5Q / 10min → Score
```

### Avec compte:
```
Accueil → Login → Certification Hub 
  → Sélectionner examen (global ou module)
  → Instructions
  → 35Q / 35min
  → Score + Certificat PDF
  → Télécharger / Partager
```
