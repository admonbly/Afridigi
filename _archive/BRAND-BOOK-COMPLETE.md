# 🎨 CHARTE GRAPHIQUE COMPLÈTE - AFRIDIGI

**Extraite de**: Brand Book.docx + Analysis CSS actuel  
**Date**: 24 Mars 2026  
**Version**: 2.0 Complète

---

## 🌍 PALETTE DE COULEURS OFFICIELLES

### Couleurs Primaires (Charte Officielle - Brand Book)

| Couleur | Hex | RGB | Nom Français | Symbolique | Usage |
|---------|-----|-----|--------------|-----------|-------|
| **Bleu Savant** | `#1A237E` | rgb(26, 35, 126) | Bleu naval foncé | Académie, technologie, confiance, certification | Titres, texte principal, éléments de confiance |
| **Ocre Terre** | `#E67E22` | rgb(230, 126, 34) | Orange-brun | Énergie créative, sol africain, dynamisme | CTA, accents, boutons, énergie |
| **Vert Émeraude** | `#27AE60` | rgb(39, 174, 96) | Vert nature | Croissance, espoir, apprentissage continu | Succès, progrès, éléments positifs |
| **Blanc Cassé** | `#F4F4F4` | rgb(244, 244, 244) | Crème légère | Confort de lecture sur écran, clarté | Backgrounds clairs, espaces de respirabilité |

### Couleurs Complémentaires (Actuellement implémentées)

| Couleur | Hex | RGB | Usage |
|---------|-----|-----|-------|
| Primary Gradient Start | `#667eea` | rgb(102, 126, 234) | Gradient principal (bleu pourpre) |
| Primary Gradient End | `#764ba2` | rgb(118, 75, 162) | Gradient principal (violet) |
| Success Green | `#27AE60` | rgb(39, 174, 96) | Réponses correctes, feedback positif |
| Warning Yellow | `#F39C12` | rgb(243, 156, 18) | Avertissements, attention |
| Danger Red | `#E74C3C` | rgb(231, 76, 60) | Erreurs, réponses incorrectes |
| Light Background | `#F5F7FA` | rgb(245, 247, 250) | Sections claires, backgrounds |
| Dark Text | `#2C3E50` | rgb(44, 62, 80) | Texte sombre, fort contraste |
| Main Text | `#34495E` | rgb(52, 73, 94) | Texte principal |
| Border | `#DDD` | rgb(221, 221, 221) | Bordures, séparateurs |

### ⚠️ REMARQUE - Harmonisation Nécessaire

