# 🔥 FIREBASE - QUICK REFERENCE

## 1️⃣ Configuration (5 minutes)

```bash
# 1. Installer
npm install

# 2. Créer .env.local
cp .env.example .env.local

# 3. Ajouter vos credentials (depuis Firebase Console)
# NEXT_PUBLIC_FIREBASE_API_KEY=...
# NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
# etc.

# 4. Lancer
npm run dev
```

## 2️⃣ Imports dans vos Pages

```javascript
// Pour l'authentification
import { authFunctions, utils } from '@/lib/firebase';

// Pour les données utilisateur
import { userDB } from '@/lib/firebase';

// Pour le blog
import { blogDB } from '@/lib/firebase';
```

## 3️⃣ Commandes Courantes

### Auth - Créer un compte
```javascript
await authFunctions.signUp(email, password);
```

### Auth - Se connecter
```javascript
await authFunctions.signIn(email, password);
```

### Auth - Se déconnecter
```javascript
await authFunctions.signOut();
```

### Auth - Récupérer l'utilisateur
```javascript
const user = utils.getCurrentUser();
```

### Auth - Écouter les changements
```javascript
useEffect(() => {
  const unsubscribe = utils.onAuthChange((user) => {
    console.log('User changed:', user);
  });
  return unsubscribe;
}, []);
```

### Data - Sauvegarder progression
```javascript
const userId = utils.getCurrentUser().uid;
await userDB.saveUserProgress(userId, moduleId, score, answers);
```

### Data - Récupérer progression
```javascript
const userId = utils.getCurrentUser().uid;
const progress = await userDB.getUserProgress(userId);
```

### Data - Sauvegarder certificat
```javascript
const userId = utils.getCurrentUser().uid;
await userDB.saveCertificate(userId, {
  module: 'IT',
  level: 'AVANCÉ',
  score: 92,
});
```

### Blog - Récupérer articles
```javascript
const articles = await blogDB.getArticles(10, 0);
```

### Blog - Un article par slug
```javascript
const article = await blogDB.getArticleBySlug('ia-chat-gpt-2024');
```

### Blog - Articles par catégorie
```javascript
const articles = await blogDB.getArticlesByCategory('IA', 10, 0);
```

## 4️⃣ Pages Déjà Connectées

✅ **`/auth/login`** - Firebase Auth intégrée
✅ **`/auth/signup`** - Firebase Auth intégrée

## 5️⃣ Utilisation dans une Page

### Exemple 1: Afficher utilisateur après login
```javascript
'use client';

import { useEffect, useState } from 'react';
import { utils } from '@/lib/firebase';

export default function Page() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = utils.onAuthChange(setUser);
    return unsubscribe;
  }, []);

  return <div>{user ? user.email : 'Not logged in'}</div>;
}
```

### Exemple 2: Sauvegarder un score
```javascript
import { userDB, utils } from '@/lib/firebase';

async function saveQuizScore(score) {
  const user = utils.getCurrentUser();
  if (user) {
    await userDB.saveUserProgress(user.uid, 1, score, []);
  }
}
```

### Exemple 3: Récupérer articles pour le blog
```javascript
'use client';

import { useEffect, useState } from 'react';
import { blogDB } from '@/lib/firebase';

export default function BlogPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await blogDB.getArticles(10, 0);
      setArticles(data);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  );
}
```

## 6️⃣ Firestore Collections (À créer)

### users
```
users/
├── {uid}/ (auto-créé à la signup)
│   ├── email: "user@example.com"
│   ├── createdAt: "2024-03-26T..."
│   ├── displayName: ""
│   ├── progress/ (sub-collection)
│   │   ├── 1 (moduleId)
│   │   │   ├── score: 85
│   │   │   ├── answers: [0, 1, 1, 2, 0]
│   │   │   └── completedAt: "2024-03-26T..."
│   │   └── 2
│   │       └── ...
│   └── certificates/ (sub-collection)
│       ├── cert-001
│       │   ├── module: "IT"
│       │   ├── level: "AVANCÉ"
│       │   ├── score: 92
│       │   └── createdAt: "2024-03-26T..."
```

### articles
```
articles/
├── ia-chat-gpt-2024 (slug as ID)
│   ├── title: "ChatGPT et l'IA en 2024"
│   ├── slug: "ia-chat-gpt-2024"
│   ├── category: "IA"
│   ├── content: "<h2>...</h2>"
│   ├── excerpt: "Découvrez..."
│   ├── image: "🤖"
│   ├── publishedAt: timestamp
│   └── date: "15 mars 2024"
├── securite-mots-passe
│   └── ...
```

## 7️⃣ Erreurs Courantes & Solutions

### Error: "Firebase is not defined"
```bash
npm install firebase --save
```

### Error: "auth is not initialized"
Vérifiez `.env.local` a les bonnes variables

### Error: "Firestore collection not found"
Créez la collection dans Firebase Console

### Error: "Failed to get document because the collection..."
Vérifiez le path exact de la collection

## 8️⃣ Déploiement (Vercel)

```bash
# 1. Push code à GitHub
git add .
git commit -m "Firebase integration"
git push

# 2. Vercel détecte automatiquement
# 3. Ajoutez variables d'environnement:
# Settings > Environment Variables

NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
# ... etc
```

## 9️⃣ Ressources

- [Firebase Auth Docs](https://firebase.google.com/docs/auth)
- [Firestore Docs](https://firebase.google.com/docs/firestore)
- [Next.js + Firebase](https://github.com/vercel/next.js/tree/canary/examples/with-firebase)

## 🔟 Fichiers de Référence

- **`lib/firebase.js`** - Tout le code Firebase
- **`FIREBASE_CONFIG.md`** - Configuration détaillée
- **`FIREBASE_MIGRATION.md`** - Changements faits
- **`app/auth/login/page.jsx`** - Exemple d'intégration
- **`app/auth/signup/page.jsx`** - Exemple d'intégration

---

**Besoin d'aide?** Consultez FIREBASE_CONFIG.md 📖
