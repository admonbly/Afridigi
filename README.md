# AFRIDIGI - Plateforme Web Complète 🌍

**AFRIDIGI** est une plateforme NextJS 14 complète pour l'évaluation et la certification des compétences numériques en Afrique.

## 🚀 Qu'est-ce qui est nouveau (NextJS Version)?

Cette version est une complète **refonte** de l'application React MVP initiale:

✅ **Architecture Full-Stack** - Next.js 14 avec App Router
✅ **8+ Pages Marketing** - Homepage, À Propos, Contact, Partenariats
✅ **Système Blog Complet** - Articles dynamiques avec catégories
✅ **Quiz Intégré** - Mode entraînement, mode démo, examen officiel
✅ **Tableau de Bord Utilisateur** - Suivi de progression, certificats
✅ **Attribution Supabase-Ready** - Prêt pour auth et API
✅ **Design Mobile-First** - Optimisé pour connexions lentes (Afrique)
✅ **Performances** - Optimisé avec Tailwind CSS pur

## 📁 Structure du Projet

```
afridigi-web/
├── app/                          # Next.js 14 App Router
│   ├── (marketing)/             # Marketing pages (about, contact, partnerships)
│   ├── certification/           # Certification section (5 sub-pages)
│   ├── blog/                    # Blog list + dynamic articles
│   ├── dashboard/               # User dashboard
│   ├── auth/                    # Authentication (login, signup)
│   ├── layout.tsx               # Global layout
│   ├── page.jsx                 # Homepage (6 sections)
│   └── globals.css              # Global styles (Tailwind)
├── components/
│   ├── layout/
│   │   ├── Header.jsx           # Navigation globale
│   │   └── Footer.jsx           # Footer + newsletter
│   ├── QuizComponent.jsx        # Quiz réutilisable (3 modes)
│   ├── CTAButton.jsx            # Bouton CTA responsive
│   ├── Card.jsx                 # Composant Card réutilisable
│   └── Hero.jsx                 # Hero section
├── lib/
│   ├── supabase.js              # Client Supabase + DB helpers
│   └── stores.js                # Zustand stores (auth, progress, blog)
├── public/                       # Assets statiques
├── .env.example                 # Variables d'environnement template
├── tailwind.config.js           # Configuration Tailwind
├── next.config.js               # Configuration Next.js
├── tsconfig.json                # Configuration TypeScript
└── package.json                 # Dépendances

```

## 🛠️ Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: React 18.2.0
- **State Management**: Zustand 4.4.0
- **Backend**: Firebase (Auth + Firestore)
- **Language**: JavaScript/JSX

## ⚡ Installation & Démarrage

### 1️⃣ Installation des dépendances
```bash
npm install
```

### 2️⃣ Configuration Firebase
```bash
cp .env.example .env.local
```

Puis remplissez les variables avec vos credentials Firebase:
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDx...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=myproject.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=myproject-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=myproject.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456:web:abc
```

Consultez [FIREBASE_CONFIG.md](./FIREBASE_CONFIG.md) pour les instructions détaillées.

### 3️⃣ Démarrer le serveur de développement
```bash
npm run dev
```

L'application s'ouvrira automatiquement sur `http://localhost:3000`

## 📄 Pages et Routes

### Marketing (Public)
- `/` - **Accueil** (Hero + 6 sections)
- `/about` - À Propos
- `/contact` - Contact
- `/partenariats` - Partenariats
- `/blog` - Blog (liste articles)
- `/blog/[slug]` - Article détaillé

### Certification
- `/certification` - Index/redirection
- `/certification/presentation` - Présentation
- `/certification/s-entrainer` - Mode entraînement
- `/certification/demo` - Mode démo
- `/certification/examen` - Examen officiel
- `/certification/referentiel` - Référentiel

### Utilisateur
- `/auth/login` - Connexion
- `/auth/signup` - Inscription
- `/dashboard` - Tableau de bord (protégé)

## 📊 Composants Réutilisables

### Header
- Navigation globale sticky
- Menu mobile responsive
- Boutons connexion/CTA

### Hero
- 4 variantes (default, accent, secondary)
- Texte + image
- CTA intégré

### Card
- 3 variantes (default, accent, secondary)
- Icône + titre + description
- Hover effects

### CTAButton
- 4 variantes (primary, secondary, outline, ghost)
- 3 tailles (sm, md, lg)
- Support Link ou button

### QuizComponentIntégrée avec Firebase)

L'application intègre **Firebase Authentication**. Pour l'utiliser:

```javascript
import { authFunctions } from '@/lib/firebase';

// Signup
await authFunctions.signUp(email, password);

// Login
await authFunctions.signIn(email, password);

// Logout
await authFunctions.signOut();

// Get session
const user = await authFunctions.getSession();
```

Les pages d'authentification (`/auth/login` et `/auth/signup`) sont prêtes à l'emploi!
// Login
await auth.signIn(email, password);

// Logout
await auth.signOut();
```

## 📱 Optimisations pour Afrique

✅ **Mobile-First Design** - Priorité mobile
✅ **Low Bandwidth** - CSS pur, pas de frameworks lourd
✅ **Progressive Enhancement** - Fonctionne avec ou sans JS
✅ **Image Optimization** - Emojis au lieu d'images
✅ **Compression** - Build minimal (~50KB gzipped)

## 🎨 Design System

### Couleurs
- **Primary**: `#0D1B47` (Bleu foncé)
- **Accent**: `#FF6B35` (Orange)
- **Secondary**: `#06B6D4` (Cyan)
- **Neutral**: échelle de gris complète

### Typographie
- **Headers**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Fallback**: System fonts

### Spacing
- Section padding: 5rem (remplaceable)
- Breakpoints: 640px, 768px, 1024px, 1280px

## 🚢 Déploiement

### Sur Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Sur Netlify
```bash
npm run build
# Déployer le dossier .next
```

### Variables d'environnement
Ajouter sur le provider:
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## 📈 Prochaines Étapes

- [ ] Intégrer Supabase Auth
- [ ] Configurer les tables de database
- [ ] Ajouter plus d'articles au blog
- [ ] Implémenter les certificats PDF
- [ ] Analytics (Google Analytics / Posthog)
- [ ] Support multilingue (i18n)
- [ ] Tests (Jest + React Testing Library)

## 🐛 Troubleshooting

**Error: "Failed to fetch..."**
→ Vérifier les variables d'environnement Supabase

**Page blanche au démarrage**
→ `npm run build && npm run start`

**Styles non appliqués**
→ `npm install && npm run dev` (rebuild Tailwind)

## 📞 Support

Pour des questions ou problèmes:
1. Consulter le [README.md](./README.md) du MVP
2. Vérifier les cases `.env.example`
3. Ouvrir un issue sur le repo

## 📄 License

MIT © AFRIDIGI 2024

---

**Prêt à transformer le secteur numérique en Afrique?** 🚀
Commencez par `npm run dev` et explorez l'application!