**Situation actuelle**: Application utilise gradient bleu-pourpre (#667eea → #764ba2)  
**Charte officielle**: Utilise Bleu Savant (#1A237E) + Ocre Terre (#E67E22)

**Recommandation**: Adapter le design actuel pour intégrer les 4 couleurs officielles de manière cohérente

---

## 🔤 TYPOGRAPHIE

### Polices Officielles

| Élément | Police | Poids | Cas d'usage |
|---------|--------|-------|-----------|
| **Titres H1-H3** | Montserrat | Bold (700) | Titre principal, en-têtes, accroches |
| **Corps de texte** | Open Sans | Regular (400) | Paragraphes, descriptions, contenu éducatif |
| **Alternative (Actuelle)** | Poppins | 300, 400, 600, 700 | Titres, subtitles, texte principal, bold |

### Tailles de Typo (du CSS analysé)

| Élément | Taille | Poids | Exemple |
|---------|--------|-------|---------|
| H1 (Hero) | 56px | 700 | Titre page d'accueil |
| H2 (Section) | 28px | 700 | Titre de section |
| H3 (Subsection) | 24px | 700 | Titre de sous-section |
| Subtitle (Light) | 24px | 300 | Sous-titres légers |
| Body (Principal) | 16px | 400 | Texte principal |
| Small | 14px | 400 | Étiquettes, petit texte |

---

## 📐 ESPACEMENTS & RYTHME VERTICAL

### Unité de base: 20px (1 unité = 20px)

| Taille | Valeur | Usage |
|--------|--------|-------|
| xs | 8px | Très compact (icônes, badges) |
| sm | 12px | Compact (entre inline elements) |
| md | 15px | Standard (gap flexbox) |
| lg | 20px | Confortable (padding cards, margin) |
| xl | 30px | Aéré (section spacing) |
| 2xl | 40px | Extra-large (page padding) |

### Border Radius

| Élément | Radius | Usage |
|---------|--------|-------|
| Buttons | 8px | Boutons, champs |
| Cards | 12-15px | Cartes, containers |
| Inputs | 8px | Champs formulaire |
| Large containers | 15px | Sections principales |

---

## 🎬 ANIMATIONS & TRANSITIONS

### Timings Standards

| Propriété | Valeur |
|-----------|--------|
| Durée | 0.3s |
| Timing | ease / ease-out |
| Fonction | cubic-bezier |

### Keyframes

| Animation | Durée | Effet | Usage |
|-----------|-------|-------|-------|
| `slideDown` | 0.6s | fadeIn + translateY(-30px) | Entrée page |
| `bounce` | 2s | translateY(±20px) infinite | Logo hero |
| `fadeIn` | 0.5s | opacity: 0 → 1 | Fade classique |

### Transform Effects

| Élément | Effet | Valeur |
|---------|-------|--------|
| Hover button | Translate Y | -2px |
| Hover module card | Translate Y | -5px à -8px |
| Hover feature | Translate Y | -5px |

---

## 📏 SHADOWS (Profondeur)

```css
--shadow-small: 0 4px 12px rgba(0,0,0,0.1);
--shadow-medium: 0 5px 20px rgba(0,0,0,0.1);
--shadow-large: 0 10px 40px rgba(0,0,0,0.15);
--shadow-deep: 0 15px 40px rgba(0,0,0,0.15);
--shadow-glow: 0 4px 15px rgba(102, 126, 234, 0.4);
```

---

## 🎨 SYSTÈME DE BADGES / GAMIFICATION

### 4 Niveaux de Progression

| Niveau | Nom Badge | Icône/Image | Couleur | Signification |
|--------|-----------|-----------|--------|--------------|
| **1** | Graine | Petite pousse stylisée | Vert Émeraude | Initiation, premiers pas |
| **2** | Savane | Horizon + acacia | Jaune Safran | Progrès, progression |
| **3** | Baobab | Arbre majestueux | Ocre Terre | Expérience accumulée |
| **4** | Zénith | Soleil levant digitalisé | Bleu Savant | Excellence, maîtrise |

### Forme des badges
- **Géométrie**: Losange (motif traditionnel africain)
- **Détail**: Bordure en pointillés qui se remplit progressivement
- **Style**: Minimaliste, épuré, lisible sur petits écrans

---

## 🖼️ ÉLÉMENTS GRAPHIQUES

### Motif "Circuit-Pagne"
- **Inspiration**: Bogolan (Mali) + Kente (Ghana) + Circuits imprimés
- **Composition**: Lignes de circuits imprimés (points et traits droits)
- **Usage**: Filigrane sur fonds de page, bordures, séparateurs
- **Opacité**: Légère (10-15%) pour ne pas surcharger

### Logo AFRIDIGI (V1)

**Symbole:**
- Livre ouvert dont les pages s'entrelacent
- Empreinte digitale intégrée
- Lignes de l'empreinte dessinent subtilement la silhouette de l'Afrique

**Texte:**
- **"AFRI"** en Bleu Savant (graisse normale)
- **"DIGI"** en Ocre Terre (en gras)
- Point de connexion "tech" sur le "i" final (représente l'interactivité)

---

## 🎯 INTERFACE UTILISATEUR (UX/UI)

### Principe: Mobile-First

### Structure de la Page d'Accueil

#### 1. **Header**
- Logo à gauche
- Profil utilisateur à droite
- Barre de recherche centrale: *"Quelle compétence veux-tu maîtriser ?"*

#### 2. **Hero Section**
- Photo d'un apprenant en contexte local africain
- Slogan principal
- Bouton CTA Ocre: **"Démarrer mon test gratuit"**

#### 3. **Dashboard (5 Domaines Principaux)**
| Domaine | Icône | Description |
|---------|-------|-------------|
| **Information** | 🔍 Loupe sur carte Afrique | Recherche & navigation |
| **Communication** | 💬 Bulle de chat | Email, messagerie, WhatsApp |
| **Création** | ✍️ Stylo numérique | Contenus digitaux |
| **Sécurité** | 🛡️ Bouclier | Protection des données |
| **Technique** | ⚙️ Engrenages | Concepts tech avancés |

#### 4. **Preuve Sociale**
- Logos des ministères partenaires
- Logos des partenaires techs
- Badges de certification

---

## 🔐 ICONOGRAPHIE STRATÉGIQUE

| Concept | Icône | Signification |
|---------|-------|--------------|
| Mode Hors-Ligne | ☁️ Nuage barré | Téléchargement dispo, économie data |
| Certification | 🏅 Sceau officiel + ruban UA | Reconnaissance officielle |
| Progression | 📊 Barre remplie | Avance, niveau atteint |
| Succès | ✅ Checkmark | Réponse correcte, objectif atteint |
| Erreur | ❌ Cross | Mauvaise réponse, ajustement |
| Apprentissage | 💡 Ampoule | Conseils, astuces, tutoriels |

---

## 🌐 PALETTE COMPLÈTE POUR DÉVELOPPEMENT

```css
:root {
  /* Couleurs Officielles (Brand Book) */
  --color-blue-scholar: #1A237E;      /* Bleu Savant */
  --color-ochre-earth: #E67E22;       /* Ocre Terre */
  --color-emerald-green: #27AE60;     /* Vert Émeraude */
  --color-cream-white: #F4F4F4;       /* Blanc Cassé */
  
  /* Couleurs Complémentaires */
  --color-gradient-start: #667eea;
  --color-gradient-end: #764ba2;
  --color-success: #27AE60;
  --color-warning: #F39C12;
  --color-danger: #E74C3C;
  --color-light: #F5F7FA;
  --color-dark: #2C3E50;
  --color-text: #34495E;
  --color-border: #DDD;
  
  /* Espacements */
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 15px;
  --space-lg: 20px;
  --space-xl: 30px;
  --space-2xl: 40px;
  
  /* Radiuses */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 15px;
  
  /* Shadows */
  --shadow-sm: 0 4px 12px rgba(0,0,0,0.1);
  --shadow-md: 0 5px 20px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 40px rgba(0,0,0,0.15);
  --shadow-xl: 0 15px 40px rgba(0,0,0,0.15);
  
  /* Typographie */
  --font-title: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  
  /* Transitions */
  --transition-fast: 0.3s ease;
  --transition-normal: 0.6s ease;
}
```

---

# 💬 MESSAGE DE MARQUE - AFRIDIGI

**Extraite de**: message.docx  
**Tonalité**: Empowerment + Proximité + Ancrage

---

## 🎯 MISSION (Implicite)

> **Créer une plateforme de certification numérique africaine qui autonomise les jeunes via l'accès à l'éducation tech**

### Mission Étendue
- 🌍 Contexte africain : Mobile Money, WhatsApp, startups locales
- 📊 Système de certification crédible
- ♿ Accessibilité maximale (pas de backend requis)
- 🤝 Communauté d'apprentissage

---

## 🚀 VISION

> **Faire du numérique une opportunité équitable pour tous les Africains, en transformant la technologie en un outil d'autonomisation plutôt qu'une barrière**

---

## 💎 VALEURS FONDAMENTALES

1. **Accessibilité** - Double-click pour démarrer, aucune installation
2. **Localisation** - Contexte africain, langue française
3. **Certificats** - Reconnaissance officielle de compétences
4. **Transparence** - Code source disponible, démarche ouverte
5. **Qualité UX** - Design responsive, fluide, intuitif
6. **Apprentissage** - Feedback immédiat, tutoriels contextuels

---

## 🎤 TON ET VOIX

### 3 Piliers de Tonalité Afridigi

#### 1. **L'Empowerment (Capacité d'Agir)**
- ❌ Ne pas dire: *"C'est difficile"*
- ✅ Dire: *"C'est un défi que tu vas relever"*
- Verbes d'action: Propulser, Maîtriser, Créer, Conquérir
- Exemple: *"Prêt(e) à conquérir le numérique ?"*

#### 2. **La Proximité**
- Utiliser le **"Tu"** (ou "Vous" chaleureux selon région)
- Briser la barrière de la technologie intimidante
- Montrer de l'enthousiasme, de la bienveillance
- Emoji utilisés stratégiquement (🌍, 🚀, 💡, 🏅)

#### 3. **L'Ancrage**
- Métaphores locales: Graine, Baobab, Force du réseau/village
- Rendre le numérique familier, connecté à la culture
- Référence à l'Afrique: "Notre continent", "Nos opportunités"
- Exemples pratiques africains: Mobile Money, WhatsApp, startups locales

---

## ✉️ MESSAGE DE BIENVENUE EMAIL

### Objet
> 🌍 Bienvenue sur Afridigi ! Prêt(e) à conquérir le numérique ?

### Corps du Message

**Bonjour [Prénom] !**

Nous sommes ravis de t'accueillir dans la communauté **Afridigi**.

En rejoignant cette plateforme, tu ne fais pas que suivre une formation : tu rejoins le mouvement qui façonne l'avenir numérique de notre continent. Que tu sois ici pour sécuriser tes données, maîtriser la création de contenus ou devenir un expert technique, nous sommes là pour t'accompagner.

**Ta première étape :** Découvre ton profil et plante ta première **Graine** (ton badge de niveau 1) en complétant ton test de positionnement.

[ BOUTON OCRE : Je commence mon évaluation ]

*Le savoir est une force, le numérique est ton outil.*

À très vite,  
**L'équipe Afridigi**

---

## 💬 MESSAGE DE BIENVENUE TABLEAU DE BORD (UX Pop-up)

**Félicitations, [Prénom] ! 🚀**

Ton voyage numérique commence ici.

💡 **Le savais-tu ?** > Tu peux télécharger tes leçons pour les consulter **hors-ligne** et économiser ta data. Cherche l'icône du petit nuage !

**Ton objectif du jour :** Choisis un domaine (Recherche, Communication, Sécurité...) et réponds à 5 questions pour voir où tu en es.

[ BOUTON BLEU : C'est parti ! ]

---

## 🎨 DIRECTIVES DE TONALITÉ (À Intégrer dans Charte)

### ✅ À FAIRE
- [ ] Utiliser le "Tu" chaleureux
- [ ] Valoriser les défis comme des opportunités
- [ ] Utiliser des verbes d'action (Maîtriser, Créer, Conquérir)
- [ ] Faire référence à la culture et aux exemples locaux
- [ ] Célébrer chaque progrès (badges, certificats, niveaux)
- [ ] Fournir feedback immédiat et encourageant

### ❌ À ÉVITER
- [ ] Un ton trop académique ou sec
- [ ] Utiliser "on" ou "nous" de façon distante
- [ ] Minorer les défis ("c'est facile")
- [ ] Négliger le contexte africain
- [ ] Des messages génériques non personnalisés

---

## 📌 EXAMPLES DE MESSAGES AFRIDIGI

### Pour un résultat réussi (≥80%)
> "🎉 **Excellent !** Tu maîtrises ce domaine ! Tu mérites ton badge de **Baobab**. Prêt(e) à relever le prochain défi ?"

### Pour un résultat moyen (60-79%)
> "💪 **Bien !** Tu progresses ! Tu as déverrouillé la **Savane**. Quelques conseils pour parfaire tes compétences... [Lien tutoriel]"

### Pour un résultat faible (<60%)
> "🌱 **C'est le début !** As-tu remarqué ? Tu progresses avec chaque tentative. Voici un tutoriel pour mieux comprendre... Réessaye ! 💡"

---

## 🌟 PROMESSE DE MARQUE AFRIDIGI

> *Transformer le numérique en opportunité équitable pour chacun, en créant une communauté d'apprenants africains confiants, capable et reconnus.*

**Par**, des badges crédibles  
**Avec**, un accompagnement bienveillant  
**Pour**, un avenir numérique prospère en Afrique

---

**Fin du Message de Marque**
