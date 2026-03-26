# 🚀 GUIDE DE DÉMARRAGE RAPIDE - AFRIDIGI WEB

**Votre nouvelle plateforme Next.js est prête!** Voici comment commencer en 5 minutes.

## ✅ Prérequis
- Node.js 18+ (npm 9+)
- Code Editor (VS Code recommandé)
- Compte Supabase (gratuit sur https://supabase.com)

## 📝 Étapes de Démarrage

### Étape 1️⃣ : Préparation (30 secondes)

Ouvrez un terminal dans le dossier `afridigi-web`:

```bash
# Installer les dépendances
npm install
```

### Étape 2️⃣ : Configuration Firebase (3 minutes)

1. Allez sur https://console.firebase.google.com
2. Sélectionnez votre projet existant
3. Allez à **⚙️ Settings** → Onglet **General**
4. Trouvez votre configuration web (icône `</>`)
5. Copiez:
   - **apiKey** → `NEXT_PUBLIC_FIREBASE_API_KEY`
   - **authDomain** → `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - **projectId** → `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - **storageBucket** → `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - **messagingSenderId** → `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - **appId** → `NEXT_PUBLIC_FIREBASE_APP_ID`

Créez le fichier `.env.local`:

```bash
cp .env.example .env.local
```

Puis éditez `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDx...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=myproject.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=myproject-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=myproject.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456:web:abc
```

**Bonus:** Lisez [FIREBASE_CONFIG.md](./FIREBASE_CONFIG.md) pour plus de détails!

### Étape 3️⃣ : Lancer l'application (1 minute)

```bash
npm run dev
```

L'application s'ouvrira automatiquement sur **http://localhost:3000** ✨

## 🎯 Premières actions

👉 **Testez les modules de quiz:**
- Allez sur http://localhost:3000/certification/s-entrainer
- Sélectionnez le module "IT (Ordinateur)"
- Répondez aux 5 questions

👉 **Explorez le blog:**
- http://localhost:3000/blog
- Cliquez sur un article

👉 **Consultez le tableau de bord:**
- http://localhost:3000/dashboard
- Vous verrez toutes les statistiques (mock data)

## 📂 Structure des Fichiers Importants

| Fichier | Rôle |
|---------|------|
| `app/page.jsx` | 🏠 Homepage (6 sections) |
| `app/certification/` | 📚 Section certification |
| `app/blog/` | 📰 Blog articles |
| `app/dashboard/` | 📊 Dashboard utilisateur |
| `components/QuizComponent.jsx` | 🎯 Quiz réutilisable |
| `lib/supabase.js` | 🔐 Client Supabase |
| `tailwind.config.js` | 🎨 Design system |

## 🔧 Commandes Utiles

```bash
# Mode développement (avec hot reload)
npm run dev

# Build pour production
npm run build

# Prévisualiser la build
npm run start

# Vérifier les erreurs (lint)
npm run lint
```

## 🌐 Routes Disponibles

**Public (pas de login requis):**
- `/` - Accueil
- `/about` - À propos
- `/contact` - Contact
- `/partenariats` - Partenariats
- `/blog` - Blog
- `/certification` - Certification (tout)
- `/auth/login` - Page de connexion
- `/auth/signup` - Page d'inscription

**Protégées (login requis - à implémenter):**
- `/dashboard` - Tableau de bord utilisateur

## 🎨 Personnalisation Rapide

### Changer les couleurs

Éditez `tailwind.config.js`:

```javascript
colors: {
  primary: "#0D1B47",    // Bleu foncé
  accent: "#FF6B35",     // Orange
  secondary: "#06B6D4",  // Cyan
}
```

### Ajouter une page

Créez un fichier dans `app/hello/page.jsx`:

```jsx
export default function HelloPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold">Bonjour!</h1>
      </div>
    </section>
  );
}
```

→ Accessible sur `http://localhost:3000/hello`

### Ajouter une route article

Articles dynamiques supportés. Éditez `app/blog/[slug]/page.jsx` pour ajouter plus d'articles:

```javascript
const articles = {
  'mon-article': {
    title: 'Mon Article',
    content: '<h2>Contenu</h2>',
  },
};
```

## ⚠️ Pièges Courants

### ❌ "Cannot find module"
```bash
# Solution:
npm install
npm run dev
```

### ❌ Supabase variables vides
→ Vérifier le fichier `.env.local`

### ❌ Port 3000 déjà utilisé
```bash
# Solution - changer le port:
npm run dev -- -p 3001
```

## 🔮 Prochaines Étapes

1. **Intégrer Supabase Auth** - Connecter login/signup (5 lignes de code)
2. **Créer les tables** - user_progress, articles (dans Supabase console)
3. **Ajouter des articles** - Remplir le blog avec du contenu
4. **Certificats PDF** - Intégrer une lib comme html2pdf

## 🚀 Déployer sur Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel

# Ajouter les variables d'environnement dans Vercel dashboard
```

⏱️ **Temps total:** ~5 minutes
✨ **Résultat:** Une plateforme web complète et moderne

---

**Des Questions?** Consultez:
- README.md - Documentation complète
- Les commentaires dans les fichiers components/
- https://nextjs.org/docs - Documentation Next.js

**Bon développement! 🎉**
